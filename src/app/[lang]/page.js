import Home from '../../pageComponent/Home'
import getDataPage, { idEn, idFr, idIt } from '@/data/getDataPage'
import getDataPost from '@/data/getDataPost'
import {
  DATA_TAXONOMIES_BUDGET,
  DATA_TAXONOMIES_COUNTRY,
  DATA_TAXONOMIES_DURATION,
  DATA_TAXONOMIES_TOUR_STYLE
} from '@/graphql/filter/queries'
import { GET_HOME_PAGE, GET_NEXT_STEP } from '@/graphql/home/queries'

export default async function page({ params: { lang } }) {
  let data
  if (lang === 'en') {
    data = await getDataPage(idEn, GET_HOME_PAGE)
  }
  if (lang === 'it') {
    data = await getDataPage(idIt, GET_HOME_PAGE)
  }
  if (lang === 'fr') {
    data = await getDataPage(idFr, GET_HOME_PAGE)
  }
  const nextStep = await getDataPost(lang, GET_NEXT_STEP)
  const dataTaxonomiesCountry = await getDataPost(lang, DATA_TAXONOMIES_COUNTRY)
  const dataTaxonomiesStyleTour = await getDataPost(lang, DATA_TAXONOMIES_TOUR_STYLE)
  const dataTaxonomiesBudget = await getDataPost(lang, DATA_TAXONOMIES_BUDGET)
  const dataTaxonomiesDuration = await getDataPost(lang, DATA_TAXONOMIES_DURATION)
  return (
    <main>
      <Home
        nextStep={nextStep}
        lang={lang}
        data={data}
        dataTaxonomiesCountry={dataTaxonomiesCountry}
        dataTaxonomiesStyleTour={dataTaxonomiesStyleTour}
        dataTaxonomiesBudget={dataTaxonomiesBudget}
        dataTaxonomiesDuration={dataTaxonomiesDuration}
      />
    </main>
  )
}
