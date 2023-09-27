import { gql } from '@apollo/client'

const GET_TOUR_FILTER = `
query getTour($language: LanguageCodeFilterEnum) {
    allTours(where: {language: $language}) {
      nodes {
        tourDetail {
          banner {
            price {
              highestPrice
              lowestPrice
            }
            gallery {
              altText
              sourceUrl
            }
            location
            title
            rate
          }
        }
      }
    }
  }`

const DATA_ALL_TOUR = gql`
  query getAllTour($language: LanguageCodeEnum!) {
    allTours(first: 50) {
      nodes {
        translation(language: $language) {
          id
          excerpt
          title
          slug
          tourStyle {
            nodes {
              slug
            }
          }
          tourDetail {
            priceTour
            numberDay
            banner {
              title
              gallery {
                sourceUrl
              }
              location
              price {
                lowestPrice
                highestPrice
              }
              rate
              icons {
                altText
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
`
export { GET_TOUR_FILTER, DATA_ALL_TOUR }
