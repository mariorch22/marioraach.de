import { Metadata } from 'next';

export const BASE_URL = 'https://www.marioraach.de';
export const AUTHOR = { name: 'Mario Raach', url: BASE_URL };
export const OG_IMAGE_URL = '/images/og-image.jpg';

// Statische Metadaten, die du wiederverwenden kannst
export const staticMetadata: Partial<Metadata> = {
  metadataBase: new URL(BASE_URL),
  authors: [AUTHOR],
  icons: {
    icon: [{ url: '/images/icon.ico' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [OG_IMAGE_URL],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};
