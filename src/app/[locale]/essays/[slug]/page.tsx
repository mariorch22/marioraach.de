import { setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import { Divider } from "@/components/common/Divider";
import { BlogContent } from "../../blog/[slug]/components/BlogContent";
import { BlogHeader } from "../../blog/[slug]/components/BlogHeader";

// reuse blog query but we only need the slug here via essays route
import { query as blogQuery } from "../../blog/[slug]/components/graphql_query";

function getEnvVariable(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Environment variable ${name} is not defined.`);
  return value;
}

async function getPost(slug: string, locale: string) {
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
      body: JSON.stringify({ query: blogQuery(slug, locale) }),
    }
  );
  if (!response.ok) throw new Error("Contentful API error");
  const json = await response.json();
  return json.data.blogCollection.items[0];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = await getPost(slug, locale);
  if (!post) return { title: "Essay nicht gefunden" };
  return {
    title: `${post.title} | Essays | Mario Raach`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      url: `https://www.marioraach.de/${locale}/essays/${slug}`,
      type: "article",
      images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      images: ["/images/og-image.jpg"],
    },
  };
}

export default async function EssayPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const post = await getPost(slug, locale);
  if (!post) {
    return (
      <main className="overflow-hidden flex flex-col justify-center items-center gap-12 mt-40 px-4">
        <Divider />
        <p className="text-red-500">Essay not found</p>
      </main>
    );
  }

  return (
    <main className="overflow-hidden flex flex-col justify-center items-center gap-12 mt-40 px-4">
      <BlogHeader title={post.title} summary={post.summary} publishingDate={post.publishingDate} />
      <Divider />
      <BlogContent blog={post} />
    </main>
  );
}


