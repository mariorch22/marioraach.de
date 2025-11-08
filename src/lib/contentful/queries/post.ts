export const allPostsQuery = (language: string) => `
{
  blogCollection(order: publishingDate_DESC, locale: "${language}") {
    items {
      slug
      title
      summary
      publishingDate
      category
    }
  }
}
`;

export const singlePostQuery = (slug: string, language: string) => `
{
  blogCollection(where: { slug: "${slug}" }, limit: 1, locale: "${language}") {
    items {
      slug
      title
      summary
      publishingDate
      category
      content {
        json
        links {
          assets {
            block {
              sys { id }
              url
              title
              description
            }
          }
        }
      }
    }
  }
}
`;
