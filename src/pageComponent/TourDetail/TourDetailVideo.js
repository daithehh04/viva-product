'use client'
import Image from 'next/image'
import playBtn from '@/assets/images/about/playBtn.svg'
import { useRef } from 'react'

export default function TourDetailVideo({ className, vidLink, overlayImg, isPlay, setIsPlay }) {
  const imageRef = useRef()
  const videoRef = useRef()
  return (
    <div className={`${className?.wrapper || ''} w-full h-full relative`}>
      <video
        controls={isPlay}
        className={`object-fill w-full h-full ${className?.video || ''}`}
        width={2000}
        height={1000}
        ref={videoRef}
        onEnded={() => setIsPlay(false)}
      >
        <source
          type='video/mp4'
          className='w-full h-full'
          src={vidLink}
        />
      </video>

      <div
        ref={imageRef}
        className={`${isPlay ? 'hidden' : ''} absolute top-0 left-0 w-full h-full`}
      >
        <Image
          src={overlayImg?.sourceUrl}
          alt={overlayImg?.altText}
          width={2000}
          height={1000}
          className={`${className?.image || ''} object-cover w-full h-full`}
        />

        <Image
          src={playBtn}
          alt='playBtn'
          className={`cursor-pointer absolute z-[30] ${className?.button || ''}`}
          onClick={() => {
            videoRef.current?.play()
            setIsPlay(true)
          }}
        />
        <div className='bg-[#00000033] w-full h-full absolute top-0 left-0 z-[20]'></div>
      </div>
    </div>
  )
}
