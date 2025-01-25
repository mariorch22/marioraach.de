import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import SlideUpWhenVisible from '@/animations/slideUpWhenVisible';
import Navbar from '@/components/navbar';
import FetchBlogData from '@/pages/blog/components/fetchBlogData/fetchBlogData';

interface BlogText {
  title: string;
  description: string;
  comingSoon: string;
}

const Blog: FC = () => {
  const { t } = useTranslation();
  const blogText = t('blogText', { returnObjects: true }) as BlogText;

  const META_DESCRIPTION = "Willkommen auf Marios Blog. Tauchen Sie ein in die Welt der Softwareentwicklung und künstlichen Intelligenz, wo ich meine persönlichen Erfahrungen, Einblicke und die neuesten Trends teile.";
  const META_KEYWORDS = "Mario Raach, Blog, Softwareentwicklung, Künstliche Intelligenz, Programmierung, Tech Trends, AI, Machine Learning, Persönliche Erfahrungen, Technologieblog";

  return (
    <>
      <Helmet>
        <title>Blog</title>
        <meta name="description" content={META_DESCRIPTION} />
        <meta name="keywords" content={META_KEYWORDS} />
      </Helmet>

      <Navbar />
      
      <main className="min-h-svh w-screen overflow-hidden px-4 pt-36 font-roboto md:px-0">
        <SlideUpWhenVisible y={20}>
          <h1 className="pb-12 text-center font-kalam text-7xl md:text-6xl xl:text-8xl">
            {blogText.title}
          </h1>
        </SlideUpWhenVisible>
        
        <FetchBlogData />
      </main>
    </>
  );
};

export default Blog;