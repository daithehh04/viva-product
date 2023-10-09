'use client'
import Image from 'next/image'
import videoBG from '@/assets/images/about/videoBG.png'
import star from '@/assets/images/tourDetail/star.svg'
import locationIcon from '@/assets/images/tourDetail/location.svg'
import img from '@/assets/images/tourDetail/img.svg'
import TourDetailVideo from './TourDetailVideo'
import { useState } from 'react'
import Listimg from '../HotDeal/ListImg'
import ModalCustom from '@/components/Common/ModalCustom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

export default function TourDetailBannerMobile({ data = {}, price }) {
  const { gallery, location, rate, video, title } = data
  const starIcons = new Array(Math.ceil(rate || 5)).fill(0)
  const [isPlay, setIsPlay] = useState(false)

  const [openModal, setOpenModal] = useState(false)
  const listGallery = gallery?.concat(gallery)
  return (
    <section className='md:hidden block relative mb-[6.4vw] text-textColor'>
      <div className='w-full h-[72.8vw] relative'>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          className='mySwiper2 w-full h-full'
        >
          <>
            {video?.uploadVideo?.mediaItemUrl && (
              <SwiperSlide className='relative w-full h-full'>
                <TourDetailVideo
                  className={{
                    video: 'h-full',
                    button: 'w-[9.6vw] h-[11.2vw] bottom-[24.8vw] left-[45vw] z-10'
                  }}
                  vidLink={video?.uploadVideo?.mediaItemUrl}
                  overlayImg={video?.overlayImage || videoBG}
                  isPlay={isPlay}
                  setIsPlay={setIsPlay}
                />
              </SwiperSlide>
            )}
          </>
          {listGallery?.map((img, index) => {
            return (
              <SwiperSlide key={index}>
                <div className='w-full h-full relative'>
                  <Image
                    src={img?.sourceUrl}
                    alt={img?.altText}
                    width={1000}
                    height={1000}
                    priority
                    className='w-full h-full object-cover select-none'
                  />
                  <div className='bg-[#00000033] w-full h-full absolute top-0 left-0'></div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>

        <div
          className='flex items-center justify-center gap-[1vw] px-[1.867vw] py-[0.53vw] rounded-[2px] bg-[#2e2e2e99] text-white absolute bottom-[4.8vw] right-[4.26vw] cursor-pointer text-[3.2vw] z-30'
          onClick={() => setOpenModal(true)}
        >
          <span>+{gallery?.length}</span>
          <Image
            src={img}
            alt='img'
            width={10}
            height={10}
            className='w-[2.66vw] h-[2.66vw]'
          />
        </div>
      </div>

      <div className='content'>
        <div className='pt-[6.4vw] pb-[8.53vw] border-b border-[#2e2e2e26] border-solid'>
          <div className='flex gap-[1vw] items-center opacity-80'>
            <Image
              src={locationIcon}
              alt='locationIcon'
              className='w-[3.2vw] h-[3.2vw]'
            />
            <span className='text-[3.2vw] leading-normal'>{location}</span>
          </div>

          <div className='w-full text-[4.8vw] font-optima font-semibold leading-[1.2] mt-[0.53vw] mb-[1vw]'>
            {title || ''}
          </div>
          <div className='flex gap-[1.1vw] items-center mb-[3.2vw]'>
            <span className='text-[3.2vw] font-medium leading-normal'>{rate || 5}</span>
            <span className='flex gap-[1.1vw]'>
              {starIcons.map((icon, index) => {
                return (
                  <Image
                    src={star}
                    key={index}
                    alt='star'
                    width={20}
                    height={20}
                    className='w-[3.2vw] h-[3.2vw]'
                  />
                )
              })}
            </span>
          </div>
          <div className='w-full text-[5.33vw] font-bold leading-normal'>${price}</div>
        </div>
      </div>

      <ModalCustom
        openModal={openModal}
        setOpenModal={setOpenModal}
        className='w-[100vw] h-[100vh]'
      >
        <Listimg
          data={gallery}
          video={video}
        />
      </ModalCustom>
    </section>
  )
}
