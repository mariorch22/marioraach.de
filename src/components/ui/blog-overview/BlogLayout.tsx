import { ReactNode } from 'react';

interface BlogLayoutProps {
  children: ReactNode;
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return <main className="mx-auto max-w-3xl px-4 pt-28 pb-16">{children}</main>;
};

export default BlogLayout;
