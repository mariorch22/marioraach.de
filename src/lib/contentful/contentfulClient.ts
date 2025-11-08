import { contentfulEnv } from '@/lib/env'; // Behält den Import bei, um die Umgebungsvariablen zu nutzen
import { GraphQLError } from 'graphql';

export async function fetchContentful<T>(
  query: string,
  variables: Record<string, string> = {}
): Promise<T> {
  const { spaceId, accessToken } = contentfulEnv;
  const apiUrl = `https://graphql.contentful.com/content/v1/spaces/${spaceId}/`;

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 600 },
  });

  if (!response.ok) {
    const errorBody = await response.text();
    console.error(`Contentful API error: ${response.status} ${response.statusText}`, errorBody);
    throw new Error(`Contentful API error: ${response.status} ${response.statusText}`);
  }

  const json: { data?: T; errors?: GraphQLError[] } = await response.json();

  if (json.errors) {
    console.error('GraphQL query failed', json.errors);
    throw new Error(`GraphQL query failed: ${JSON.stringify(json.errors)}`);
  }

  return json.data as T;
}
