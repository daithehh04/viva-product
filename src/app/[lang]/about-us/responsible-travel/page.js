import getAboutUsData from '@/data/aboutUs/getAboutUsData'
import { GET_RESPONSIBLE_TRAVEL_DATA } from '@/graphql/aboutUs/responsible-travel/queries'
import Banner from '@/pageComponent/AboutUs/Banner/Banner'
import Responsible from '@/pageComponent/AboutUs/responsible-travel/Responsible'

export default async function page({ params: { lang } }) {
  const res = await getAboutUsData(GET_RESPONSIBLE_TRAVEL_DATA, lang)
  const bannerData = res?.data?.page?.translation?.responsibleTravel?.banner
  const contentData = res?.data?.page?.translation?.responsibleTravel?.main
  return (
    <>
      <Banner data={bannerData} />
      <Responsible data={contentData} />
    </>
  )
}
