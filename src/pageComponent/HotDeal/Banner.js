'use client'
import Image from 'next/image'
import { useState } from 'react'
import plusImg from '@/assets/images/+.png'
import ModalCustom from '@/components/Common/ModalCustom'
import ListImg from './ListImg'
import TourDetailVideo from '../TourDetail/TourDetailVideo'

const Banner = ({ data = {} }) => {
  const [isPlay, setIsPlay] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const galleries = [...data?.gallery, ...data?.gallery, ...data?.gallery]
  const video = data?.video

  return (
    <div className='grid grid-cols-4 grid-rows-2 content gap-[1.25vw] overflow-hidden'>
      {video ? (
        <div className='w-full h-full col-span-2 row-span-2'>
          <TourDetailVideo
            vidLink={video?.uploadVideo?.mediaItemUrl}
            overlayImg={video?.overlayImage}
            isPlay={isPlay}
            setIsPlay={setIsPlay}
            className={{ button: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' }}
          />
        </div>
      ) : (
        // eslint-disable-next-line jsx-a11y/alt-text
        <Image
          src={galleries?.length > 0 && galleries[0]?.sourceUrl}
          alt={galleries?.length > 0 && galleries[0]?.altText}
          width={1000}
          height={1000}
          className={`w-full h-full col-span-2 row-span-2 min-w-[19.02625vw] min-h-[16.5vw] object-cover cursor-pointer rounded-lg`}
        />
      )}

      {galleries?.map((img, index) => {
        if (index >= 5 || index === 0) return
        if (index === 4 && galleries?.length > 5) {
          return (
            <div
              className='w-full h-full relative cursor-pointer'
              key={index}
            >
              <Image
                src={img?.sourceUrl}
                alt={img?.altText}
                width={1000}
                height={1000}
                className='w-full h-full cursor-pointer'
              />
              <div
                style={{ background: 'rgba(0, 0, 0, 0.2)' }}
                className='w-full h-full absolute top-0 left-0 z-[1] rounded-lg'
              ></div>
              <div
                onClick={() => setOpenModal(true)}
                className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-[#fff] text-center font-optima z-[2]'
              >
                <p className='flex items-center gap-[0.5rem] justify-center text-[4vw] font-semibold leading-[120%]'>
                  <span>
                    <Image
                      src={plusImg}
                      alt='Plus'
                      className='w-[1.25vw]'
                    />
                  </span>
                  <span>{video ? galleries?.length - 4 : galleries?.length - 5}</span>
                </p>
                <p className='text-[1.5vw] font-normal leading-[50%] underline'>Other photos</p>
              </div>
            </div>
          )
        } else {
          return (
            <Image
              src={img?.sourceUrl}
              alt={img?.altText}
              key={index}
              width={1000}
              height={1000}
              className={`min-w-[19.02625vw] min-h-[16.5vw] object-cover cursor-pointer rounded-lg`}
            />
          )
        }
      })}
      <ModalCustom
        openModal={openModal}
        setOpenModal={setOpenModal}
        className='w-[80vw] h-[80vh]'
      >
        <ListImg data={galleries} />
      </ModalCustom>
    </div>
  )
}

export default Banner
