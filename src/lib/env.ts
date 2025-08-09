// Centralized environment variable access with runtime validation
// Note: Avoids adding external dependencies; performs simple runtime checks

type NonEmptyString = string & { __brand: 'NonEmptyString' };

function requireEnv(name: string): NonEmptyString {
  const value = process.env[name];
  if (typeof value !== 'string' || value.trim() === '') {
    throw new Error(`Environment variable ${name} is not defined.`);
  }
  return value as NonEmptyString;
}

export const ENV = {
  CONTENTFUL_SPACE_ID: requireEnv('CONTENTFUL_SPACE_ID'),
  CONTENTFUL_ACCESS_TOKEN: requireEnv('CONTENTFUL_ACCESS_TOKEN'),
  NODE_ENV: (process.env.NODE_ENV ?? 'development') as 'development' | 'production' | 'test',
  CI: process.env.CI === 'true',
} as const;

export const contentfulEnv = {
  spaceId: ENV.CONTENTFUL_SPACE_ID,
  accessToken: ENV.CONTENTFUL_ACCESS_TOKEN,
} as const;

export type ContentfulEnv = typeof contentfulEnv;
