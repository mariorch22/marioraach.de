export const query = (language: string) => `
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