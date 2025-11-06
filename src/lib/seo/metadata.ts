
export const SITE_CONFIG = {
    name: 'Mario Raach',
    url: 'https://www.marioraach.de',
    author: {
      name: 'Mario Raach',
      url: 'https://www.marioraach.de',
    },
    ogImage: {
      url: '/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Mario Raach - Data Science & KI Blog',
    },
  } as const;
  
  export const getFeeds = (locale: string) => [
    { url: '/api/blog.xml', title: locale === 'de' ? 'Blog (DE)' : 'Blog (EN)' },
    { url: '/api/essays.xml', title: locale === 'de' ? 'Essays (DE)' : 'Essays (EN)' },
    { url: '/api/all.xml', title: locale === 'de' ? 'Alle Beiträge' : 'All posts' },
  ];