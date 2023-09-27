import Banner from './Banner'
import SlideDestination from './SlideDestination'
import SectionActions from './SectionActions'
import CustomerReview from './CustomerReview'
import OurBlog from './OurBlog'
import FilterPopup from './FilterPopup'
import { DATA_COUNTRY, DATA_SLIDE_OTHER_TOUR, DATA_SLIDE_TOUR } from '@/graphql/country/queries'
import getDataWithTaxonomy from '@/data/getDataWithTaxonomy'

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
  return (
    <div>
      <Banner data={data?.country?.banner} />
      <FilterPopup />
      <SectionActions />
      <SlideDestination
        data={dataOtherTrip?.data?.allTours?.nodes}
        dataOtherType={dataOtherTypeTrip?.data?.allTours?.nodes}
      />
      <CustomerReview data={data?.country?.customerReviews} />
      <OurBlog />
    </div>
  )
}

export default index
