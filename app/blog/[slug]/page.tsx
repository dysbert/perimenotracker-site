import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getBlogPosts } from "../../lib/blog";

type BlogPostPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    return { title: "Post not found | peri" };
  }

  return {
    title: post.frontmatter.title ? `${post.frontmatter.title} | peri` : `${post.slug} | peri`,
    description: post.frontmatter.description || "Perimenopause education article from peri."
  };
}

function renderSimpleMarkdown(content: string) {
  if (!content.trim()) {
    return <p className="text-[15px] leading-relaxed text-pizarra">Draft content coming soon.</p>;
  }

  return content.split("\n\n").map((block, index) => {
    const value = block.trim();
    if (!value) return null;

    if (value.startsWith("### ")) {
      return (
        <h3 key={index} className="mt-8 text-[22px] font-semibold text-umbra">
          {value.replace(/^### /, "")}
        </h3>
      );
    }

    if (value.startsWith("## ")) {
      return (
        <h2 key={index} className="mt-10 text-[28px] font-semibold text-umbra">
          {value.replace(/^## /, "")}
        </h2>
      );
    }

    if (value.startsWith("# ")) {
      return (
        <h1 key={index} className="mt-10 text-[34px] font-semibold text-umbra">
          {value.replace(/^# /, "")}
        </h1>
      );
    }

    return (
      <p key={index} className="mt-5 text-[15px] leading-relaxed text-pizarra">
        {value}
      </p>
    );
  });
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article className="bg-creta px-5 py-16 md:px-12 md:py-20">
      <div className="mx-auto max-w-[760px]">
        <p className="text-[11px] uppercase tracking-[0.08em] text-siena">{post.frontmatter.category || "Draft"}</p>
        <h1 className="mt-3 font-display text-[clamp(32px,4vw,46px)] text-umbra">
          {post.frontmatter.title || post.slug}
        </h1>
        {post.frontmatter.description ? (
          <p className="mt-4 text-[16px] leading-relaxed text-pizarra">{post.frontmatter.description}</p>
        ) : null}

        <div className="mt-10">{renderSimpleMarkdown(post.content)}</div>
      </div>
    </article>
  );
}
