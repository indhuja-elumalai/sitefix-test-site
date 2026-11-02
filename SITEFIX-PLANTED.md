# Planted problems

What SiteFix should find on this site, where each problem lives in the code, and what
fixing it means. Checked with a SiteFix inspection of a local build.

| # | Problem (SiteFix type) | Page | Where in the code | The fix |
|---|---|---|---|---|
| 1 | No page language (`lang-missing`) | every page | `app/layout.js`: `<html>` | `<html lang="en">` |
| 2 | Broken link to own page (`http-4xx-internal`) | `/old-pricing`, linked from every page | `app/layout.js` footer, `app/page.js` | Link to an existing page, or add a redirect |
| 3 | Redirect chain (`redirect-chain`) | `/start` | `next.config.mjs` | Point `/start`, `/begin` and `/welcome` straight to `/services` |
| 4 | Redirect to an error (`redirect-to-error`) | `/old-blog` | `next.config.mjs` | Redirect to an existing page, such as `/blog/first-website` |
| 5 | Image without alt text (`image-alt-missing`) | `/` | `app/page.js` | Add a description, e.g. `alt="The Brightleaf team at work in the studio"` |
| 6 | Alt text that is a file name (`image-alt-unhelpful`) | `/services` | `app/services/page.js` | Describe the image |
| 7 | Broken image (`image-broken`) | `/services` | `app/services/page.js`: `/images/missing-hero.png` | Use an existing image, or remove it |
| 8 | Image too large (`image-oversized`) | `/services` | `public/images/studio.jpg` (about 440 KB) | Resize and compress under 300 KB |
| 9 | Title too long (`title-too-long`) | `/services` | `app/services/page.js` `metadata.title` | Shorter title, up to 60 characters |
| 10 | Title too long (`title-too-long`) | `/blog/first-website` | `data/posts.js` `title` | Shorter title, up to 60 characters |
| 11 | Description too short (`description-too-short`) | `/services` | `app/services/page.js` `metadata.description` | 50 to 160 characters |
| 12 | Hidden from search (`robots-noindex`) | `/contact` | `app/contact/page.js` `metadata.robots` | Remove `index: false` |
| 13 | Two H1 headings (`h1-multiple`) | `/about` | `app/about/page.js` | Make the second one an `h2` |
| 14 | Spelling (`copy-spelling`) | `/about` | `app/about/page.js`: "recieve", "seperate" | "receive", "separate" |
| 15 | Repeated word (`content-repeated-word`) | `/blog/first-website` | `data/posts.js`: "than than" | "than" |
| 16 | Placeholder text (`content-placeholder`) | `/blog/speed-matters` | `data/posts.js`: "Lorem ipsum…" | Real introduction (needs the client's words) |
| 17 | Canonical points to a missing page (`canonical-broken-target`) | both blog posts | `app/blog/[slug]/page.js` `alternates.canonical` | `/blog/${slug}` |
| 18 | No canonical tag (`canonical-missing`) | `/`, `/about`, `/contact`, … | each page's `metadata`, or `metadataBase` in `app/layout.js` | `alternates: { canonical: "/…" }` |
| 19 | No title (`title-missing`) | `/legacy` | `pages/legacy.js` `<Head>` (Pages Router) | `<title>…</title>` |
| 20 | No meta description (`description-missing`) | `/legacy` | `pages/legacy.js` `<Head>` | `<meta name="description" …>` |
| 21 | Heading levels skip (`heading-skip`) | `/legacy` | `pages/legacy.js`: H1 then H3 | Make the H3 an H2 |
| 22 | No sharing tags (`og-missing`) | `/about`, `/contact`, blog posts | each page's `metadata.openGraph` | Add `openGraph` title, description and image |

On purpose, not a problem:

- `/thanks` is hidden from search and short. SiteFix should let the client **keep it as is**.
- The speed-matters post has no description of its own and shows the site-wide one. Next.js does that, so SiteFix doesn't report it as missing.

Also expected: thin-page warnings, because the pages are short, and speed findings that
depend on where the site runs.
