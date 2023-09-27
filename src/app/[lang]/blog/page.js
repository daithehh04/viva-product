import Blog from '@/pageComponent/Blog'
import getDataPost from '@/data/getDataPost'
import { GET_ALL_POST, GET_ALL_TOURS_BESTSELLER } from '@/graphql/post/queries'
import getDataPage from '@/data/getDataPage'

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
async function Page({ params: { lang } }) {
  const data = await getDataPost(lang?.toUpperCase(), GET_ALL_TOURS_BESTSELLER)
  const dataInit = await getDataPost(lang?.toUpperCase(), GET_INITIAL_FILTER)
  return (
    <div>
      <Blog
        lang={lang}
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
