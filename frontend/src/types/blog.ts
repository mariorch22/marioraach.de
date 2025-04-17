export interface Blog {
    slug: string;
    title: string;
    summary?: string;
    publishingDate?: string;
    content: {
        json: any;
        links?: {
        assets?: {
            block?: Array<{
            sys: {
                id: string;
            };
            url: string;
            title?: string;
            description?: string;
            }>;
        };
        };
    };
}
  
export interface FetchResponse {
    data?: {
        blogCollection?: {
        items?: Blog[];
        };
    };
    errors?: any;
}