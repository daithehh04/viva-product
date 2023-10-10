import Blog from '@/pageComponent/Blog'
import getDataPost from '@/data/getDataPost'
import { GET_ALL_TOURS_BESTSELLER } from '@/graphql/post/queries'
import getDataWithTaxonomy from '@/data/getDataWithTaxonomy'
import getMetaDataPages from '@/data/metaData/getMetaDataPages'
import { getMeta } from '@/data/metaData/getMeta'

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
            priceTour
            banner {
              gallery {
                sourceUrl
                title
              }
              location
              rate
              title
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

const GET_META_DATA_RCM_SERVICE = `
  query ($language: LanguageCodeEnum!) {
  page(id: "cG9zdDoxOTEy") {
    translation(language: $language){
      featuredImage{
        node{
          sourceUrl
          title
          altText
        }
      }
      recommendService{
        meta{
          description
          title
        }
      }
    }
  }
}
  `

export async function generateMetadata({ params: { lang } }) {
  const res = await getMetaDataPages(GET_META_DATA_RCM_SERVICE, lang)
  if (!res) return
  const { recommendService } = res?.data?.page?.translation

  const featuredImage = res?.data?.page?.translation?.featuredImage
  const title = recommendService?.meta?.title
  const excerpt = recommendService?.meta?.description
  return getMeta(title, excerpt, featuredImage)
}

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
