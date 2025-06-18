import { useQuery } from '@tanstack/react-query';
import { Blog, FetchResponse } from "../types/blog";
import { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } from "@/constants/config";


const fetchBlogData = async (slug: string | undefined, language: string): Promise<Blog[]> => {
  if (!slug) {
    return [];
  }
  
  const query = `
  {
    blogCollection(where: { slug: "${slug}" }, limit: 1, locale: "${language}") {
      items {
        slug
        title
        summary
        publishingDate
        content {
          json
          links {
            assets {
              block {
                sys {
                  id
                }
                url
                title
                description
              }
            }
          }
        }
      }
    }
  }
  `;

  const response = await fetch(`https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  });

  const result: FetchResponse = await response.json();

  if (result.errors) {
    console.error(result.errors);
    throw new Error("Error fetching blog data");
  }

  // Sicherstellen, dass die Datenstruktur wie erwartet ist
  if (result.data?.blogCollection?.items) {
    // Filter out incomplete blog entries
    return result.data.blogCollection.items.filter((blog) =>
      blog.title && blog.slug && blog.content
    );
  }
  
  return [];
};

export function useBlogData(slug: string | undefined, language: string) {
  const { data: blogs = [], isLoading, error } = useQuery({
    queryKey: ['blog', slug, language],
    queryFn: () => fetchBlogData(slug, language),
    enabled: !!slug, // wait for slug
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  return { blogs, loading: isLoading, error };
}