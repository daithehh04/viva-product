import getDataPost from '@/data/getDataPost'
import { getMeta } from '@/data/metaData/getMeta'
import getMetaDataTour from '@/data/metaData/getMetaData'
import getRandomTour from '@/data/tourDetail/getRandomTour'
import getRelatedTour from '@/data/tourDetail/getRelatedTour'
import getTourDetail from '@/data/tourDetail/getTourDetail'
import getTourDetailHeader from '@/data/tourDetail/getTourDetailHeader'
import { GET_ALL_REVIEWS, GET_REVIEWS } from '@/graphql/customersReview/queries'
import { GET_TOUR_META_DATA } from '@/graphql/metaData/queries'
import { GET_RANDOM_TOUR, GET_TOUR_DETAIL } from '@/graphql/tourDetail/queries'
import TourDetail from '@/pageComponent/TourDetail'
import getDataFormBookTour from '@/data/formBookTour/getDataFormBookTour'
import { GET_DATA_FORM_BOOKTOUR } from '@/graphql/formBookTour/queries'
import Loading from '@/components/Common/Loading'

export async function generateMetadata({ params: { slug, lang } }) {
  const res = await getMetaDataTour(GET_TOUR_META_DATA, lang, slug)

  const tourDetail = res?.data?.tours?.translation?.tourDetail
  const featuredImage = res?.data?.tours?.translation?.featuredImage
  const title = tourDetail?.meta?.title
  const excerpt = tourDetail?.meta?.description
  return getMeta(title, excerpt, featuredImage)
}

export default async function page({ params: { lang, slug } }) {
  const idEnBook = 'cG9zdDoxNDIy'
  const idFrBook = 'cG9zdDoxNDIy'
  const idItBook = 'cG9zdDoxNDIy'

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
  // get Default list Reviews
  const result4 = await getDataPost(lang, GET_ALL_REVIEWS)
  const reviewsList = result4?.data?.allCustomerReview?.nodes

  let dataBookTour = null
  // get Data form book tour
  if (lang === 'en') {
    dataBookTour = await getDataFormBookTour(GET_DATA_FORM_BOOKTOUR, idEnBook, lang)
  }
  if (lang === 'it') {
    dataBookTour = await getDataFormBookTour(GET_DATA_FORM_BOOKTOUR, idItBook, lang)
  }
  if (lang === 'fr') {
    dataBookTour = await getDataFormBookTour(GET_DATA_FORM_BOOKTOUR, idFrBook, lang)
  }

  return (
    <TourDetail
      data={tourDetailData}
      headerData={headerData?.data?.page?.translation?.tourDetailHeading}
      relatedTours={relatedTours}
      tourId={tourId}
      reviewsList={reviewsList}
      lang={lang}
      dataBookTour={dataBookTour}
      slug={slug}
    />
  )
}
