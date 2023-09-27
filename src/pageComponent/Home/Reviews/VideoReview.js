'use client'
import { useEffect, useRef, useState } from 'react'
import img from '@/assets/images/review.png'
import avatar from '@/assets/images/avatar.png'
import locationIcon from '@/assets/images/route-square.svg'
import calendarIcon from '@/assets/images/calendarY.svg'
import quote from '@/assets/images/quote-review.png'
import Image from 'next/image'
import playIcon from '@/assets/images/play-video.png'

const defaultVideo = 'https://viva-cms.okhub.tech/wp-content/uploads/2023/09/river_-_40012-1080p-2.mp4'
function VideoReview({ data, videoInfo }) {
  const [isPlay, setIsPlay] = useState(false)
  const videoRef = useRef()
  useEffect(() => {
    if (videoRef.current) {
      isPlay ? videoRef.current.play() : videoRef.current.pause()
    }
  }, [isPlay])
  return (
    <div
      className='relative w-[35.1875vw] h-[47.5vw] rounded-[1vw] bg-[#ccc]'
      onClick={() => setIsPlay(!isPlay)}
    >
      <video
        width='100%'
        controls={isPlay}
        ref={videoRef}
        className='w-full h-full'
      >
        <source
          src={defaultVideo}
          type='video/mp4'
        />
      </video>
      <Image
        src={img}
        width={500}
        height={500}
        alt='img'
        className={`rounded-[1vw] w-full h-full object-cover absolute z-10 inset-0 ${isPlay ? 'hidden' : ''}`}
      />
      <div className={`top absolute top-0 pt-[1.5vw] pl-[1.5vw] pr-[2.38vw] z-30 ${isPlay ? 'hidden' : ''}`}>
        <h3 className='text-white text-[1.25vw] font-bold leading-[1.3] tracking-tight'>{videoInfo?.title}</h3>
        <div className='flex items-center gap-x-[1.63vw] mt-[1vw]'>
          <div className='flex items-center gap-x-[0.25vw]'>
            <Image
              src={locationIcon}
              width={50}
              height={50}
              alt='img'
              className='w-[1vw] h-[1vw] object-cover'
            />
            <span className='text-white text-[0.875vw] leading-normal'>{videoInfo?.location}</span>
          </div>
          <div className='flex items-center gap-x-[0.25vw]'>
            <Image
              src={calendarIcon}
              width={50}
              height={50}
              alt='img'
              className='w-[1vw] h-[1vw] object-cover'
            />
            <span className='text-white text-[0.875vw] leading-normal'>{videoInfo?.time}</span>
          </div>
        </div>
      </div>
      <div className={`bottom absolute bottom-0 px-[1.5vw] pb-[1.88vw] z-30 ${isPlay ? 'hidden' : ''}`}>
        <div className='flex items-center gap-[0.75vw]'>
          <div className='border-[2px] border-white border-solid w-[3.5vw] h-[3.5vw] rounded-full'>
            <Image
              src={videoInfo?.authorInformation?.thumbnail?.sourceUrl}
              width={100}
              height={100}
              alt='avatar'
              className='object-cover w-full h-full rounded-full'
            />
          </div>

          <div className='flex flex-col'>
            <span className='text-[1.125vw] font-bold capitalize text-white leading-normal'>
              {videoInfo?.authorInformation?.country}
            </span>
            <span className='text-white text-[0.875vw] leading-normal'>{videoInfo?.authorInformation?.name} </span>
          </div>
        </div>
        <div className='flex mt-[1.25vw] ml-[-1vw]'>
          <Image
            src={quote}
            width={100}
            height={100}
            alt='quote'
            className='w-[2.75vw] h-[2.75vw] object-cover mt-[-0.95vw]'
          />
          <p className='text-white text-[1vw] font-[500] leading-normal ml-[-1.25vw]'>{videoInfo?.content}</p>
        </div>
      </div>
      <div className={`${isPlay ? 'hidden' : ''}`}>
        <div className='absolute top-0 left-0 right-0 overlayReview-top h-[13.6875vw] rounded-[1vw] z-20'></div>
        <div className='absolute inset-0 overlayReview-bottom rounded-[1vw] z-20'></div>
      </div>
      <Image
        src={playIcon}
        width={100}
        height={100}
        alt='img'
        className={`w-[4vw] h-[4.75vw] object-cover absolute z-50 bottom-[50%] left-[50%] -translate-x-1/2 cursor-pointer ${
          isPlay ? 'hidden' : ''
        }`}
        onClick={() => setIsPlay(true)}
      />
    </div>
  )
}

export default VideoReview
