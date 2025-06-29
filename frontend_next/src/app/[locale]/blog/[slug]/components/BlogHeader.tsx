

interface BlogHeaderProps {
    title: string;
    summary?: string;
    publishingDate?: string;
}

export function BlogHeader({ title, summary, publishingDate }: BlogHeaderProps) {
    return (
      <header className="flex flex-col items-center">
        <h2 className="blog-title text-3xl md:text-4xl max-w-[60rem] text-center">
          {title}
        </h2>
        {publishingDate && (
          <p className="blog-date py-4 opacity-70 my-4">
            {new Date(publishingDate).toLocaleDateString()}
          </p>
        )}
        {summary && (
          <div className="bg-white/20 w-full max-w-[40rem] rounded-2xl px-4 md:px-8 py-4 mb-12">
            <h2 className="text-xl font-inter">
              Summary
            </h2>
            <p className="blog-summary">
              {summary}
            </p>
          </div>
        )}
      </header>
    );
  }