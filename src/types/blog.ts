export interface BlogPost {
    slug: string;
    title: string;
    summary?: string;
    publishingDate?: string;
    category?: 'blog' | 'essay';
}