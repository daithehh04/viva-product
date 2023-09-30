import { gql } from '@apollo/client'

export const GET_All_CUSTOMERS_REVIEW = gql`
  query GetAllCustomersReview($offset: Int!, $size: Int!, $language: LanguageCodeEnum!) {
    allCustomerReview(where: { offsetPagination: { offset: $offset, size: $size } }) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        offsetPagination {
          hasMore
          hasPrevious
          total
        }
      }
      nodes {
        translation(language: $language) {
          customerReview {
            content
            title
            authorInformation {
              country
              name
              thumbnail {
                altText
                sourceUrl
              }
            }
            location
            time
            image {
              altText
              sourceUrl
            }
          }
        }
      }
    }
  }
`
export const GET_REVIEWS = `query ($language: LanguageCodeEnum!) {
  allCustomerReview(first: 4) {
    nodes {
      translation(language: $language) {
        customerReview {
          authorInformation {
            country
            name
            thumbnail {
              altText
              sourceUrl
            }
          }
          content
          image {
            altText
            sourceUrl
          }
          location
          time
          title
        }
      }
    }
  }
}`
