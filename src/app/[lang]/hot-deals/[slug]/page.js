import Promotion from '@/pageComponent/HotDeal'
import getTourDetail from '@/data/tourDetail/getTourDetail'
import getTourDetailHeader from '@/data/tourDetail/getTourDetailHeader'
import { GET_TOUR_DETAIL } from '@/graphql/tourDetail/queries'
import getListPromotionTour from '@/data/hotDeal/getListPromotionTour'
import getMetaDataTour from '@/data/metaData/getMetaData'
import { GET_TOUR_META_DATA } from '@/graphql/metaData/queries'
import { getMeta } from '@/data/metaData/getMeta'

export async function generateMetadata({ params: { slug, lang } }) {
  const res = await getMetaDataTour(GET_TOUR_META_DATA, lang, slug)

  const { excerpt, featuredImage, tourDetail } = res?.data?.tours?.translation
  const title = tourDetail?.meta?.title
  return getMeta(title, excerpt, featuredImage)
}

export default async function page({ params: { lang, slug } }) {
  const result = await getTourDetail(GET_TOUR_DETAIL, slug, lang)
  const headerData = await getTourDetailHeader(lang)
  const res = await getListPromotionTour(lang)
  const promotionList = res?.data?.page?.hotDeals?.promotionList

  const otherPromotionTours = promotionList?.filter(
    (item) => item.translation.id != result?.data?.tours?.translation?.id
  )
  return (
    <Promotion
      data={result?.data?.tours?.translation?.tourDetail || {}}
      headerData={headerData?.data?.page?.translation?.tourDetailHeading}
      relatedTours={otherPromotionTours}
    />
  )
}
