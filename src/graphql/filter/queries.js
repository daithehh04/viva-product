import { gql } from '@apollo/client'

const DATA_TAXONOMIES_COUNTRY = `
query countriesTaxonomies($language: LanguageCodeFilterEnum) {
  allCountries(where: {language: $language}) {
    nodes {
      name
      slug
    }
  }
}`

const DATA_TAXONOMIES_TOUR_STYLE = `
query countriesTaxonomies($language: LanguageCodeFilterEnum) {
  allTourStyle(where: {language: $language}) {
    nodes {
      name
      slug
    }
  }
}`

const DATA_TAXONOMIES_BUDGET = `
query budgetTaxonomies {
  allBudget {
    nodes {
      name
    }
  }
}`

const DATA_TAXONOMIES_DURATION = `
query durationTaxonomies {
  allDuration {
    nodes {
      name
    }
  }
}`

const DATA_BEST_TOUR = gql`
  query GetFilterTour($language: LanguageCodeEnum!, $countrySlug: [String!], $styleTourSlug: [String!]) {
    allTours(
      first: 50
      where: {
        taxQuery: {
          taxArray: [
            { taxonomy: COUNTRIES, operator: IN, terms: $countrySlug, field: NAME }
            { taxonomy: TOURSTYLE, operator: IN, terms: $styleTourSlug, field: SLUG }
          ]
        }
        orderby: { field: DATE, order: DESC }
      }
    ) {
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
              icons
            }
          }
        }
      }
    }
  }
`
const DATA_BEST_TOUR_HOME_PAGE = gql`
  query GetFilterTour(
    $language: LanguageCodeEnum!
    $countrySlug: [String!]
    $styleTourSlug: [String!]
    $bestSellerSlug: [String!]
  ) {
    allTours(
      first: 50
      where: {
        taxQuery: {
          taxArray: [
            { taxonomy: COUNTRIES, operator: IN, terms: $countrySlug, field: NAME }
            { taxonomy: TOURSTYLE, operator: IN, terms: $styleTourSlug, field: SLUG }
            { taxonomy: BESTSELLER, operator: IN, terms: $bestSellerSlug, field: NAME }
          ]
        }
        orderby: { field: DATE, order: DESC }
      }
    ) {
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
              icons
            }
          }
        }
      }
    }
  }
`

const DATA_SEARCH_TEXT_TOUR = gql`
query SearchTour($title: String){
  allTours(first: 50,where: {search: $title}) {
    nodes {
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
          icons
        }
      }
    }
  }
}
`

export {
  DATA_SEARCH_TEXT_TOUR,
  DATA_TAXONOMIES_COUNTRY,
  DATA_BEST_TOUR_HOME_PAGE,
  DATA_TAXONOMIES_TOUR_STYLE,
  DATA_BEST_TOUR,
  DATA_TAXONOMIES_BUDGET,
  DATA_TAXONOMIES_DURATION
}
