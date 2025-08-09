export interface BlogPost {
  slug: string;
  title: string;
  summary?: string;
  publishingDate?: string;
  category?: 'blog' | 'essays';
}

function getEnvVariable(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Environment variable ${name} is not defined.`);
  }
  return value;
}

export async function fetchPosts(locale: string, limit: number = 20): Promise<BlogPost[]> {
  const spaceId = getEnvVariable('CONTENTFUL_SPACE_ID');
  const accessToken = getEnvVariable('CONTENTFUL_ACCESS_TOKEN');

  // Use a simple, literal query (Contentful accepts inline locale string)
  const query = `
    {
      blogCollection(order: publishingDate_DESC, limit: ${limit}, locale: "${locale}") {
        items {
          slug
          title
          summary
          publishingDate
          category
        }
      }
    }
  `;

  const response = await fetch(`https://graphql.contentful.com/content/v1/spaces/${spaceId}/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ query }),
    next: { revalidate: 600 },
  });

  if (!response.ok) {
    throw new Error(`Contentful API error: ${response.status} ${response.statusText}`);
  }

  const json = await response.json();
  if (json.errors) {
    throw new Error('GraphQL query failed');
  }
  const items = (json.data?.blogCollection?.items ?? []) as Array<
    Omit<BlogPost, 'category'> & { category?: string | null }
  >;
  // Normalize category from field only (no slug inference). Fallback to 'blog' when missing.
  return items.map((item) => {
    const raw = item.category?.toLowerCase().trim();
    const normalized: 'blog' | 'essays' = raw === 'essay' || raw === 'essays' ? 'essays' : 'blog';
    return { ...item, category: normalized };
  });
}
