'use client'

import SubBanner from '@/components/Common/SubBanner'
import AboutTour from '@/pageComponent/TourDetail/AboutTour'
import TourDetailBanner from '@/pageComponent/TourDetail/TourDetailBanner'
import TourDetailBannerMobile from '@/pageComponent/TourDetail/TourDetailBannerMobile'
import Image from 'next/image'
import tour from '@/assets/images/tourDetail/tourBg.png'

export default function TourDetail({
  data = {},
  headerData = {},
  relatedTours,
  reviewsList = [],
  lang,
  dataBookTour = {},
  slug
}) {
  const { banner, content, map } = data

  const { bannerHeaders, content: contentHeader, relatedTour: relatedTourHeader, subBanner } = headerData

  const reviews = reviewsList?.filter((item) => item?.customerReview?.tours?.slug === slug)
  return (
    <>
      <TourDetailBanner
        data={banner || {}}
        headerData={bannerHeaders}
      />
      <TourDetailBannerMobile
        data={banner || {}}
        headerData={bannerHeaders}
      />
      <div className='md:my-[7.5vw] relative'>
        <div className='md:block hidden'>
          <Image
            src={tour}
            alt='tour'
            className='absolute top-0 left-0 w-full h-[150vw] opacity-5 z-0'
          />
          <div
            className='w-full h-[150vw] absolute left-0 top-0 z-10'
            style={{
              background:
                'linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.86) 8.95%, rgba(255, 255, 255, 0.74) 13.79%, rgba(255, 255, 255, 0.00) 47.85%, rgba(255, 255, 255, 0.84) 89.25%, #FFF 100%)'
            }}
          ></div>
        </div>
        <main className='relative z-20'>
          <AboutTour
            data={{ content, map, banner, reviews: reviews }}
            headerData={{ contentHeader, relatedTourHeader, bannerHeaders }}
            relatedTours={relatedTours}
            lang={lang}
            dataBookTour={dataBookTour}
          />
          <SubBanner
            data={subBanner}
            className={'md:text-[2.75vw]'}
            lang={lang}
          />
        </main>
      </div>
    </>
  )
}
