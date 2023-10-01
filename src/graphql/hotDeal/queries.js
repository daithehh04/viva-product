export const GET_HOT_DEAL_DATA = `query ($language: LanguageCodeEnum!) {
  page(id: "cG9zdDoxMTAy", idType: ID) {
    translation(language: $language) {
      hotDeals {
        voucherHeader {
          detailHeader {
            conditionsHeader
            expiryDateHeader
            header
            timeRemaining
            timeUnit {
              hours
              minutes
              seconds
            }
            voucherButton
            form {
              email {
                header
                placeholder
              }
              heading
              name {
                header
                placeholder
              }
              phone {
                header
                placeholder
              }
              participantsnumber {
                header
                placeholder
              }
              date {
                header
                placeholder
              }
              button
            }
          }
          listHeader
          listVoucher {
            ... on Vouchers {
              translation(language: $language) {
                voucher {
                  content {
                    expireDate
                    extraDiscount
                    max
                    title
                    value
                  }
                  detailImage {
                    altText
                    sourceUrl
                  }
                  rules {
                    conditions {
                      condition
                    }
                  }
                }
              }
            }
          }
        }
        promotionHeader
        promotionList {
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
      }
    }
  }
}`

export const GET_LIST_PROMOTION_TOUR = `query ($language: LanguageCodeEnum!) {
    page(id: "cG9zdDoxMTAy", idType: ID) {     
        hotDeals {
          promotionList {
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
        }
    }
  }`

export const GET_META_DATA = `query ($language: LanguageCodeEnum!) {
    page(id: "cG9zdDoxMTAy") {
      translation(language: $language) {
        hotDeals {
          meta {
            title
            description
          }
        }
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
      }
    }
  }`
