const DATA_DETAIL = `
query PostBySlug($slug: String!, $language: LanguageCodeEnum!) {
    generalSettings {
        title
    }
    postBy(slug: $slug) {
        id
        databaseId
        content
        title
        slug
        translation(language: $language) {
            id
            slug
            content
            title
            featuredImage {
              node {
                sourceUrl
              }
            }
            language {
                locale
                slug
            }
        }
    }
}
`

const DATA_BLOG_DETAIL = `query ($slug: String!, $language: LanguageCodeEnum!) {
  postBy(slug: $slug) {
    translation(language: $language) {
      id
      slug
      content
      title
      excerpt
      featuredImage {
        node {
          sourceUrl
        }
      }
      language {
        locale
        slug
      }
      blogdetail {
      subtitle1
      subtitle2
      time
      username
      heading
      otherarticle {
        ... on Post {
          id
          blogdetail {
            heading
            subtitle1
            subtitle2
            time
            username
          }
          translation(language: $language) {
            slug
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    }
    }
  }
}`

const GET_ARTICLE_NEWS = `
query ($language: LanguageCodeFilterEnum!) {
  posts(
    first: 4
    where: {orderby: {field: DATE, order: DESC}, language: $language}
  ) {
    nodes {
      blogdetail {
        heading
        subtitle1
        subtitle2
        time
        username
      }
      slug
      featuredImage {
        node {
          sourceUrl
        }
      }
      title
      excerpt
    }
  }
}
`
export { DATA_DETAIL, DATA_BLOG_DETAIL, GET_ARTICLE_NEWS }
