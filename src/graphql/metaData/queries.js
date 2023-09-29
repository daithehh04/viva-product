export const GET_TOUR_META_DATA = `query GetTourDetail($slug: ID!, $language: LanguageCodeEnum!) {
    tours(id: $slug, idType: URI) {
      translation(language: $language) {
        excerpt
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
        tourDetail {
          meta {
            title
          }
        }
      }
    }
  }`
