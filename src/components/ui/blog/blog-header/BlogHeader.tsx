interface BlogHeaderProps {
  title: string;
  summary?: string;
  formattedDate?: string;
  summaryLabel: string;
}

const BlogHeader = ({ title, summary, formattedDate, summaryLabel }: BlogHeaderProps) => {
  return (
    <header className="flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl max-w-[60rem] text-center">{title}</h2>
      {formattedDate && <p className="py-4 opacity-70 my-4">{formattedDate}</p>}
      {summary && (
        <div className="bg-white/20 w-full max-w-[40rem] rounded-2xl px-4 md:px-8 py-4 mb-12">
          <h2 className="text-xl">{summaryLabel}</h2>
          <p>{summary}</p>
        </div>
      )}
    </header>
  );
};

export default BlogHeader;
