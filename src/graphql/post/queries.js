import { gql } from '@apollo/client'

const GET_POST = `
    query posts($language: LanguageCodeFilterEnum){
    posts(where: {language: $language}) {
      edges {
          node {
              id
              excerpt
              title
              slug
              featuredImage {
                node {
                  sourceUrl
                }
              }
              language {
                  code
                  locale
              }
          }
      }
    }
  }
 `

const GET_ALL_POST = `
  query ($language: LanguageCodeFilterEnum!) {
    posts(where: { language: $language }) {
      nodes {
        id
        excerpt
        title
        slug
        blogdetail {
          heading
          time
          subtitle1
        }
        language {
          code
          locale
        }
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
      }
    }
    page(id: "cG9zdDo1NjY=") {
      ourblog {
        heading1
        heading2
      }
    }
  }
`

const GET_ALL_POST_FILTER = gql`
  query GetAllPost(
    $language: LanguageCodeEnum!
    $offset: Int!
    $size: Int!
    $topicSlug: [String!]
    $categorySlug: [String!]
    $destinationSlug: [String!]
  ) {
    posts(
      where: {
        offsetPagination: { offset: $offset, size: $size }
        orderby: { field: DATE, order: DESC }
        taxQuery: {
          taxArray: [
            { taxonomy: TOPIC, operator: IN, terms: $topicSlug, field: SLUG }
            { taxonomy: CATEGORY, operator: IN, terms: $categorySlug, field: SLUG }
            { taxonomy: DESTINATION, operator: IN, terms: $destinationSlug, field: SLUG }
          ]
        }
      }
    ) {
      nodes {
        translation(language: $language) {
          id
          excerpt
          title
          slug
          blogdetail {
            heading
            time
            subtitle1
          }
          language {
            code
            locale
          }
          featuredImage {
            node {
              altText
              sourceUrl
            }
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

const GET_ALL_TOURS_BESTSELLER = `
query ($language: LanguageCodeEnum!) {
  page(id: "cG9zdDo1NjY") {
    translation(language: $language){
      ourblog {
      heading1
      heading2
      bestseller {
        ... on Tours {
          translation(language: $language) {
            id
            slug
            tourDetail {
              banner {
                title
                rate
                price {
                  highestPrice
                  lowestPrice
                }
                location
                gallery {
                  altText
                  sourceUrl
                }
                icons
              }
            }
          }
        }
      }
      button
    }
    }
  }
}
`

const GET_SERVICE_BY_CATEGORY = `
query ($language: LanguageCodeEnum!, $lang: LanguageCodeFilterEnum!) {
  categories(where: {language: $lang}) {
    nodes {
      posts {
        pageInfo {
          offsetPagination {
            total
          }
        }
      }
      translation(language: $language) {
        ourblog {
          recommendservice {
            related
            image{
              sourceUrl
            }
          }
        }
        slug
        name
      }
    }
  }
}
  `
export default GET_SERVICE_BY_CATEGORY
export { GET_POST, GET_ALL_POST, GET_ALL_POST_FILTER, GET_ALL_TOURS_BESTSELLER, GET_SERVICE_BY_CATEGORY }
