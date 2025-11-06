import { MetadataRoute } from 'next';
import { contentfulEnv } from '@/lib/env';


const baseUrl = 'https://www.marioraach.de';


type BlogPost = {
  slug: string;
  publishingDate: string | Date;
};


async function getBlogPosts() {
  try {
    const query = `
      {
        blogCollection(order: publishingDate_DESC) {
          items {
            slug
            publishingDate
            category
          }
        }
      }
    `;

    const response = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${contentfulEnv.spaceId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${contentfulEnv.accessToken}`,
        },
        body: JSON.stringify({ query }),
      },
    );

    if (!response.ok) {
      throw new Error('Failed to fetch blog posts');
    }

    const { data } = await response.json();
    return data.blogCollection.items;
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error);
    return [];
  }
}


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = await getBlogPosts();

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
      alternates: {
        languages: {
          // Default locale (de) should be unprefixed with localePrefix: 'as-needed'
          de: `${baseUrl}`,
          en: `${baseUrl}/en`,
        },
      },
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          de: `${baseUrl}/blog`,
          en: `${baseUrl}/en/blog`,
        },
      },
    },
    {
      url: `${baseUrl}/imprint`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
      alternates: {
        languages: {
          de: `${baseUrl}/imprint`,
          en: `${baseUrl}/en/imprint`,
        },
      },
    },
    {
      url: `${baseUrl}/dataprotection`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
      alternates: {
        languages: {
          de: `${baseUrl}/dataprotection`,
          en: `${baseUrl}/en/dataprotection`,
        },
      },
    },
  ];

  const blogPageUrls = blogPosts.map((post: BlogPost & { category?: string }) => {
    const segment = (post.category ?? 'blog') === 'essays' ? 'essays' : 'blog';
    return {
      url: `${baseUrl}/${segment}/${post.slug}`,
      lastModified: new Date(post.publishingDate),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          // Default locale (de) is unprefixed
          de: `${baseUrl}/${segment}/${post.slug}`,
          en: `${baseUrl}/en/${segment}/${post.slug}`,
        },
      },
    };
  });

  return [...staticPages, ...blogPageUrls];
}
