import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import { readdirSync } from 'fs';
import { join } from 'path';

import { routing } from './routing';

async function loadMessages(locale: string) {
  const messages: Record<string, unknown> = {};

  // Load main locale file
  const mainFile = await import(`@/data/${locale}.json`);
  Object.assign(messages, mainFile.default);

  // Load all JSON files from locale subdirectory
  try {
    const localeDir = join(process.cwd(), 'src', 'data', locale);
    const files = readdirSync(localeDir).filter((file) => file.endsWith('.json'));

    const subMessages = await Promise.all(
      files.map((file) => import(`@/data/${locale}/${file.replace('.json', '')}.json`))
    );

    subMessages.forEach((module) => {
      Object.assign(messages, module.default);
    });
  } catch {
    // Subdirectory doesn't exist or is empty
  }

  return messages;
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  return {
    locale,
    messages: await loadMessages(locale),
  };
});
