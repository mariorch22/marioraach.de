import { NextResponse } from 'next/server';

import { fetchPosts } from '@/lib/contentful';

export const dynamic = 'force-dynamic';

function toRss(
  items: Array<{ title: string; link: string; pubDate?: string; description?: string }>,
) {
  const now = new Date().toUTCString();
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Mario Raach – Blog</title>
    <link>https://www.marioraach.de</link>
    <description>Blog-Feed</description>
    <lastBuildDate>${now}</lastBuildDate>
    ${items
      .map(
        (i) => `
    <item>
      <title>${escapeXml(i.title)}</title>
      <link>${i.link}</link>
      ${i.pubDate ? `<pubDate>${new Date(i.pubDate).toUTCString()}</pubDate>` : ''}
      ${i.description ? `<description>${escapeXml(i.description)}</description>` : ''}
    </item>`,
      )
      .join('\n')}
  </channel>
</rss>`;
}

function escapeXml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export async function GET() {
  // default to DE
  const posts = (await fetchPosts('de', 100)).filter((p) => (p.category ?? 'blog') === 'blog');
  const items = posts.map((p) => ({
    title: p.title,
    link: `https://www.marioraach.de/blog/${p.slug}`,
    ...(p.publishingDate ? { pubDate: p.publishingDate } : {}),
    ...(p.summary ? { description: p.summary } : {}),
  }));
  const xml = toRss(items);
  return new NextResponse(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
}
