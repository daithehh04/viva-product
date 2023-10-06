import Statistics from '@/pageComponent/AboutUs/who-we-are/Statistics'
import Staffs from '@/pageComponent/AboutUs/who-we-are/staffs/Staffs'
import AboutVideo from '@/components/Common/Video'
import { GET_META_DATA, GET_WHO_WE_ARE_DATA } from '@/graphql/aboutUs/who-we-are/queries'
import Banner from '@/pageComponent/AboutUs/Banner/Banner'
import getAboutUsData from '@/data/aboutUs/getAboutUsData'
import getMetaDataPages from '@/data/metaData/getMetaDataPages'
import { getMeta } from '@/data/metaData/getMeta'

export async function generateMetadata({ params: { lang } }) {
  const res = await getMetaDataPages(GET_META_DATA, lang)

  const { who_we_are } = res?.data?.page?.translation
  const featuredImage = res?.data?.page?.translation?.featuredImage
  const title = who_we_are?.meta?.title
  const excerpt = who_we_are?.meta?.description
  return getMeta(title, excerpt, featuredImage)
}

async function page({ params: { lang } }) {
  const res = await getAboutUsData(GET_WHO_WE_ARE_DATA, lang)
  const bannerData = res?.data?.page?.translation?.who_we_are?.banner
  const contentData = res?.data?.page?.translation?.who_we_are?.content

  return (
    <div className='w-full'>
      <Banner data={bannerData} />
      <Statistics data={contentData} />
      <AboutVideo data={contentData?.descriptionVideo} />
      <Staffs data={contentData?.staffs} />
    </div>
  )
}

export default page
