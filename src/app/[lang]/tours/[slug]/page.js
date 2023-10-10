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
import { Suspense } from 'react'
import Loader from '@/components/Common/Loader'
import dynamic from 'next/dynamic'

export async function generateMetadata({ params: { slug, lang } }) {
  const res = await getMetaDataTour(GET_TOUR_META_DATA, lang, slug)
  const tourDetail = res?.data?.tours?.translation?.tourDetail
  const featuredImage = res?.data?.tours?.translation?.featuredImage
  const title = tourDetail?.meta?.title
  const excerpt = tourDetail?.meta?.description
  return getMeta(title, excerpt, featuredImage)
}

const TourDetailDynamic = dynamic(() => import('@/pageComponent/TourDetail'), {
  ssr: false,
  loading: () => <Loader />
})
export default async function page({ params: { lang, slug } }) {
  const idEnBook = 'cG9zdDoxNDIy'
  const idFrBook = 'cG9zdDoxNDIy'
  const idItBook = 'cG9zdDoxNDIy'

  const headerReq = await getTourDetailHeader(lang)
  const tourReq = await getTourDetail(GET_TOUR_DETAIL, slug, lang)
  const randomTourReq = await getRandomTour(GET_RANDOM_TOUR, lang)
  const reviewReq = await getDataPost(lang, GET_ALL_REVIEWS)
  const booktourReq =
    lang === 'en'
      ? await getDataFormBookTour(GET_DATA_FORM_BOOKTOUR, idEnBook, lang)
      : lang === 'it'
      ? await getDataFormBookTour(GET_DATA_FORM_BOOKTOUR, idItBook, lang)
      : await getDataFormBookTour(GET_DATA_FORM_BOOKTOUR, idFrBook, lang)

  const [headerData, result, res, result4, dataBookTour] = await Promise.all([
    headerReq,
    tourReq,
    randomTourReq,
    reviewReq,
    booktourReq
  ])

  const tourDetailData = result?.data?.tours?.translation?.tourDetail || {}
  const tourId = result?.data?.tours?.translation?.id
  const country = result?.data?.tours?.translation?.countries?.nodes[0]?.slug
  const reviewsList = result4?.data?.allCustomerReview?.nodes
  const randomTour = res?.data?.allTours?.nodes.filter((item, index) => item.translation.id !== tourId)

  const result2 = await getRelatedTour(country, 'COUNTRIES', lang)
  const relatedTours = result2?.data?.allTours?.nodes?.filter((item) => item.translation.id !== tourId)

  return (
    <TourDetailDynamic
      data={tourDetailData}
      headerData={headerData?.data?.page?.translation?.tourDetailHeading}
      relatedTours={!relatedTours || relatedTours?.length === 0 ? relatedTours : randomTour}
      tourId={tourId}
      reviewsList={reviewsList}
      lang={lang}
      dataBookTour={dataBookTour}
      slug={slug}
    />
  )
}
