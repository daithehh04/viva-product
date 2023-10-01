import getDataPost from '@/data/getDataPost'
import getDataWithTaxonomy from '@/data/getDataWithTaxonomy'
import { getMeta } from '@/data/metaData/getMeta'
import getMetaDataPages from '@/data/metaData/getMetaDataPages'
import { DATA_MENU_COUNTRY } from '@/graphql/country/queries'
import { DATA_TAXONOMIES_BUDGET } from '@/graphql/filter/queries'
import { GET_ALL_POST } from '@/graphql/post/queries'
import { GET_META_DATA } from '@/graphql/search/queries'
import { GET_LIST_TRAVEL_STYLE_NAME } from '@/graphql/travelStyle/queries'
import Search from '@/pageComponent/Search/Search'

export async function generateMetadata({ params: { lang } }) {
  const res = await getMetaDataPages(GET_META_DATA, lang)

  const { featuredImage, search } = res?.data?.page?.translation
  const title = search?.meta?.title
  const excerpt = search?.meta?.description
  return getMeta(title, excerpt, featuredImage)
}
async function page({ params: { lang } }) {
  const travelStylesList = await getDataWithTaxonomy({ lang: lang || 'EN' }, GET_LIST_TRAVEL_STYLE_NAME)
  const dataTaxonomiesBudget = await getDataPost(lang, DATA_TAXONOMIES_BUDGET)
  const dataMenuCountry = await getDataPost(lang, DATA_MENU_COUNTRY)
  const resListBlog = await getDataPost(lang, GET_ALL_POST)
  const listBlog = resListBlog?.data?.posts?.nodes

  return (
    <div>
      <Search
        lang={lang}
        travelStylesList={travelStylesList}
        dataTaxonomiesBudget={dataTaxonomiesBudget}
        dataMenuCountry={dataMenuCountry}
        listBlog={listBlog}
      />
    </div>
  )
}

export default page
