import Link from "next/link";
import type { Metadata } from "next";
import { getBlogPosts } from "../lib/blog";

export const metadata: Metadata = {
  title: "Blog | peri",
  description: "Perimenopause education, symptom tracking guides, and product comparisons from peri."
};

export default function BlogIndexPage() {
  const posts = getBlogPosts();

  return (
    <section className="bg-creta px-5 py-16 md:px-12 md:py-20">
      <div className="mx-auto max-w-[900px]">
        <p className="text-[11px] uppercase tracking-[0.14em] text-siena">Blog</p>
        <h1 className="mt-3 font-display text-[clamp(34px,4vw,50px)] text-umbra">Perimenopause guides</h1>
        <p className="mt-4 max-w-[620px] text-[15px] leading-relaxed text-pizarra">
          Evidence-informed educational articles to help you understand symptoms, identify patterns, and prepare for
          better doctor conversations.
        </p>

        <div className="mt-12 grid gap-4">
          {posts.length === 0 ? (
            <p className="rounded-[14px] bg-[rgba(44,40,37,0.04)] p-6 text-[14px] text-pizarra">
              No posts yet. Add markdown files under `content/blog`.
            </p>
          ) : (
            posts.map((post) => (
              <article key={post.slug} className="rounded-[14px] bg-[rgba(44,40,37,0.04)] p-6">
                <p className="text-[11px] uppercase tracking-[0.08em] text-siena">
                  {post.frontmatter.category || "Uncategorized"}
                </p>
                <h2 className="mt-2 text-[22px] font-semibold text-umbra">
                  <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-siena">
                    {post.frontmatter.title || post.slug}
                  </Link>
                </h2>
                <p className="mt-2 text-[14px] leading-relaxed text-pizarra">
                  {post.frontmatter.description || "Draft article placeholder."}
                </p>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
