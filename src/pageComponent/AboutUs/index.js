import BookingProcessSteps from '@/components/Common/BookingProcessSteps'
import Banner from './Banner/Banner'
import Image from 'next/image'
import SubBanner from '@/components/Common/SubBanner'
import stepBg from '@/assets/images/about/stepBg.png'
import Reviews from './reviews/Reviews'

export default function IndexAboutUs({ res, lang }) {
  const bannerData = res?.data?.page?.translation?.aboutUsReviews?.banner
  const bookingStep = res?.data?.page?.translation?.aboutUsReviews?.steps
  const subBannerStep = res?.data?.page?.translation?.aboutUsReviews?.subBanner
  const reviewData = res?.data?.page?.translation?.aboutUsReviews?.main
  return (
    <>
      <Banner data={bannerData} />
      <div className='md:pb-[8.125vw] mt-[-7.2vw] md:mt-0 md:bg-white bg-[#F3F6FB] z-10  relative rounded-2xl md:rounded-none'>
        <Reviews
          lang={lang}
          data={reviewData}
        />
        <div className='relative md:pb-[6.875vw] pb-[16.458vw] pt-[10.66vw] md:pt-0  bg-white'>
          <BookingProcessSteps data={bookingStep} />
          <Image
            src={stepBg}
            alt='step bg'
            width={1000}
            height={1000}
            className='md:block hidden absolute bottom-0 left-0 md:w-full w-[200vw] h-[80vw] z-0'
          />
        </div>
        <SubBanner data={subBannerStep} />
      </div>
    </>
  )
}
