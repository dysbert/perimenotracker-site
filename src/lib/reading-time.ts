export type ReadingTime = { minutes: number; label: string };

export function getReadingTime(markdownBody: string | undefined, wordsPerMinute = 200): ReadingTime {
  const text = markdownBody?.trim() ?? "";
  if (!text.length) {
    return { minutes: 0, label: "–" };
  }

  const words = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / wordsPerMinute));
  return { minutes, label: `${minutes} min read` };
}
