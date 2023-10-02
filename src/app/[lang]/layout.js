import { idEn, idFr, idIt } from '@/data/getDataPage'
import Footer from '../../components/Common/Footer'
import ThemeRegistry from '../../components/ThemeRegistry/ThemeRegistry'

// Swiper
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/thumbs'
import 'swiper/css/free-mode'
// Aos
import 'aos/dist/aos.css'
// style css
import './globals.css'
import '../../scss/main.scss'
import '../../assets/fonts/stylesheet.css'
import getDataPage from '@/data/getDataPage'
import getDataPost from '@/data/getDataPost'
import { DATA_MENU_COUNTRY } from '@/graphql/country/queries'
import { GET_LIST_TRAVEL_STYLE_NAME } from '@/graphql/travelStyle/queries'
import getDataWithTaxonomy from '@/data/getDataWithTaxonomy'
import ApolloClientProvider from '../apolloProvider'
import getHotDealHeader from '@/data/hotDeal'
import { DATA_HEADER } from '@/graphql/home/queries'
import GET_SERVICE_BY_CATEGORY from '@/data/getDataRcmServices'
import getDataFormBookTour from '@/data/formBookTour/getDataFormBookTour'
import { GET_DATA_FORM_BOOKTOUR } from '@/graphql/formBookTour/queries'
import { GET_DATA_MENU_WWR } from '@/graphql/aboutUs/who-we-are/queries'
import getAboutUsData from '@/data/aboutUs/getAboutUsData'
import { GET_DATA_MENU_RT } from '@/graphql/aboutUs/responsible-travel/queries'
import { GET_DATA_MENU_RV } from '@/graphql/aboutUs/reviews/queries'
import Navbar from '@/components/Common/Navbar'
import { Suspense } from 'react'
import Loading from './loading'
import { usePathname } from 'next/navigation'
const idEnBook = 'cG9zdDoxNDIy'
const idFrBook = 'cG9zdDoxNDIy'
const idItBook = 'cG9zdDoxNDIy'
export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'it' }, { lang: 'fr' }]
}
export default async function RootLayout({ children, params }) {
  let data
  let dataBookTour
  let dataMenuCountry
  let recommendserviceList
  if (params.lang === 'en') {
    data = await getDataPage(idEn, DATA_HEADER)
    dataMenuCountry = await getDataPost('EN', DATA_MENU_COUNTRY)
    recommendserviceList = await getDataPost('EN', GET_SERVICE_BY_CATEGORY)
    dataBookTour = await getDataFormBookTour(GET_DATA_FORM_BOOKTOUR, idEnBook, params.lang)
  }
  if (params.lang === 'it') {
    data = await getDataPage(idIt, DATA_HEADER)
    dataMenuCountry = await getDataPost('IT', DATA_MENU_COUNTRY)
    recommendserviceList = await getDataPost('IT', GET_SERVICE_BY_CATEGORY)
    dataBookTour = await getDataFormBookTour(GET_DATA_FORM_BOOKTOUR, idItBook, params.lang)
  }
  if (params.lang === 'fr') {
    data = await getDataPage(idFr, DATA_HEADER)
    dataMenuCountry = await getDataPost('FR', DATA_MENU_COUNTRY)
    recommendserviceList = await getDataPost('FR', GET_SERVICE_BY_CATEGORY)
    dataBookTour = await getDataFormBookTour(GET_DATA_FORM_BOOKTOUR, idFrBook, params.lang)
  }
  const dataHome = data?.data?.page?.home
  const travelStylesList = await getDataWithTaxonomy({ lang: params.lang || 'EN' }, GET_LIST_TRAVEL_STYLE_NAME)

  //get header of hotDeal
  const result = await getHotDealHeader(params.lang)
  const hotDeals = result?.data?.page?.translation?.hotDeals

  // get data of menu - about-us
  const wwrRes = await getAboutUsData(GET_DATA_MENU_WWR, params.lang)
  const rtRes = await getAboutUsData(GET_DATA_MENU_RT, params.lang)
  const rvRes = await getAboutUsData(GET_DATA_MENU_RV, params.lang)

  return (
    <html lang={params.lang}>
      <body suppressHydrationWarning={true}>
        <ApolloClientProvider>
          <ThemeRegistry>
            <Suspense fallback={<Loading />}>
              <Navbar
                travelStylesList={travelStylesList}
                params={params.lang}
                dataHome={dataHome?.header}
                dataMenuCountry={dataMenuCountry?.data?.allCountries?.nodes}
                hotDeals={hotDeals}
                rcmServicesList={recommendserviceList}
                dataBookTour={dataBookTour}
                dataAboutUs={{
                  wwrRes: wwrRes?.data?.page?.translation,
                  rtRes: rtRes?.data?.page?.translation,
                  rvRes: rvRes?.data?.page?.translation
                }}
              />
              {children}
              <Footer lang={params.lang} />
            </Suspense>
          </ThemeRegistry>
        </ApolloClientProvider>
      </body>
    </html>
  )
}
