TikGrab 5.2 — Public Rating

1. Create a Supabase project.
2. Open SQL Editor and run SUPABASE-SETUP.sql.
3. Open Project Settings/API and copy the project's URL and publishable key.
4. Put them in supabase-config.js.
5. Upload the whole TikGrab folder to GitHub Pages.

Security:
- Only the public/publishable key belongs in the browser.
- NEVER put a service_role key in supabase-config.js.
- Public users can only read published reviews and submit new reviews.
- Admin moderation is intentionally reserved for the next admin-dashboard phase.

The existing TikGrab downloader code is preserved; only the old local-review block was replaced with the public-review adapter.
