# TikGrab 5.2.8 — Production Checklist

## Database
- Run `SUPABASE-5.2.7-ANTI-SPAM.sql` once if the anti-spam migration has not already been applied.
- Confirm `public.reviews` has no direct INSERT grant for `anon` or `authenticated`.
- Confirm RLS remains enabled on `public.reviews`.
- Do not put a Supabase service-role/secret key in frontend files.

## Frontend
- `index.html` uses cache-busted `script.js?v=5.2.8`.
- `index.html` uses cache-busted `supabase-config.js?v=5.2.8`.
- No UI or downloader behavior was intentionally changed in this hardening pass.

## Final smoke test
1. Open the site in a fresh/private window.
2. Submit one rating.
3. Confirm an immediate second rating is rate-limited.
4. Test one normal TikTok download.
5. Test a small batch.
6. Confirm favicon still loads.
