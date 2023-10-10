import getHotDealHeader from '@/data/hotDeal'
import HotDeal from '@/components/Common/HotDeal'
import getMetaDataPages from '@/data/metaData/getMetaDataPages'
import { GET_META_DATA } from '@/graphql/hotDeal/queries'
import { getMeta } from '@/data/metaData/getMeta'

export async function generateMetadata({ params: { lang } }) {
  const res = await getMetaDataPages(GET_META_DATA, lang)

  const { hotDeals } = res?.data?.page?.translation
  const featuredImage = res?.data?.page?.translation?.featuredImage

  const title = hotDeals?.meta?.title
  const excerpt = hotDeals?.meta?.description
  return getMeta(title, excerpt, featuredImage)
}

async function page({ params: { lang } }) {
  //get header of page
  const result = await getHotDealHeader(lang)
  const hotDeals = result?.data?.page?.translation?.hotDeals

  return (
    <HotDeal
      hotDeals={hotDeals}
      lang={lang}
    />
  )
}

export default page
