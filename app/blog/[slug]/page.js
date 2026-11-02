import { notFound } from "next/navigation";
import { posts } from "../../../data/posts";

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return {};
  return {
    title: post.title,
    ...(post.description ? { description: post.description } : {}),
    // PLANTED: the canonical points at an old address that no longer exists
    alternates: { canonical: `/blog/old/${slug}` },
  };
}

export default async function Post({ params }) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();
  return (
    <article>
      <h1>{post.title}</h1>
      {post.body.map((p, i) => <p key={i}>{p}</p>)}
      <p>
        Read next: <a href="/blog/speed-matters">why page speed matters</a> or <a href="/old-blog">the old blog</a>.
      </p>
    </article>
  );
}
