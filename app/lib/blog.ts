import fs from "node:fs";
import path from "node:path";

export type BlogPostFrontmatter = {
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  relatedPosts: string[];
};

export type BlogPost = {
  slug: string;
  frontmatter: BlogPostFrontmatter;
  content: string;
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

const emptyFrontmatter: BlogPostFrontmatter = {
  title: "",
  description: "",
  date: "",
  author: "",
  category: "",
  tags: [],
  relatedPosts: []
};

function parseArrayValue(rawValue: string): string[] {
  const value = rawValue.trim();
  if (!value) return [];
  if (value.startsWith("[") && value.endsWith("]")) {
    const inner = value.slice(1, -1).trim();
    if (!inner) return [];
    return inner
      .split(",")
      .map((part) => part.trim().replace(/^["']|["']$/g, ""))
      .filter(Boolean);
  }
  return [];
}

function parseFrontmatter(markdown: string): { frontmatter: BlogPostFrontmatter; content: string } {
  if (!markdown.startsWith("---")) {
    return { frontmatter: { ...emptyFrontmatter }, content: markdown.trim() };
  }

  const match = markdown.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) {
    return { frontmatter: { ...emptyFrontmatter }, content: markdown.trim() };
  }

  const [, rawFrontmatter, content] = match;
  const parsed: BlogPostFrontmatter = { ...emptyFrontmatter };

  for (const line of rawFrontmatter.split("\n")) {
    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) continue;
    const key = line.slice(0, separatorIndex).trim() as keyof BlogPostFrontmatter;
    const rawValue = line.slice(separatorIndex + 1).trim();
    if (!(key in parsed)) continue;

    if (key === "tags" || key === "relatedPosts") {
      parsed[key] = parseArrayValue(rawValue);
      continue;
    }

    parsed[key] = rawValue.replace(/^["']|["']$/g, "");
  }

  return { frontmatter: parsed, content: content.trim() };
}

export function getBlogPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const fileNames = fs.readdirSync(BLOG_DIR).filter((fileName) => fileName.endsWith(".md"));
  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const filePath = path.join(BLOG_DIR, fileName);
    const markdown = fs.readFileSync(filePath, "utf8");
    const { frontmatter, content } = parseFrontmatter(markdown);
    return { slug, frontmatter, content };
  });

  return posts.sort((a, b) => {
    const dateA = Date.parse(a.frontmatter.date);
    const dateB = Date.parse(b.frontmatter.date);

    if (Number.isNaN(dateA) || Number.isNaN(dateB)) return a.slug.localeCompare(b.slug);
    return dateB - dateA;
  });
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  return getBlogPosts().find((post) => post.slug === slug) ?? null;
}
