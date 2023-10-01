import { gql } from "@apollo/client"

const COUNTRY_TO = `
query {
  allToCountry {
    nodes {
      name
      slug
    }
  }
}`

const COUNTRY_FROM = `
query {
  allFromCountry {
    nodes {
      name
      slug
    }
  }
}`

const CHECK_VISA = gql`
query CheckVisaTour($language:LanguageCodeFilterEnum, $countryFrom: [String!], $countryTo: [String!]) {
  allVisa(
    first: 50
    where: {language: $language,taxQuery: {taxArray: [{taxonomy: FROMCOUNTRY, operator: IN, terms: $countryFrom, field: SLUG}, {taxonomy: TOCOUNTRY, operator: IN, terms: $countryTo, field: SLUG}]}, orderby: {field: DATE, order: DESC}}
  ) {
    nodes {
      id
        title
        slug
        checkVisa {
          freeVisa
          title
          desc
          content
        }
    }
  }
}`
export {COUNTRY_TO, COUNTRY_FROM,CHECK_VISA}