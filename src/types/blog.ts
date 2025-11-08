import { Document } from '@contentful/rich-text-types';

export interface Asset {
  sys: { id: string };
  url?: string;
  title?: string;
  description?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  summary?: string;
  publishingDate?: string;
  category?: 'blog' | 'essay';
  content?: {
    json: Document;
    links?: { assets?: { block?: Asset[] } };
  };
}
