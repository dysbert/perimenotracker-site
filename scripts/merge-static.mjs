import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "out");
const dist = join(root, "dist");

if (!existsSync(out)) {
  console.error("[merge-static] Missing out/ — run `next build` first.");
  process.exit(1);
}
if (!existsSync(dist)) {
  console.error("[merge-static] Missing dist/ — run `astro build` second.");
  process.exit(1);
}

const srcBlog = join(dist, "blog");
if (existsSync(srcBlog)) {
  const destBlog = join(out, "blog");
  if (existsSync(destBlog)) rmSync(destBlog, { recursive: true });
  cpSync(srcBlog, destBlog, { recursive: true });
}

const srcAstro = join(dist, "_astro");
if (existsSync(srcAstro)) {
  const destAstro = join(out, "_astro");
  if (!existsSync(destAstro)) mkdirSync(destAstro, { recursive: true });
  cpSync(srcAstro, destAstro, { recursive: true });
}

console.log("[merge-static] Merged Astro blog + _astro into Next static out/");
