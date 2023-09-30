import getHotDealHeader from '@/data/hotDeal'
import getListVoucher from '@/data/hotDeal/getListVoucher'
import HotDeal from '@/components/Common/HotDeal'
import getMetaDataPages from '@/data/metaData/getMetaDataPages'
import { GET_META_DATA } from '@/graphql/hotDeal/queries'
import { getMeta } from '@/data/metaData/getMeta'

export async function generateMetadata({ params: { lang } }) {
  const res = await getMetaDataPages(GET_META_DATA, lang)

  const { featuredImage, hotDeals } = res?.data?.page?.translation
  const title = hotDeals?.meta?.title
  const excerpt = hotDeals?.meta?.description
  return getMeta(title, excerpt, featuredImage)
}

async function page({ params: { lang } }) {
  //get header of page
  const result = await getHotDealHeader(lang)
  const hotDeals = result?.data?.page?.translation?.hotDeals
  // get main data of page
  const res = await getListVoucher(lang)
  const listVoucher = res?.data?.allVouchers?.nodes || []

  return (
    <HotDeal
      hotDeals={hotDeals}
      listVoucher={listVoucher}
    />
  )
}

export default page
