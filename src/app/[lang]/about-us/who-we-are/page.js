import Statistics from '@/pageComponent/AboutUs/who-we-are/Statistics'
import Staffs from '@/pageComponent/AboutUs/who-we-are/staffs/Staffs'
import AboutVideo from '@/components/Common/Video'
import { GET_WHO_WE_ARE_DATA } from '@/graphql/aboutUs/who-we-are/queries'
import Banner from '@/pageComponent/AboutUs/Banner/Banner'
import getAboutUsData from '@/data/aboutUs/getAboutUsData'

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
