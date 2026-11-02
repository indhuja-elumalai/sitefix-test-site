const BASE = process.env.SITE_URL || "https://sitefix-test-site.vercel.app";

// PLANTED: the sitemap lists a page that doesn't exist (/old-pricing)
export default function sitemap() {
  return ["", "/services", "/about", "/contact", "/blog/first-website", "/blog/speed-matters", "/old-pricing"].map((p) => ({ url: `${BASE}${p}` }));
}
