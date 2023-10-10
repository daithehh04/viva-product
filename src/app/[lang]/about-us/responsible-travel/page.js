import getAboutUsData from '@/data/aboutUs/getAboutUsData'
import { getMeta } from '@/data/metaData/getMeta'
import getMetaDataPages from '@/data/metaData/getMetaDataPages'
import { GET_META_DATA, GET_RESPONSIBLE_TRAVEL_DATA } from '@/graphql/aboutUs/responsible-travel/queries'
import Banner from '@/pageComponent/AboutUs/Banner/Banner'
import Responsible from '@/pageComponent/AboutUs/responsible-travel/Responsible'

export async function generateMetadata({ params: { lang } }) {
  const res = await getMetaDataPages(GET_META_DATA, lang)
  const { responsibleTravel } = res?.data?.page?.translation
  const featuredImage = res?.data?.page?.translation?.featuredImage
  const title = responsibleTravel?.meta?.title
  const excerpt = responsibleTravel?.meta?.description
  return getMeta(title, excerpt, featuredImage)
}

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
