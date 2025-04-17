import { useQuery } from '@tanstack/react-query';
import { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } from "@/config";

interface BlogPreview {
  slug: string;
  title: string;
  summary?: string;
  publishingDate?: string;
}

interface BlogListResponse {
  data?: {
    blogCollection?: {
      items?: BlogPreview[];
    };
  };
  errors?: any;
}

const fetchBlogList = async (): Promise<BlogPreview[]> => {
  const query = `
  {
    blogCollection(order: publishingDate_DESC) {
      items {
        slug
        title
        summary
        publishingDate
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

  const result: BlogListResponse = await response.json();

  if (result.errors) {
    console.error(result.errors);
    throw new Error("Error fetching blog list");
  }

  if (result.data?.blogCollection?.items) {
    return result.data.blogCollection.items.filter((blog) =>
      blog.title && blog.slug
    );
  }
  
  return [];
};

export function useBlogList() {
  const { data: blogs = [], isLoading, error } = useQuery({
    queryKey: ['blogList'],
    queryFn: fetchBlogList,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  return { blogs, loading: isLoading, error };
}