// On purpose: a thank-you page is hidden from search and short. SiteFix should let
// the client keep it as is.
export const metadata = {
  title: "Thank you",
  description: "Thanks for getting in touch with Brightleaf Studio; we will reply within one working day.",
  robots: { index: false, follow: true },
};

export default function Thanks() {
  return <h1>Thanks, we will be in touch soon.</h1>;
}
