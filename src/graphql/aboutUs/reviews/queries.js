export const GET_REVIEWS_DATA = `query ($language: LanguageCodeEnum!) {
    page(id: "cG9zdDoxMzI5") {
      translation(language: $language) {
        aboutUsReviews {
          banner {
            heading
            title
            subTitle
            button
            backgroundImage {
              altText
              sourceUrl
            }
          }
          main {
            desc
            heading
          }
          steps {
            heading
            step {
              title
            }
          }
          subBanner {
            button
            header
            paragraph
          }
        }
      }
    }
  }`

export const GET_DATA_MENU_RV = `query($language: LanguageCodeEnum!) {
    page(id: "cG9zdDoxMzI5") {
      translation(language: $language) {
        aboutUsReviews {
          banner {
            title
            backgroundMenu{
              sourceUrl
              altText
            }
          }
          
        }
      }
    }
  }`

export const GET_META_DATA = `query ($language: LanguageCodeEnum!) {
  page(id: "cG9zdDoxMzI5") {
    translation(language: $language) {
      aboutUsReviews {
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
