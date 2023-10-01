export const GET_TOUR_META_DATA = `query GetTourDetail($slug: ID!, $language: LanguageCodeEnum!) {
    tours(id: $slug, idType: URI) {
      translation(language: $language) {
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
        tourDetail {
          meta {
            title
            description
          }
        }
      }
    }
  }`

export const GET_META_DATA_BLOG = `
  query ($language: LanguageCodeEnum!) {
  page(id: "cG9zdDo1NjY=") {
    translation(language: $language) {
      ourblog {
        meta {
          title
          description
        }
      }
      featuredImage {
        node {
          sourceUrl
          altText
				  title
        }
      }
    }
  }
}

  `
