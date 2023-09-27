const DATA_MENU_COUNTRY = `
query country($language: LanguageCodeFilterEnum){
  allCountries(first: 50, where: {
    language: $language
  }) {
    nodes {
      slug
      name
      description
      country {
        flag {
          sourceUrl
        }
        thumb {
          sourceUrl
        }
      }
    }
  }
}
`

const DATA_COUNTRY = `
query getInfoCountry($taxonomyValue: ID!,$language: LanguageCodeEnum!) {
  countries(id: $taxonomyValue, idType: SLUG) {
    name
    slug
    translation(language: $language) {
      name
      slug
      description
      country {
        flag {
          sourceUrl
        }
        banner {
          img {
            sourceUrl
          }
          explore
          nameCountry
          text
        }
        icons {
          img {
            sourceUrl
          }
          name
          desc
        }
        customerReviews {
          ... on CustomerReview {
            title
            customerReview {
              image {
                sourceUrl
              }
              title
              content
              authorInformation {
                name
                country
                thumbnail {
                  sourceUrl
                }
              }
              location
              time
            }
          }
        }
        blogs {
          ... on Post {
            title
          }
        }
      }
    }
  }
}
`

const DATA_SLIDE_TOUR = `
query getTourStyle($language: LanguageCodeEnum!, $taxonomyValue: String, $taxonomyName: TaxonomyEnum) {
  allTours(
    first: 50,
    where: {
      taxQuery: {
        taxArray: { terms: [$taxonomyValue], taxonomy: $taxonomyName, field: SLUG, operator: IN }
        relation: AND
      }
    }
  ) {
    nodes {
      translation(language: $language) {
          slug
          countries {
            nodes {
              name
            }
          }
          tourDetail {
            banner {
              location
              rate
              title
              gallery {
                sourceUrl
              }
              price {
                highestPrice
                lowestPrice
              }
            }
          }
        }
    }
  }
}
`
const DATA_SLIDE_OTHER_TOUR = `
query getTourStyle($language: LanguageCodeEnum!, $taxonomyValue: String, $taxonomyName: TaxonomyEnum) {
  allTours(
    first: 50,
    where: {
      taxQuery: {
        taxArray: { terms: [$taxonomyValue], taxonomy: $taxonomyName, field: SLUG, operator: NOT_IN }
        relation: AND
      }
    }
  ) {
    nodes {
      translation(language: $language) {
          slug
          countries {
            nodes {
              name
            }
          }
          tourDetail {
            banner {
              location
              rate
            title
            gallery {
              sourceUrl
            }
              price {
                highestPrice
                lowestPrice
              }
            }
          }
        }
    }
  }
}
`

export { DATA_MENU_COUNTRY, DATA_COUNTRY, DATA_SLIDE_TOUR, DATA_SLIDE_OTHER_TOUR }
