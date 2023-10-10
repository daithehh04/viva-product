import Banner from './Banner'
import HotTour from './HotTour'
import TourSlide from './TourSlide'
import { GET_INFO_PAGE_TRAVEL_STYLE } from '@/graphql/travelStyle/queries'
import getDataWithTaxonomy from '@/data/getDataWithTaxonomy'
import getDataPost from '@/data/getDataPost'
import {
  DATA_TAXONOMIES_BUDGET,
  DATA_TAXONOMIES_COUNTRY,
  DATA_TAXONOMIES_DURATION,
  DATA_TAXONOMIES_TOUR_STYLE
} from '@/graphql/filter/queries'
import { notFound } from 'next/navigation'

async function index({ lang, slug }) {
  const getPageInfo = await getDataWithTaxonomy(
    {
      taxonomyValue: slug,
      lang
    },
    GET_INFO_PAGE_TRAVEL_STYLE
  )

  if (!getPageInfo?.data?.tourStyle?.translation?.banner) {
    notFound()
  }

  const dataTaxonomiesCountry = await getDataPost(lang, DATA_TAXONOMIES_COUNTRY)
  const dataTaxonomiesStyleTour = await getDataPost(lang, DATA_TAXONOMIES_TOUR_STYLE)
  const dataTaxonomiesBudget = await getDataPost(lang, DATA_TAXONOMIES_BUDGET)
  const dataTaxonomiesDuration = await getDataPost(lang, DATA_TAXONOMIES_DURATION)
  return (
    <div>
      <Banner data={getPageInfo?.data?.tourStyle?.translation?.banner?.banner} />
      <TourSlide
        tourStyleName={getPageInfo?.data?.tourStyle?.translation?.banner?.tourStyleName}
        lang={lang}
        slug={getPageInfo?.data?.tourStyle?.translation?.slug}
        dataTaxonomiesCountry={dataTaxonomiesCountry}
        dataTaxonomiesStyleTour={dataTaxonomiesStyleTour}
        dataTaxonomiesBudget={dataTaxonomiesBudget}
        dataTaxonomiesDuration={dataTaxonomiesDuration}
      />
      <HotTour
        lang={lang}
        hotTour={getPageInfo?.data?.tourStyle?.translation?.banner?.hotTour}
        reason={getPageInfo?.data?.tourStyle?.translation?.banner?.travelReason}
        data={getPageInfo?.data?.tourStyle?.translation?.banner?.groupbutton?.buttonseemore}
      />
    </div>
  )
}

export default index
