export function TagList({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((t) => (
        <li
          key={t}
          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-200"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}
