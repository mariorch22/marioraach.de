import { getAllPosts } from '@/lib/contentful/api/postApi';
import { getTranslations } from 'next-intl/server';
import BlogLayout from '@/components/ui/blog-overview/BlogLayout';
import PostHeader from '@/components/ui/blog-overview/PostHeader';
import PostList from '@/components/ui/blog-overview/PostList';
import { BlogPost } from '@/types/blog';

interface BlogOverviewContainerProps {
  locale: string;
  category: 'blog' | 'essay';
}

const BlogOverviewContainer = async ({ locale, category }: BlogOverviewContainerProps) => {
  const posts = await getAllPosts(locale);
  const t = await getTranslations({
    locale,
    namespace: category === 'blog' ? 'BlogOverview' : 'EssaysOverview',
  });

  const filteredPosts = posts
    .filter((post: BlogPost) => post.category === category)
    .map((post) => ({
      ...post,
      displayCategory: category,
    }));

  return (
    <BlogLayout>
      <PostHeader title={t('title')} subtitle={t('subtitle')} />
      <PostList posts={filteredPosts} locale={locale} />
    </BlogLayout>
  );
};

export default BlogOverviewContainer;
