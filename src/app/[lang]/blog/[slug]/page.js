import Blog from '@/pageComponent/Blog'
import getDataPost from '@/data/getDataPost'
import { GET_ALL_TOURS_BESTSELLER } from '@/graphql/post/queries'
import getDataWithTaxonomy from '@/data/getDataWithTaxonomy'

const GET_INITIAL_FILTER = `
query($language : LanguageCodeFilterEnum!){
  allTopic(where:{language: $language}){
    nodes{
      slug
      taxonomyName
      name
    }
  }

  allDestination (where:{language: $language}){
    nodes{
      taxonomyName
      slug
      name
    }
  }

  categories (where:{language: $language}){
    nodes{
      taxonomyName
      slug
      name
    }
  }
  allCountries(where: {language: $language}) {
    nodes {
      tours {
        nodes {
          featuredImage {
            node {
              sourceUrl
            }
          }
          slug
          title
          tourDetail {
            banner {
              gallery {
                sourceUrl
                title
              }
              location
              rate
              title
              price {
                highestPrice
                lowestPrice
              }
            }
          }
        }
      }
    }
  }
}
`
const GET_SLUG_RCM = `
  query($language: LanguageCodeEnum!,$taxonomyValue: ID!) {
  category(idType: SLUG, id: $taxonomyValue) {
    translation(language: $language) {
      slug
    }
  }
}`

async function Page({ params: { lang, slug } }) {
  const data = await getDataPost(lang?.toUpperCase(), GET_ALL_TOURS_BESTSELLER)

  const dataInit = await getDataPost(lang?.toUpperCase(), GET_INITIAL_FILTER)

  const slugRcm = await getDataWithTaxonomy(
    {
      taxonomyValue: slug,
      lang
    },
    GET_SLUG_RCM
  )
  return (
    <div>
      <Blog
        lang={lang}
        slug={slugRcm?.data?.category?.translation?.slug}
        data1={data}
        initTopic={dataInit?.data?.allTopic}
        initDestination={dataInit?.data?.allDestination}
        initCategories={dataInit?.data?.categories}
        allCountries={dataInit?.data?.allCountries}
      />
    </div>
  )
}

export default Page
