import getRelatedTour from '@/data/tourDetail/getRelatedTour'
import getTourDetail from '@/data/tourDetail/getTourDetail'
import getTourDetailHeader from '@/data/tourDetail/getTourDetailHeader'
import { GET_TOUR_DETAIL } from '@/graphql/tourDetail/queries'
import TourDetail from '@/pageComponent/TourDetail'

export default async function page({ params: { lang, slug } }) {
  //get header data
  const headerData = await getTourDetailHeader(lang)
  // get detail of tour
  const result = await getTourDetail(GET_TOUR_DETAIL, slug, lang)
  const tourDetailData = result?.data?.tours?.translation?.tourDetail || {}
  //get tour country
  const country = result?.data?.tours?.translation?.countries?.nodes[0]?.slug

  // get tours which have the same country
  const result2 = await getRelatedTour(country, 'COUNTRIES', lang)
  const relatedTours = result2?.data?.allTours?.nodes?.filter((item) => item.translation.slug !== slug)

  return (
    <TourDetail
      data={tourDetailData}
      headerData={headerData?.data?.page?.translation?.tourDetailHeading}
      relatedTours={relatedTours}
    />
  )
}
