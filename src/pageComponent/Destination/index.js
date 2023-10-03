import Banner from './Banner'
import SlideDestination from './SlideDestination'
import SectionActions from './SectionActions'
import CustomerReview from './CustomerReview'
import OurBlog from './OurBlog'
import FilterPopup from './FilterPopup'
import {
  DATA_COUNTRY,
  DATA_SLIDE_OTHER_TOUR,
  DATA_SLIDE_TOUR,
  GET_DATA_BEST_SELLER_OURTOUR
} from '@/graphql/country/queries'
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

  const dataBestSeller = await getDataPost(lang, GET_DATA_BEST_SELLER_OURTOUR)
  console.log(dataBestSeller?.data?.bestSeller?.tours?.nodes)
  const data = dataCountry?.data?.countries?.translation
  // ==== Get name filter ====
  const dataTaxonomiesStyleTour = await getDataPost(lang, DATA_TAXONOMIES_TOUR_STYLE)
  const dataTaxonomiesBudget = await getDataPost(lang, DATA_TAXONOMIES_BUDGET)
  const dataTaxonomiesDuration = await getDataPost(lang, DATA_TAXONOMIES_DURATION)
  const dataTaxonomiesCountry = await getDataPost(lang, DATA_TAXONOMIES_COUNTRY)
  const arrDataTaxonomiesBudget = dataTaxonomiesBudget?.data?.allBudget?.nodes
  const arrDataTaxonomiesDuration = dataTaxonomiesDuration?.data?.allDuration?.nodes
  const arrDataTaxonomiesStyleTour = dataTaxonomiesStyleTour?.data?.allTourStyle?.nodes
  const arrDataTaxonomiesCountry = dataTaxonomiesCountry?.data?.allCountries?.nodes
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
  const newArrDataTaxonomiesCountry = handleTaxonomies(arrDataTaxonomiesCountry)

  const dataFilter = {
    style: newArrDataTaxonomiesStyleTravel,
    budget: newArrDataTaxonomiesBudget,
    duration: newArrDataTaxonomiesDuration,
    country: newArrDataTaxonomiesCountry
  }
  return (
    <div>
      <Banner data={data?.country?.banner} slug={slug} dataFilter={dataFilter} lang={lang} />
      <FilterPopup dataFilter={dataFilter} slug={slug} lang={lang} />
      <SectionActions />
      <SlideDestination
        // data={dataOtherTrip?.data?.allTours?.nodes}
        data={dataBestSeller?.data?.bestSeller?.tours?.nodes}
        dataOtherType={dataOtherTypeTrip?.data?.allTours?.nodes}
        dataTitle={data}
        lang={lang}
      />
      <CustomerReview data={data?.country?.customerReviews} dataInfo={data?.ourTour} lang={lang} />
      <OurBlog data={data} lang={lang} />
    </div>
  )
}

export default index
