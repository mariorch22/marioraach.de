import { NextResponse } from 'next/server';

import { getAllPosts } from '@/lib/contentful/api/postApi';
import { BlogPost } from '@/types/blog';

function toRss(
  items: Array<{ title: string; link: string; pubDate?: string; description?: string }>
) {
  const now = new Date().toUTCString();
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Mario Raach – Essays</title>
    <link>https://www.marioraach.de/essays</link>
    <description>Essays-Feed</description>
    <lastBuildDate>${now}</lastBuildDate>
    ${items
      .map(
        (i) => `
    <item>
      <title>${escapeXml(i.title)}</title>
      <link>${i.link}</link>
      ${i.pubDate ? `<pubDate>${new Date(i.pubDate).toUTCString()}</pubDate>` : ''}
      ${i.description ? `<description>${escapeXml(i.description)}</description>` : ''}
    </item>`
      )
      .join('\n')}
  </channel>
</rss>`;
}

function escapeXml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export async function GET() {
  const posts = (await getAllPosts('de')).filter(
    (p: BlogPost) => (p.category ?? 'essay') === 'essay'
  );
  const items = posts.map((p: BlogPost) => ({
    title: p.title,
    link: `https://www.marioraach.de/de/essays/${p.slug}`,
    ...(p.publishingDate ? { pubDate: p.publishingDate } : {}),
    ...(p.summary ? { description: p.summary } : {}),
  }));
  const xml = toRss(items);
  return new NextResponse(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
}
