import getDataPost from '@/data/getDataPost'
import getDataWithTaxonomy from '@/data/getDataWithTaxonomy'
import { DATA_MENU_COUNTRY } from '@/graphql/country/queries'
import { DATA_TAXONOMIES_BUDGET } from '@/graphql/filter/queries'
import { GET_ALL_POST } from '@/graphql/post/queries'
import { GET_LIST_TRAVEL_STYLE_NAME } from '@/graphql/travelStyle/queries'
import Search from '@/pageComponent/Search/Search'

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
