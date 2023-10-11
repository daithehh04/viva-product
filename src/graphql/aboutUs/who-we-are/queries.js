export const GET_WHO_WE_ARE_DATA = `query($language: LanguageCodeEnum!) {
  page(id: "cG9zdDoxMTg2") {
    translation(language: $language) {
      who_we_are {
        banner {
          title
          subTitle
          heading
          button
          backgroundImage {
            altText
            sourceUrl
          }
        }
        content {
          description
          slogan {
            image {
              altText
              sourceUrl
            }
            line1
            line2
            line3
            line4
          }
          staffs {
            description
            staffsInfo {
              image {
                altText
                sourceUrl
              }
              name
              position
              link{
                url
              }
            }
            title
          }
          statistics {
            description
            title
            value
          }
          descriptionVideo {
            label{
              line1
              line2
            }
            thumbnail {
              altText
              sourceUrl
            }
            video {
              mediaItemUrl
              mimeType
            }
            thumbnailMb {
              altText
              sourceUrl
            }
            videoMb {
              mediaItemUrl
              mimeType
            }
          }
        }
      }
    }
  }
}`

export const GET_DATA_MENU_WWR = `query($language: LanguageCodeEnum!) {
  page(id: "cG9zdDoxMTg2") {
    translation(language: $language) {
      who_we_are {
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
  page(id: "cG9zdDoxMTg2") {
    translation(language: $language) {
      who_we_are {
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
