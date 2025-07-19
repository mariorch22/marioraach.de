export const query = (slug: string, language: string) => `
{
  blogCollection(where: { slug: "${slug}" }, limit: 1, locale: "${language}") {
    items {
      slug
      title
      summary
      publishingDate
      content {
        json
        links {
          assets {
            block {
              sys {
                id
              }
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
