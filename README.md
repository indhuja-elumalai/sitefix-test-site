# sitefix-test-site

A small Next.js site for a made-up design studio, "Brightleaf Studio", with website
problems planted on purpose. SiteFix inspects it, then fixes the problems through pull
requests, so each fix can be tested on a preview deploy before it is merged.

- `app/`: pages on the App Router (titles and descriptions in `metadata` and `generateMetadata`)
- `pages/legacy.js`: one page on the older Pages Router (`next/head`)
- `data/posts.js`: blog posts kept in the repository
- `next.config.mjs`: redirects
- `SITEFIX-PLANTED.md`: every planted problem, where it lives in the code and what the fix is

Run it: `npm install`, then `npm run dev` (or `npm run build` and `npm start`).
