import type { Html, Parent, Root } from "mdast";
import { visit } from "unist-util-visit";

const JSON_LD_TYPE = /type\s*=\s*["']application\/ld\+json["']/i;

export function remarkExtractJsonLd() {
  return (tree: Root, file: any) => {
    const blocks: string[] = [];
    const removals: Array<{ parent: Parent; index: number }> = [];

    visit(tree, "html", (node: Html, index, parent: Parent | null | undefined) => {
      if (typeof index !== "number" || !parent) return;

      const value = node.value?.trim() ?? "";
      if (!value.toLowerCase().startsWith("<script")) return;
      if (!JSON_LD_TYPE.test(value)) return;

      blocks.push(node.value);
      removals.push({ parent, index });
    });

    for (const removal of removals.sort((a, b) => b.index - a.index)) {
      removal.parent.children.splice(removal.index, 1);
    }

    file.data ??= {};
    file.data.astro ??= {};
    file.data.astro.frontmatter ??= {};

    const previous = file.data.astro.frontmatter.ldJsonScripts;
    const merged = [...(Array.isArray(previous) ? previous : []), ...blocks];

    file.data.astro.frontmatter = {
      ...file.data.astro.frontmatter,
      ldJsonScripts: merged
    };
  };
}
