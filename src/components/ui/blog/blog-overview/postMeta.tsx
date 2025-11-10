interface PostMetaProps {
  date: string;
  category?: string;
  readingTime?: string;
}

export function PostMeta({ date, category, readingTime }: PostMetaProps) {
  const items = [date, category, readingTime].filter(Boolean);

  return (
    <div className="mt-0.5 text-[11px] text-white/40 flex items-center gap-1">
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-1">
          {index > 0 && <span>·</span>}
          <span className={item === date ? 'tabular-nums' : ''}>{item}</span>
        </span>
      ))}
    </div>
  );
}
