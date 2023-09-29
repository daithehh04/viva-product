import Banner from './Banner'
import SlideDestination from './SlideDestination'
import SectionActions from './SectionActions'
import CustomerReview from './CustomerReview'
import OurBlog from './OurBlog'
import FilterPopup from './FilterPopup'
import { DATA_COUNTRY, DATA_SLIDE_OTHER_TOUR, DATA_SLIDE_TOUR } from '@/graphql/country/queries'
import getDataWithTaxonomy from '@/data/getDataWithTaxonomy'
import getDataPost from '@/data/getDataPost'
import {
  DATA_TAXONOMIES_BUDGET,
  DATA_TAXONOMIES_COUNTRY,
  DATA_TAXONOMIES_DURATION,
  DATA_TAXONOMIES_TOUR_STYLE
} from '@/graphql/filter/queries'
async function index({ lang, slug }) {
  const dataCountry = await getDataWithTaxonomy(
    {
      taxonomyValue: slug,
      lang: lang?.toUpperCase()
    },
    DATA_COUNTRY
  )
  const dataOtherTrip = await getDataWithTaxonomy(
    {
      taxonomyValue: slug,
      taxonomyName: 'COUNTRIES',
      lang: lang
    },
    DATA_SLIDE_TOUR
  )
  const dataOtherTypeTrip = await getDataWithTaxonomy(
    {
      taxonomyValue: slug,
      taxonomyName: 'COUNTRIES',
      lang: lang
    },
    DATA_SLIDE_OTHER_TOUR
  )

  const data = dataCountry?.data?.countries?.translation
  // ==== Get name filter ====
  const dataTaxonomiesStyleTour = await getDataPost(lang, DATA_TAXONOMIES_TOUR_STYLE)
  const dataTaxonomiesBudget = await getDataPost(lang, DATA_TAXONOMIES_BUDGET)
  const dataTaxonomiesDuration = await getDataPost(lang, DATA_TAXONOMIES_DURATION)
  const arrDataTaxonomiesBudget = dataTaxonomiesBudget?.data?.allBudget?.nodes
  const arrDataTaxonomiesDuration = dataTaxonomiesDuration?.data?.allDuration?.nodes
  const arrDataTaxonomiesStyleTour = dataTaxonomiesStyleTour?.data?.allTourStyle?.nodes
  function handleTaxonomies(data) {
    const newArrDataTaxonomies = []
    data?.map((item) => {
      newArrDataTaxonomies.push(item)
    })
    return newArrDataTaxonomies
  }
  const newArrDataTaxonomiesStyleTravel = handleTaxonomies(arrDataTaxonomiesStyleTour)
  const newArrDataTaxonomiesBudget = handleTaxonomies(arrDataTaxonomiesBudget)
  const newArrDataTaxonomiesDuration = handleTaxonomies(arrDataTaxonomiesDuration)

  const dataFilter = {
    style: newArrDataTaxonomiesStyleTravel,
    budget: newArrDataTaxonomiesBudget,
    duration: newArrDataTaxonomiesDuration
  }
  return (
    <div>
      <Banner data={data?.country?.banner} dataFilter={dataFilter}/>
      <FilterPopup dataFilter={dataFilter}/>
      <SectionActions />
      <SlideDestination
        data={dataOtherTrip?.data?.allTours?.nodes}
        dataOtherType={dataOtherTypeTrip?.data?.allTours?.nodes}
        dataTitle={data}
      />
      <CustomerReview data={data?.country?.customerReviews} dataInfo={data?.ourTour} />
      <OurBlog data={data} lang={lang} />
    </div>
  )
}

export default index
