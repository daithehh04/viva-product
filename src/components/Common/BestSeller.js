'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, FreeMode } from 'swiper/modules'
import { useRef, useState } from 'react'
import Link from 'next/link'
import TourItem from './TourItem'
import BlogItem from './BlogItem'

function BestSeller({ isBlogItem, listBlog, lang }) {
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

  const dataSlide = new Array(6).fill(0)

  return (
    <div className='relative swiperSlideMb'>
      <Swiper
        breakpoints={{
          768: {
            spaceBetween: 20,
            slidesPerView: 4
          }
        }}
        slidesPerView={1.7}
        spaceBetween={0}
        onSlideChange={handleSlideChange}
        freeMode={true}
        modules={[Pagination, FreeMode]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        className='relative flex flex-col'
      >
        {listBlog?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <>
                  {isBlogItem ? (
                    <BlogItem
                      data={item}
                      className={'articleMb'}
                      lang={lang}
                    />
                  ) : (
                    <TourItem lang={lang} />
                  )}
                </>
              )}
            </SwiperSlide>
          )
        })}
      </Swiper>
      <div className='flex absolute max-md:hidden top-[32%] -translate-y-2/4 z-10 w-full justify-between'>
        <button
          onClick={handlePrevSlide}
          className='w-[3.625vw] h-[3.625vw] rounded-full flex justify-center items-center bg-primaryColor button-slide__tour absolute left-[-1.8125vw] top-[50%] -translate-y-2/4'
        >
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='w-[1.5vw] h-[1.5vw]'
          >
            <path d='M3.15303 12.0969L19.457 0.960938L12.873 12.0969L19.457 23.2409L3.15303 12.0969Z' fill='#001258' />
          </svg>
        </button>
        <button
          onClick={handleNextSlide}
          className='w-[3.625vw] h-[3.625vw] rounded-full flex justify-center items-center bg-primaryColor button-slide__tour absolute right-[-1.8125vw] top-[50%] -translate-y-2/4'
        >
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='w-[1.5vw] h-[1.5vw]'
          >
            <path d='M20.847 12.0969L4.54297 0.960938L11.127 12.0969L4.54297 23.2409L20.847 12.0969Z' fill='#001258' />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default BestSeller
