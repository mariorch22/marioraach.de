import { Link } from "@/i18n/navigation";
import { setRequestLocale } from "next-intl/server";
import { query } from "./graphql_query";
import { cn } from "@/lib/utils";

interface BlogPost {
  slug: string;
  title: string;
  publishingDate?: string;
}

// Helper-Funktion für bessere Fehlerbehandlung
function getEnvVariable(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(
      `Environment variable ${name} is not defined. Please check your .env file.`
    );
  }
  return value;
}

export default async function BlogSection({
  params,
  className,
}: {
  params: Promise<{ locale: string }>;
  className?: string;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  try {
    // Environment Variables mit Fehlerbehandlung
    const spaceId = getEnvVariable("CONTENTFUL_SPACE_ID");
    const accessToken = getEnvVariable("CONTENTFUL_ACCESS_TOKEN");

    const response = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${spaceId}/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ query: query(locale) }),
      }
    );

    if (!response.ok) {
      throw new Error(
        `Contentful API error: ${response.status} ${response.statusText}`
      );
    }

    const posts = await response.json();
    const postsData = posts.data.blogCollection.items;

    // Prüfe auf GraphQL Errors
    if (posts.errors) {
      console.error("GraphQL errors:", posts.errors);
      throw new Error("GraphQL query failed");
    }

    return (
      <div
        className={cn(
          "items-center justify-center w-full max-w-[60rem]",
          className
        )}
      >
        <h1 className="text-center text-xl my-6">Latest Posts</h1>

        {/* Zeige Posts an, wenn vorhanden */}
        {postsData.length > 0 && (
          <>
            {postsData.map((post: BlogPost) => (
              <div key={post.slug} className="my-6">
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex flex-col md:flex-row text-base md:text-lg font-roboto hover:text-blue-300"
                >
                  <span className="text-gray-400/70 text-sm md:text-base order-1 md:order-none">
                    {post.publishingDate && (
                      <>
                        {new Date(post.publishingDate).toLocaleDateString(
                          "de-DE",
                          {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                          }
                        )}
                      </>
                    )}
                  </span>
                  <p className="hidden md:block mx-2">▫</p>
                  <span className="order-2 md:order-none">{post.title}</span>
                </Link>
              </div>
            ))}
          </>
        )}
      </div>
    );
  } catch (error) {
    console.error("Error in BlogSection:", error);
    return (
      <div className="items-center justify-center w-full max-w-[60rem]">
        <h1 className="text-center text-xl text-red-600">
          Error loading blog posts
        </h1>
        <p className="text-center mt-2 text-gray-600">
          {error instanceof Error ? error.message : "Unknown error"}
        </p>
      </div>
    );
  }
}
