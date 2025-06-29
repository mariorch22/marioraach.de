import { setRequestLocale } from "next-intl/server";
import { Divider } from "@/components/divider";
import { query } from "./components/graphql_query";
import { BlogContent } from "./components/BlogContent";
import { BlogHeader } from "./components/BlogHeader";
import Head from "next/head";

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

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
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
        body: JSON.stringify({ query: query(slug, locale) }),
      }
    );

    if (!response.ok) {
      throw new Error(
        `Contentful API error: ${response.status} ${response.statusText}`
      );
    }

    const posts = await response.json();
    const postsData = posts.data.blogCollection.items[0];

    // Prüfe auf GraphQL Errors
    if (posts.errors) {
      console.error("GraphQL errors:", posts.errors);
      throw new Error("GraphQL query failed");
    }

    return (
      <>
        <Head>
          <title>{postsData.title}</title>
          <meta name="description" content={postsData.summary} />
        </Head>

        <main className="overflow-hidden flex flex-col justify-center items-center gap-12 font-inter text-normal mt-40 px-4">
          <BlogHeader
            title={postsData.title}
            summary={postsData.summary}
            publishingDate={postsData.publishingDate}
          />
          <Divider />
          <BlogContent blog={postsData} />
        </main>
      </>
    );
  } catch (error) {
    console.error("Error loading blog post:", error);
    return (
      <main className="overflow-hidden flex flex-col justify-center items-center gap-12 font-inter text-normal mt-40 px-4">
        <Divider />
        <p className="text-red-500">Error loading blog post</p>
      </main>
    );
  }
}
