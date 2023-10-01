import getDataPost from '@/data/getDataPost'
import { getMeta } from '@/data/metaData/getMeta'
import getMetaDataTour from '@/data/metaData/getMetaData'
import getRandomTour from '@/data/tourDetail/getRandomTour'
import getRelatedTour from '@/data/tourDetail/getRelatedTour'
import getTourDetail from '@/data/tourDetail/getTourDetail'
import getTourDetailHeader from '@/data/tourDetail/getTourDetailHeader'
import { GET_REVIEWS } from '@/graphql/customersReview/queries'
import { GET_TOUR_META_DATA } from '@/graphql/metaData/queries'
import { GET_RANDOM_TOUR, GET_TOUR_DETAIL } from '@/graphql/tourDetail/queries'
import TourDetail from '@/pageComponent/TourDetail'
import Loading from '../../loading'

export async function generateMetadata({ params: { slug, lang } }) {
  const res = await getMetaDataTour(GET_TOUR_META_DATA, lang, slug)

  const { featuredImage, tourDetail } = res?.data?.tours?.translation
  const title = tourDetail?.meta?.title
  const excerpt = tourDetail?.meta?.description
  return getMeta(title, excerpt, featuredImage)
}

export default async function page({ params: { lang, slug } }) {
  //get header data
  const headerData = await getTourDetailHeader(lang)
  // // get detail of tour
  const result = await getTourDetail(GET_TOUR_DETAIL, slug, lang)
  const tourDetailData = result?.data?.tours?.translation?.tourDetail || {}
  const tourId = result?.data?.tours?.translation?.id
  //get tour country
  const country = result?.data?.tours?.translation?.countries?.nodes[0]?.slug

  // get tours which have the same country
  const result2 = await getRelatedTour(country, 'COUNTRIES', lang)

  let relatedTours = result2?.data?.allTours?.nodes?.filter((item) => item.translation.id !== tourId)

  if (!relatedTours || relatedTours?.length <= 0) {
    const res = await getRandomTour(GET_RANDOM_TOUR, lang)
    let resRmDup = res?.data?.allTours?.nodes.filter((item, index) => item.translation.id !== tourId)
    relatedTours = Array.from(new Set(resRmDup))
  }

  const result3 = await getDataPost(lang, GET_REVIEWS)
  const defaultListReViews = result3?.data?.allCustomerReview?.nodes
  return (
    <TourDetail
      data={tourDetailData}
      headerData={headerData?.data?.page?.translation?.tourDetailHeading}
      relatedTours={relatedTours}
      tourId={tourId}
      defaultListReViews={defaultListReViews}
    />
  )
}
