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
      ourTour{
        subtitle
        btn
        titleBlogs
        titleReviews
        titleTours
        titleTrips
      }
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
            slug
            featuredImage{
              node{
                sourceUrl
              }
            }
            blogdetail{
              subtitle1
            }
            dateGmt
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
              icons
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

const GET_DATA_BEST_SELLER_OURTOUR = `
query($language:LanguageCodeEnum!){
  bestSeller(id:"dGVybToyODU="){
    tours{
      nodes{
        translation(language:$language){
          slug
          tourDetail {
              banner {
                gallery {
                  sourceUrl
                }
                icons
                location
                price {
                  highestPrice
                  lowestPrice
                }
                rate
                title
              }
            }
        }
      }
    }
  }
}`

const GET_META_DATA = `query ($slug: ID!, $language: LanguageCodeEnum!) {
  countries(id: $slug, idType: SLUG) {
    translation(language: $language) {
      country{
        meta{
          title
          description
        }
      }
    }
  }
}`

export {
  DATA_MENU_COUNTRY,
  DATA_COUNTRY,
  DATA_SLIDE_TOUR,
  DATA_SLIDE_OTHER_TOUR,
  GET_META_DATA,
  GET_DATA_BEST_SELLER_OURTOUR
}
