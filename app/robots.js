const BASE = process.env.SITE_URL || "https://sitefix-test-site.vercel.app";

export default function robots() {
  return { rules: [{ userAgent: "*", allow: "/" }], sitemap: `${BASE}/sitemap.xml` };
}
