import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Brightleaf Studio",
  description: "Brightleaf Studio designs calm, fast websites for small businesses, from first sketch to launch and beyond.",
};

// PLANTED: <html> has no lang attribute
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="top">
          <Link href="/" className="brand">Brightleaf Studio</Link>
          <nav>
            <Link href="/services">Services</Link>
            <Link href="/about">About</Link>
            <Link href="/blog/first-website">Blog</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="foot">
          <p>© Brightleaf Studio. Made for testing SiteFix.</p>
          {/* PLANTED: link to a page that doesn't exist, on every page */}
          <Link href="/old-pricing">Pricing</Link> · <Link href="/legacy">Our old site</Link> · <Link href="/start">Get started</Link>
        </footer>
      </body>
    </html>
  );
}
