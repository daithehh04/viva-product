const GET_DATA_FORM_BOOKTOUR = `
query ($id: ID!, $language: LanguageCodeFilterEnum!) {
  page(id: $id) {
    booktour {
      buttontext
      contactdetail {
        confirmemail {
          labelconfirm
          placeholderconfirm
        }
        email {
          labelemail
          placeholderemail
        }
        fullname {
          labelname
          placeholdername
        }
        nationality {
          label
          nationchoice {
            nation
          }
        }
        subheading
        telephone {
          labelphone
          placeholderphone
        }
      }
      heading
      participantage {
        title
        subtitle
        adult {
          labeladult
        }
        children {
          labelchild
        }
      }
      participants {
        destinationchoice
        accomodation {
          labelaccom
          acommodationchoice{
              listchoice
          }
        }
        budget {
          label
        }
        message {
          label
          placeholdermessage
        }
        ready {
          confirm
          label
          refuse
        }
        time
        title
        typeoftrip
      }
    }
  }
  allDestination(where: {language: $language}) {
    nodes {
      name
      taxonomyName
      slug
    }
  }
  allTourStyle(where: {language: $language}) {
    nodes {
      taxonomyName
      slug
      name
    }
  }
}`

export { GET_DATA_FORM_BOOKTOUR }
