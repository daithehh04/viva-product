const GET_SERVICE_BY_CATEGORY = `
    query ($language: LanguageCodeFilterEnum) {
    categories(where: {language: $language}) {
    nodes {
      name
      slug
     	recommendservice{
        recommendservice{
          related
          image{
            sourceUrl
          }
        }
      }
      posts {
        pageInfo {
          offsetPagination {
            total
          }
        }
      }
    }
  }
}
  `

export default GET_SERVICE_BY_CATEGORY
