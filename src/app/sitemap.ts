import { MetadataRoute } from "next";

const baseUrl = "https://www.marioraach.de";

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
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({ query }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch blog posts");
    }

    const { data } = await response.json();
    return data.blogCollection.items;
  } catch (error) {
    console.error("Error fetching blog posts for sitemap:", error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = await getBlogPosts();

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
      alternates: {
        languages: {
          de: `${baseUrl}/de`,
          en: `${baseUrl}/en`,
        },
      },
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
      alternates: {
        languages: {
          de: `${baseUrl}/de/blog`,
          en: `${baseUrl}/en/blog`,
        },
      },
    },
    {
      url: `${baseUrl}/imprint`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
      alternates: {
        languages: {
          de: `${baseUrl}/de/imprint`,
          en: `${baseUrl}/en/imprint`,
        },
      },
    },
    {
      url: `${baseUrl}/dataprotection`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
      alternates: {
        languages: {
          de: `${baseUrl}/de/dataprotection`,
          en: `${baseUrl}/en/dataprotection`,
        },
      },
    },
  ];

  const blogPageUrls = blogPosts.map((post: BlogPost & { category?: string }) => ({
    url: `${baseUrl}/${(post.category ?? 'blog') === 'essays' ? 'essays' : 'blog'}/${post.slug}`,
    lastModified: new Date(post.publishingDate),
    changeFrequency: "monthly" as const,
    priority: 0.7,
    alternates: {
      languages: {
        de: `${baseUrl}/de/${(post.category ?? 'blog') === 'essays' ? 'essays' : 'blog'}/${post.slug}`,
        en: `${baseUrl}/en/${(post.category ?? 'blog') === 'essays' ? 'essays' : 'blog'}/${post.slug}`,
      },
    },
  }));

  return [...staticPages, ...blogPageUrls];
}
