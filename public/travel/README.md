# /travel

Drop self-contained HTML files here. Each file becomes a shareable URL.

## How to add an itinerary

1. Save the HTML file to this folder with a URL-safe filename, e.g.
   - `paris-2026-03.html`
   - `tokyo-family.html`
2. Commit and push:
   ```
   git add public/travel/paris-2026-03.html
   git commit -m "Add Paris itinerary"
   git push
   ```
3. Netlify auto-deploys in ~30s. The URL will be:
   `https://bobbytumpak.com/travel/<filename>.html`

## Notes

- This folder is **not linked** from the main site.
- `robots.txt` blocks search engines from crawling `/travel/`.
- Hitting `https://bobbytumpak.com/travel/` (no filename) returns 404 — no directory listing.
- For a shorter URL, drop the `.html` and Netlify still serves it: `bobbytumpak.com/travel/paris-2026-03`.
- URLs are guessable if the filename is common. Use a random suffix if you want share-only privacy, e.g. `paris-2026-03-x7q2.html`.
