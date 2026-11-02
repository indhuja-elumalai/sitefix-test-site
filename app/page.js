import Link from "next/link";

export const metadata = {
  title: "Brightleaf Studio: calm, fast websites for small businesses",
  description: "We design and build websites that load fast, read well and bring in enquiries, for cafes, clinics, shops and studios.",
  openGraph: {
    title: "Brightleaf Studio",
    description: "Calm, fast websites for small businesses.",
    images: ["/images/team.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <h1>Websites that feel calm and load fast</h1>
      <p>
        Brightleaf Studio is a small team that designs and builds websites for local businesses. We start with what
        your visitors need to find, then make every page quick on a phone, easy to read and simple to update.
      </p>
      {/* PLANTED: image without alt text */}
      <img src="/images/team.jpg" width="1200" height="700" />
      <h2>What we do</h2>
      <p>
        From a one-page site for a new cafe to a full shop with bookings, we handle design, writing, building and
        hosting. See our <Link href="/services">services</Link> or read <Link href="/about">about the team</Link>.
      </p>
      <p>
        Planning a new site? Start with our guide to <Link href="/blog/first-website">your first website</Link>,
        or look at <Link href="/old-pricing">our pricing</Link>.
      </p>
    </>
  );
}
