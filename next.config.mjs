/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // PLANTED: a chain of three redirects (/start -> /begin -> /welcome -> /services)
      { source: "/start", destination: "/begin", permanent: true },
      { source: "/begin", destination: "/welcome", permanent: true },
      { source: "/welcome", destination: "/services", permanent: true },
      // PLANTED: a redirect that ends on a page that doesn't exist
      { source: "/old-blog", destination: "/blog-archive", permanent: true },
    ];
  },
};

export default nextConfig;
