import { gql } from '@apollo/client'

const GET_INFO_PAGE_TRAVEL_STYLE = `query getInfoPageTravelStyle($taxonomyValue: ID!, $language: LanguageCodeEnum!) {
  tourStyle(id: $taxonomyValue, idType: SLUG) {
    translation(language: $language) {
      slug
      banner {
        banner {
          desc
          heading
          mobileImage {
            altText
            sourceUrl
          }
          subdesc
          title
          banner {
            altText
            sourceUrl
          }
        }
        tourStyleName
        hotTour {
          title
          hotTour {
            ... on Tours {
              translation(language: $language) {
                id
                slug
                tourDetail {
                  banner {
                    gallery {
                      altText
                      sourceUrl
                    }
                    price {
                      highestPrice
                      lowestPrice
                    }
                    rate
                    title
                    location
                    icons
                  }
                }
              }
             
            }
          }
        }
        travelReason {
          reason {
            title
            content
            image {
              altText
              sourceUrl
            }
          }
          title
        }
        button
      }
    }
  }
}`

const GET_LIST_TRAVEL_STYLE_NAME = `query getTourStyleName($language: LanguageCodeFilterEnum) {
  allTourStyle(where: {language: $language}) {
    nodes {
      id
      name
      banner {
        travelStyleInfo {
          travelStyleImage {
          altText
          sourceUrl
        }
        travelStyleName
        }
      }
      slug
    }
  }
}`

const GET_LIST_TOUR_TRAVEL_STYLE_CLIENT = gql`
  query getTourStyle(
    $language: LanguageCodeEnum!
    $taxonomyValue: String
    $taxonomyName: TaxonomyEnum
    $offset: Int!
    $size: Int!
  ) {
    allTours(
      where: {
        taxQuery: {
          taxArray: { terms: [$taxonomyValue], taxonomy: $taxonomyName, field: SLUG, operator: IN }
          relation: AND
        }
        offsetPagination: { offset: $offset, size: $size }
      }
    ) {
      edges {
        node {
          translation(language: $language) {
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
            id
          }
        }
      }
      pageInfo {
        offsetPagination {
          total
        }
      }
    }
  }
`

export { GET_INFO_PAGE_TRAVEL_STYLE, GET_LIST_TRAVEL_STYLE_NAME, GET_LIST_TOUR_TRAVEL_STYLE_CLIENT }
