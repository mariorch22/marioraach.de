import { ReactNode } from 'react';

interface HomeLayoutProps {
  children: ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return <main className="mx-auto max-w-3xl px-4 pt-20 pb-8 mt-20">{children}</main>;
};

export default HomeLayout;
