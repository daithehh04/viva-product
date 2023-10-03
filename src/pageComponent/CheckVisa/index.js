import { GET_DATA_CHECKVISA2 } from '@/graphql/page/queries'

import Banner from './Banner'
import BestSellerTour from './BestSellerTour'
import Infomation from './Infomation'
import getDataPost from '@/data/getDataPost'
import { COUNTRY_FROM, COUNTRY_TO } from '@/graphql/checkVisa/queries'
import { DataProvider } from './DataContext'

async function index({ lang }) {
  // let data = await getDataPost(lang, GET_DATA_CHECKVISA)
  let data = await getDataPost(lang, GET_DATA_CHECKVISA2)
  const dataCheckVisa = data?.data?.page?.translation
  const dataCountryFrom = await getDataPost(lang, COUNTRY_FROM)
  const dataCountryTo = await getDataPost(lang, COUNTRY_TO)
  function handleTaxonomies(data) {
    const newArrDataTaxonomies = []
    data?.map((item) => {
      newArrDataTaxonomies.push(item)
    })
    return newArrDataTaxonomies
  }
  const arrCountryFrom = handleTaxonomies(dataCountryFrom?.data?.allFromCountry?.nodes)
  const arrCountryTo = handleTaxonomies(dataCountryTo?.data?.allToCountry?.nodes)
  const dataFilter = {
    countryFrom: arrCountryFrom,
    countryTo: arrCountryTo
  }
  return (
    <DataProvider>
      <Banner data={dataCheckVisa} dataFilter={dataFilter} lang={lang} />
      <Infomation data={dataCheckVisa} />
      <BestSellerTour dataCheckVisa={dataCheckVisa} data={data} lang={lang} />
    </DataProvider>
  )
}

export default index
