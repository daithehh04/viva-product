'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, FreeMode } from 'swiper/modules'
import { useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import locationIcon from '@/assets/images/route-square.svg'
import calendarIcon from '@/assets/images/calendarY.svg'
import restaurantIcon from '@/assets/images/restauY.svg'

function InspectionTrip({ data, lang }) {
  const [indexSlider, setIndexSlider] = useState(0)
  const swiperRef = useRef()
  const handleNextSlide = () => {
    swiperRef.current?.slideNext()
  }

  const handlePrevSlide = () => {
    swiperRef.current?.slidePrev()
  }

  const handleSlideChange = (swiper) => {
    setIndexSlider(swiper.activeIndex)
  }
  return (
    <div className='inspection-trip mt-[-8.38vw] max-md:mt-[11.68vw]'>
      <h2
        className='text-center heading-1 max-md:text-start max-md:pl-[4.27vw]'
        data-aos-once='true'
        data-aos='fade-up'
        data-aos-duration='1000'
        data-aos-disabled='true'
      >
        {data?.title}
      </h2>
      <div
        data-aos-once='true'
        data-aos='fade-up'
        data-aos-duration='1000'
        data-aos-disabled='true'
        className='relative mt-[3.5vw]'
      >
        <Swiper
          breakpoints={{
            768: {
              spaceBetween: 20,
              freeMode: false,
              slidesPerView: 2,
              loop: true
            }
          }}
          initialSlide={Math.floor(data?.slideTrip.length / 2)}
          slidesPerView={1.2}
          spaceBetween={0}
          loop={true}
          speed={800}
          onSlideChange={handleSlideChange}
          freeMode={true}
          modules={[Pagination, FreeMode]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper
          }}
          className='relative flex flex-col'
        >
          {data?.slideTrip?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                {({ isActive }) => (
                  <Link href={`/tours/${item?.slug}`}>
                    <div className='h-[28.75vw] rounded-[1vw] itemSlideTrip tour-item max-md:rounded-[2.13vw] relative max-md:h-[53.33vw] max-md:ml-[3.2vw]'>
                      <Image
                        src={
                          item?.tourDetail?.banner?.gallery
                            ? item?.tourDetail?.banner?.gallery[0]?.sourceUrl
                            : 'https://viva-cms.okhub.tech/wp-content/uploads/2023/09/blogDetail_Banner.png'
                        }
                        width={1000}
                        height={500}
                        alt='img'
                        className='rounded-[1vw] max-md:rounded-[2.13vw] h-full w-full object-cover'
                      />
                      <div className='info absolute bottom-0 px-[2vw] pb-[2vw] max-md:pb-[4.13vw] max-md:px-[4vw] z-10'>
                        <a className='text-[1.5vw] title-tour text-[#fff] font-bold leading-[1.3] tracking-[-0.03rem] w-[20.3125vw] max-md:text-[2.93vw] max-md:w-[61.33vw] max-lg:text-[1.6vw]'>
                          {item?.tourDetail?.banner?.title}
                        </a>
                        <div className='flex items-center gap-x-[1.19vw] mt-[1.03vw] max-md:gap-x-[4.27vw] max-md:mt-[1.6vw]'>
                          {/* Icon 1 */}
                          <div className='flex items-center gap-x-[0.37vw] max-md:gap-x-[0.53vw]'>
                            <Image
                              src={locationIcon}
                              width={50}
                              height={50}
                              alt='location'
                              className='w-[1.5vw] h-[1.5vw] max-md:w-[3.2vw] max-md:h-[3.2vw] object-cover'
                            />
                            <span className='text-white text-[1.125vw] max-md:text-[2.267vw] leading-[1.3] max-lg:text-[1.4vw]'>
                              {item?.tourDetail?.banner?.location}
                            </span>
                          </div>
                          {/* Icon 2 */}
                          <div className='flex items-center gap-x-[0.37vw]'>
                            <Image
                              src={calendarIcon}
                              width={50}
                              height={50}
                              alt='location'
                              className='w-[1.5vw] h-[1.5vw] max-md:w-[3.2vw] max-md:h-[3.2vw] object-cover'
                            />
                            <span className='text-white text-[1.125vw] max-md:text-[2.267vw] leading-[1.3] max-lg:text-[1.4vw]'>
                              {item?.tourDetail?.banner?.time}
                            </span>
                          </div>
                          {/* Icon 3 */}
                          <div className='flex items-center gap-x-[0.37vw]'>
                            <Image
                              src={restaurantIcon}
                              width={50}
                              height={50}
                              alt='location'
                              className='w-[1.5vw] h-[1.5vw] max-md:w-[3.2vw] max-md:h-[3.2vw] object-cover'
                            />
                            <span className='text-white text-[1.125vw] max-md:text-[2.267vw] leading-[1.3] max-lg:text-[1.4vw]'>
                              {item?.tourDetail?.banner?.restaurant}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className='overlay absolute inset-0 bg-overlayTrip rounded-[1vw] max-md:rounded-[2.13vw]'></div>
                    </div>
                  </Link>
                )}
              </SwiperSlide>
            )
          })}
        </Swiper>
        <div className='flex absolute top-[50%] -translate-y-2/4 z-10 w-full justify-between max-md:hidden'>
          <button
            onClick={handlePrevSlide}
            className='w-[3.625vw] h-[3.625vw] rounded-full flex justify-center items-center bg-primaryColor absolute left-[5.6vw] top-[50%] -translate-y-2/4'
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='w-[1.5vw] h-[1.5vw]'
            >
              <path
                d='M3.15303 12.0969L19.457 0.960938L12.873 12.0969L19.457 23.2409L3.15303 12.0969Z'
                fill='#001258'
              />
            </svg>
          </button>
          <button
            onClick={handleNextSlide}
            className='w-[3.625vw] h-[3.625vw] rounded-full flex justify-center items-center bg-primaryColor absolute right-[5.6vw] top-[50%] -translate-y-2/4'
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='w-[1.5vw] h-[1.5vw]'
            >
              <path
                d='M20.847 12.0969L4.54297 0.960938L11.127 12.0969L4.54297 23.2409L20.847 12.0969Z'
                fill='#001258'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default InspectionTrip
