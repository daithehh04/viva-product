const DATA_PAGE = `
query homePage($id:ID!){
    page (id: $id) {
        home {
          header {
            nav1
            nav2
            nav3
            nav4
            nav5
            nav6
            nav7
          }
          banner {
            text
            background {
              sourceUrl
              altText
            }
          }
          survey {
            title
            text
          }
          inspectionTrip {
            title
          }
        }
      }
}
`

const GET_DATA_CHECKVISA = `
query ($language: LanguageCodeEnum!) {
  page(id: "cG9zdDoxMTIx") {
    translation(language:$language){
      checkvisa {
      banner {
        heading
        nationalchoice
        countrychoice
        imagebanner {
          sourceUrl
        }
        imageuser {
          sourceUrl
        }
        imagebannermobile{
          sourceUrl
        }
      }
      bestseller {
        bestsellertour {
          ... on Tours {
            translation(language:$language){
              slug
              id
              tourDetail {
              banner {
                location
                gallery{
                  sourceUrl
                }
                rate
                title
                price {
                  highestPrice
                  lowestPrice
                }
                icons
              }
            }
}
            
          }
        }
      }
      infodetail {
        contactus
        whyapply
        backgroundpc{
          sourceUrl
        }
        backgroundmb{
          sourceUrl
        }
        listreason{
          reason
        }
        listcontact{
          address
          email
          phone
        }
      }
      ready {
        desc
        title
        image {
          sourceUrl
        }
      }
    }
    slug
    content
    }
  }
}`
export { DATA_PAGE, GET_DATA_CHECKVISA }
