import { gql } from '@apollo/client'

export const GET_All_CUSTOMERS_REVIEW = gql`
  query GetAllCustomersReview($offset: Int!, $size: Int!, $language: LanguageCodeFilterEnum!) {
    allCustomerReview(where: { offsetPagination: { offset: $offset, size: $size }, language: $language }) {
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
        customerReview {
          content
          authorInformation {
            country
            name
            thumbnail {
              altText
              sourceUrl
            }
          }
          tours {
            ... on Tours {
              slug
              tourDetail {
                banner {
                  gallery {
                    altText
                    sourceUrl
                  }
                  location
                  title
                }
                numberDay
              }
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

export const GET_ALL_REVIEWS = `query GetAllCustomersReview($language: LanguageCodeFilterEnum!) {
  allCustomerReview(where: {language: $language}) {
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
      customerReview {
        content
        authorInformation {
          country
          name
          thumbnail {
            altText
            sourceUrl
          }
        }
        tours {
          ... on Tours {
            slug
            tourDetail {
              banner {
                gallery {
                  altText
                  sourceUrl
                }
                location
                title
              }
              numberDay
            }
            countries {
              nodes {
                slug
              }
            }
          }
        }
      }
    }
  }
}`
