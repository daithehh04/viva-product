'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'
import img1 from '@/assets/images/fo1.png'
import img2 from '@/assets/images/fo2.png'
import img3 from '@/assets/images/fo3.png'
import img4 from '@/assets/images/fo4.png'
import img5 from '@/assets/images/fo5.png'
import Image from 'next/image'

function SlidePartners({ data, reverse }) {
  return (
    <div className='content'>
      <Swiper
        breakpoints={{
          768: {
            slidesPerView: 5,
            spaceBetween: 50
          }
        }}
        slidesPerView={3}
        spaceBetween={50}
        loop={true}
        centeredSlides={true}
        allowTouchMove={false}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          stopOnLastSlide: false,
          waitForTransition: true
        }}
        speed={1000}
        freeMode={true}
        modules={[Autoplay, FreeMode]}
        className='w-full mySwiper slide-partners'
      >
        {data?.map((item, index) => {
          return (
            <div key={(index + 1) * 100}>
              <SwiperSlide className='w-[20%] partner-item pointer-events-none' key={index + 1}>
                <Image
                  src={item?.sourceUrl}
                  width={500}
                  height={500}
                  alt='partners'
                  className={`object-contain w-[13vw] max-md:w-[26.33vw] max-md:h-[8.69vw] ${
                    reverse ? '-scale-90' : ''
                  }`}
                />
              </SwiperSlide>
              <SwiperSlide className='w-[20%] partner-item pointer-events-none' key={(index + 1) * -1}>
                <Image
                  src={item?.sourceUrl}
                  width={500}
                  height={500}
                  alt='partners'
                  className={`object-contain w-[13vw] max-md:w-[26.33vw] max-md:h-[8.69vw] ${
                    reverse ? '-scale-90' : ''
                  }`}
                />
              </SwiperSlide>
            </div>
          )
        })}
      </Swiper>
    </div>
  )
}

export default SlidePartners
