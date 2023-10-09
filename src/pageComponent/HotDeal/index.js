'use client'
import AboutTour from '@/pageComponent/TourDetail/AboutTour'
import Banner from '@/pageComponent/HotDeal/Banner'
import Price from '@/pageComponent/TourDetail/Price'
import TourDetailBannerMobile from '@/pageComponent/TourDetail/TourDetailBannerMobile'
import tour from '@/assets/images/tourDetail/tourBg.png'
import Image from 'next/image'
import promoBg from '@/assets/images/promoBg.png'
import { useState } from 'react'
import ModalCustom from '@/components/Common/ModalCustom'
import BookTour from '@/components/Common/BookTour'

export default function Promotion({
  data = {},
  headerData = {},
  relatedTours = [],
  reviewsList,
  slug,
  lang,
  dataBookTour
}) {
  const [openModal, setOpenModal] = useState(false)
  const { banner, content, map, priceTour } = data

  const reviews = reviewsList?.filter((item) => item?.customerReview?.tours?.slug === slug)
  const { bannerHeaders, content: contentHeader, relatedTour: relatedTourHeader } = headerData
  return (
    <div className='md:mt-[10.8125vw] relative'>
      <header className='relative'>
        <div className='content flex justify-between'>
          <h2 className='md:block hidden heading-1 w-[51.125vw]'>{banner?.title}</h2>
          <Price
            type='promo'
            className={'w-[19.0625vw] px-[1.88vw] pb-[1.19vw] pt-[3.19vw]'}
            data={{
              button: map?.button,
              price: { header: bannerHeaders?.priceHeader, value: priceTour }
            }}
            onClick={() => setOpenModal(true)}
          />
        </div>
        <div className='md:block hidden z-10 relative pt-[3.75vw] pb-[7.44vw]'>
          <Banner data={banner} />
        </div>
        <div className='md:hidden block'>
          <TourDetailBannerMobile
            data={banner || {}}
            headerData={bannerHeaders}
            price={priceTour}
          />
        </div>
        <Image
          src={promoBg}
          alt='promoBg'
          className='md:block hidden w-full h-full absolute top-0 left-0 -z-[1]'
        />
      </header>
      {/* main content */}
      <main className='relative'>
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
        <div className='relative z-20'>
          <AboutTour
            type='promo'
            data={{ content, map, banner, reviews }}
            headerData={{ contentHeader, relatedTourHeader, bannerHeaders }}
            relatedTours={relatedTours}
            lang={lang}
            dataBookTour={dataBookTour}
            price={priceTour}
          />
        </div>
      </main>

      {openModal && (
        <ModalCustom
          openModal={openModal}
          setOpenModal={setOpenModal}
          className='w-[91.46vw] md:w-[82.93vw] md:h-[90vh] h-[80vh]'
        >
          <div className='w-full h-full overflow-y-auto md:rounded-[16px] overflow-x-hidden'>
            <BookTour
              data={dataBookTour}
              setOpenModal={setOpenModal}
            />
          </div>
        </ModalCustom>
      )}
    </div>
  )
}
