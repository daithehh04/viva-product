'use client'
//import lib & fnc
import { useRef } from 'react'
import { Grid, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import vw from '@/helpers/convertToVw'
//import comps & data
import StaffItem from './StaffItem'
// import img
import btnNext from '@/assets/images/about/arrowRight.png'
import btnPrev from '@/assets/images/about/arrowLeft.png'

export default function StaffSlide({ staffData = [] }) {
  const btnNextRef = useRef(null)
  const btnPrevRef = useRef(null)

  return (
    <div className='relative staffSlide'>
      <div className='flex gap-[1vw] mb-[0.375vw] absolute top-[-5.625vw] right-0'>
        <button ref={btnPrevRef} className='btn-prev p-[1vw] w-[3.625vw] h-[3.625vw] bg-primaryColor rounded-[100px]'>
          <Image src={btnPrev} alt='button' className='w-[1.5vw] h-[1.5vw]' />
        </button>

        <button ref={btnNextRef} className='btn-next p-[1vw] w-[3.625vw] h-[3.625vw] bg-primaryColor rounded-[100px]'>
          <Image src={btnNext} alt='button' className='w-[1.5vw] h-[1.5vw]' />
        </button>
      </div>

      {/* slide */}
      <Swiper
        slidesPerView={4}
        grid={{
          rows: 2,
          fill: 'row'
        }}
        navigation={{
          nextEl: btnNextRef.current,
          prevEl: btnPrevRef.current,
          disabledClass: 'swiper-button-disabled'
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = btnPrevRef.current
          swiper.params.navigation.nextEl = btnNextRef.current
        }}
        spaceBetween={vw(2)}
        modules={[Grid, Navigation]}
        className='mySwiper about-staff w-full h-full relative'
      >
        {staffData.map((staff, index) => {
          return (
            <SwiperSlide key={index} className='swiper-slide w-[19.375vw] cursor-pointer'>
              <StaffItem staff={staff} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
