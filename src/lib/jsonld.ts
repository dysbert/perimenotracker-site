/**
 * Returns the inner HTML of a <script type="application/ld+json">…</script> block
 * (as written in Markdown) so it can be injected into the document head.
 */
export function extractJsonLdInnerHtml(scriptBlock: string): string {
  const match = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/i.exec(
    scriptBlock.trim()
  );
  return match?.[1]?.trim() ?? scriptBlock.trim();
}
