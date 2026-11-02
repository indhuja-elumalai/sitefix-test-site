// PLANTED: title too long, description too short
export const metadata = {
  title: "Website design, development, hosting and ongoing care services for small local businesses",
  description: "Our services.",
};

export default function Services() {
  return (
    <>
      <h1>Services</h1>
      <p>
        Every project includes design, writing help, building and a month of care after launch. Pick the package that
        fits where your business is today; you can always add more later.
      </p>
      {/* PLANTED: alt text that is just a file name */}
      <img src="/images/studio.jpg" alt="IMG_4021.jpg" width="1200" height="700" />
      <h2>Starter site</h2>
      <p>A focused one to five page site with a contact form, ready in three weeks. Ideal for new businesses.</p>
      <h2>Growth site</h2>
      <p>Up to twenty pages, a blog, bookings or a small shop, with search basics set up from the start.</p>
      {/* PLANTED: an image that doesn't exist */}
      <img src="/images/missing-hero.png" alt="Our care plan dashboard" width="800" height="400" />
      <h2>Care plan</h2>
      <p>Monthly updates, backups, speed checks and small changes, so the site stays healthy after launch.</p>
    </>
  );
}
