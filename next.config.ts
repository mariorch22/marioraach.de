import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      // Redirect legacy posts/* to new structure
      {
        source: '/posts/:slug*',
        has: [],
        permanent: true,
        destination: '/blog/:slug*',
      },
      { source: '/blog.xml', destination: '/api/blog.xml', permanent: true },
      { source: '/essays.xml', destination: '/api/essays.xml', permanent: true },
      { source: '/all.xml', destination: '/api/all.xml', permanent: true },
    ];
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
