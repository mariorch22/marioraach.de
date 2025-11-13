import { ReactNode } from 'react';

interface BlogPostLayoutProps {
  children: ReactNode;
}

const BlogPostLayout = ({ children }: BlogPostLayoutProps) => {
  return (
    <main className="overflow-hidden flex flex-col justify-center items-center gap-12 font-inter text-normal mt-40 px-4">
      <div className="w-full max-w-[60rem] mx-auto">{children}</div>
    </main>
  );
};

export default BlogPostLayout;
