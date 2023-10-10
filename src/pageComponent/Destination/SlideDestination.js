'use client'
import TourItem from '@/components/Common/TourItem'
import Button from '@/components/Common/Button'
import '@/scss/pages/_slideDestination.scss'
import { createTheme, useMediaQuery } from '@mui/material'
import TourItemMobile from '@/components/Common/TourItemMobile'
import SlideTour from '@/components/Common/SlideTour'
import Link from 'next/link'
function SlideDestination({ data, dataOtherType, dataTitle, lang }) {
  const theme = createTheme({
    breakpoints: {
      values: {
        sm: 768
      }
    }
  })
  const onlySmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <div className='relative'>
      <div className='absolute inset-0 z-[-1] slideDestination md:block hidden'></div>
      <div className={`flex flex-col md:mt-[6.94vw] ${onlySmallScreen ? 'w-full' : 'content'}`}>
        <span className='heading-1 md:mb-[3vw] md:pl-0 pl-[4.27vw]'>{dataTitle?.ourTour?.titleTrips}</span>
        <div className='max-md:mt-[6.4vw]'>
          <SlideTour
            data={dataOtherType}
            lang={lang}
          />
        </div>
        <div className='flex justify-center md:mt-[3.5vw] mt-[10.1vw]'>
          <Link
            href={`/${lang}/search`}
            className='btn-secondary'
          >
            {dataTitle?.ourTour?.btn}
          </Link>
        </div>

        <div className='flex flex-col md:mt-[7.5vw] mt-[11.2vw] '>
          <span className='heading-1 md:mb-[3vw] md:pl-0 pl-[4.27vw]'>{dataTitle?.ourTour?.titleTours}</span>
          <div className='grid md:grid-cols-4 gap-x-[2.5vw] gap-y-[3vw] md:bg-transparent bg-[#F3F6FB]'>
            {data?.map((tour, index) => (
              <div key={index}>
                {onlySmallScreen ? (
                  <TourItemMobile
                    data={tour}
                    lang={lang}
                  />
                ) : index < 7 ? (
                  <TourItem
                    data={tour}
                    lang={lang}
                  />
                ) : index === 7 && data?.length >= 8 ? (
                  <div className='h-[24.5vw] rounded-[1vw] relative hidden md:flex  justify-center items-center lastItem'>
                    <div className='absolute flex flex-col items-center justify-center'>
                      <div className='inline-flex gap-[0.3125vw] justify-center items-center'>
                        <span className='text-justify font-optima text-[2vw] font-normal leading-[130%] text-white'>
                          +
                        </span>
                        <span className='text-white heading-1'>{data?.length - 7}</span>
                      </div>
                      <span className='text-white text-justify font-optima text-[1.5vw] block font-medium leading-[150%]'>
                        {dataTitle?.ourTour?.subtitle}
                      </span>
                      <div className='flex justify-center mt-[1.25vw]'>
                        <Link
                          href={`/${lang}/search`}
                          className='btn-secondary'
                        >
                          {dataTitle?.ourTour?.btn}
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  ''
                )}
              </div>
            ))}
            {/* {data?.length >= 7 ? (
              
            ) : (
              ''
            )} */}
          </div>
        </div>
        <div className='flex justify-center md:mt-[3.5vw] mt-[10.1vw]'>
          <Link
            href={`/${lang}/search`}
            className='btn-secondary'
          >
            {dataTitle?.ourTour?.btn}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SlideDestination
