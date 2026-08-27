-- TikGrab 5.2.8 — production hardening
-- TikGrab 5.2.7 — review anti-spam hardening
-- Run this block in Supabase SQL Editor BEFORE deploying the 5.2.7 frontend.
--
-- The browser no longer inserts directly into public.reviews.
-- It calls public.submit_review(), which rate-limits submissions by request identity.
-- The rate-limit table is kept in a private schema and is not exposed through the Data API.

create schema if not exists private;

create table if not exists private.review_rate_limits (
  rate_key text primary key,
  last_submitted_at timestamptz not null
);

revoke all on table private.review_rate_limits from public, anon, authenticated;

alter table public.reviews enable row level security;

revoke insert on table public.reviews from anon, authenticated;
revoke update, delete on table public.reviews from anon, authenticated;

drop policy if exists "Public can submit reviews" on public.reviews;

create or replace function public.submit_review(
  p_rating integer,
  p_name text,
  p_review_text text
)
returns bigint
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_headers json;
  v_ip text;
  v_user_agent text;
  v_rate_key text;
  v_last timestamptz;
  v_id bigint;
  v_name text;
  v_review text;
begin
  if p_rating is null or p_rating < 1 or p_rating > 5 then
    raise exception 'Rating tidak valid';
  end if;

  v_name := left(trim(coalesce(p_name, 'Pengguna TikGrab')), 40);
  v_review := left(trim(coalesce(p_review_text, '')), 300);

  if char_length(v_name) < 1 then
    v_name := 'Pengguna TikGrab';
  end if;

  if char_length(v_review) < 1 then
    raise exception 'Ulasan tidak boleh kosong';
  end if;

  v_headers := coalesce(current_setting('request.headers', true), '{}')::json;
  v_ip := coalesce(
    split_part(v_headers->>'x-forwarded-for', ',', 1),
    v_headers->>'cf-connecting-ip',
    ''
  );
  v_user_agent := coalesce(v_headers->>'user-agent', '');

  -- Pseudonymous rate key; raw IP is not stored.
  v_rate_key := md5(v_ip || '|' || v_user_agent);

  -- Serialize concurrent submissions for the same key.
  perform pg_advisory_xact_lock(hashtext(v_rate_key));

  select last_submitted_at
    into v_last
    from private.review_rate_limits
   where rate_key = v_rate_key
   for update;

  if v_last is not null and v_last > now() - interval '10 minutes' then
    raise exception 'Terlalu banyak percobaan. Coba lagi beberapa menit.';
  end if;

  insert into public.reviews (rating, name, review_text, status)
  values (p_rating, v_name, v_review, 'published')
  returning id into v_id;

  insert into private.review_rate_limits (rate_key, last_submitted_at)
  values (v_rate_key, now())
  on conflict (rate_key)
  do update set last_submitted_at = excluded.last_submitted_at;

  return v_id;
end;
$$;

revoke execute on function public.submit_review(integer, text, text) from public;
revoke execute on function public.submit_review(integer, text, text) from authenticated;
grant execute on function public.submit_review(integer, text, text) to anon;
