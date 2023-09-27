'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import StaffItem from './StaffItem'
import { FreeMode } from 'swiper/modules'

export default function StaffSlideMobile({ staffData }) {
  return (
    <Swiper
      className='mySwiper'
      slidesPerView={1.8}
      spaceBetween={0}
      freeMode={true}
      modules={[FreeMode]}
    >
      {staffData?.map((staff, index) => {
        return (
          <SwiperSlide key={index}>
            <div className={`ml-[4.27vw]`}>
              <StaffItem staff={staff} />
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
