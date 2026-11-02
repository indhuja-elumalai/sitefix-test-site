import Head from "next/head";

// A page on the older Pages Router, as many sites still have.
// PLANTED: no title or meta description, and the headings skip from H1 to H3
export default function Legacy() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main style={{ maxWidth: 760, margin: "0 auto", padding: "32px 24px", fontFamily: "system-ui, sans-serif" }}>
        <h1>Our old website</h1>
        <p>
          This page is kept from our first website, built before we moved to the new design. It still gets visits from
          old links, so we left it here with a short history of the studio and a link back to the current site.
        </p>
        <h3>A short history</h3>
        <p>
          Brightleaf began as a two-person studio making websites for friends and neighbours. The first version of
          this site was a single page with our phone number and three photos of a bakery we had just finished.
        </p>
        <p><a href="/">Back to the current site</a></p>
      </main>
    </>
  );
}
