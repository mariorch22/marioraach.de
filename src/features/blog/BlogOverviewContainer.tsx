import { getAllPosts } from '@/lib/contentful/api/postApi';
import { PostList } from '@/components/ui/blog/blog-overview/PostList';
import { getTranslations } from 'next-intl/server';

interface BlogOverviewContainerProps {
  locale: string;
}

const BlogOverviewContainer = async ({ locale }: BlogOverviewContainerProps) => {
  const posts = await getAllPosts(locale);
  const t = await getTranslations({ locale, namespace: 'EssaysOverview' });

  const essayPosts = posts
    .filter((post) => post.category === 'essay')
    .map((post) => ({
      ...post,
      displayCategory: 'essay',
    }));

  return (
    <main className="mx-auto max-w-3xl px-4 pt-28 pb-16">
      <header>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
          {t('title')}
        </h1>
        <p className="mt-2 text-gray-alpha-400">{t('subtitle')}</p>
      </header>
      <PostList posts={essayPosts} locale={locale} showCategory={true} />
    </main>
  );
};

export default BlogOverviewContainer;
