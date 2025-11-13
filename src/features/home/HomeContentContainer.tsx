import HomeHero from '@/components/ui/home/HomeHero';
import HomeContentToggle from '@/components/ui/home/HomeContentToggle';
import PostList from '@/components/ui/home/PostList';
import HomeLayout from '@/components/ui/home/HomeLayout';
import { getAllPosts } from '@/lib/contentful/api/postApi';
import { BlogPost } from '@/types/blog';

interface HomeContentContainerProps {
  data: {
    heroTitle: string;
    heroSubline: string;
    tabs: {
      blog: string;
      essays: string;
    };
  };
  locale: string;
}

const HomeContentContainer = async ({ data, locale }: HomeContentContainerProps) => {
  const posts = await getAllPosts(locale);
  const blogs = posts.filter((post: BlogPost) => post.category === 'blog');
  const essays = posts.filter((post: BlogPost) => post.category === 'essay');

  return (
    <HomeLayout>
      <HomeHero title={data.heroTitle} subline={data.heroSubline} />

      <HomeContentToggle leftLabel={data.tabs.blog} rightLabel={data.tabs.essays}>
        <PostList posts={blogs} locale={locale} category="blog" />
        <PostList posts={essays} locale={locale} category="essays" />
      </HomeContentToggle>
    </HomeLayout>
  );
};

export default HomeContentContainer;
