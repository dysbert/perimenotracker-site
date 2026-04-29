import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";
import { remarkExtractJsonLd } from "./src/plugins/remark-extract-jsonld";

export default defineConfig({
  site: "https://getperi.app",
  integrations: [mdx()],
  markdown: {
    remarkPlugins: [remarkExtractJsonLd]
  }
});
