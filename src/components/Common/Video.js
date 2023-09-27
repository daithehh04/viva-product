'use client'
import { useRef, useState } from 'react'
import Image from 'next/image'
import playBtn from '@/assets/images/about/playBtn.svg'

export default function AboutVideo({ data = {} }) {
  const imageRef = useRef()
  const videoRef = useRef()

  const [isPlay, setIsPlay] = useState(false)
  return (
    <section className='relative w-full'>
      {/* video for PC */}
      <video
        controls={isPlay}
        className='md:block hidden w-full md:h-[53.125vw] about-video z-0 object-fill'
        width={2000}
        height={1000}
        ref={videoRef}
        muted
      >
        <source src={data?.video?.mediaItemUrl} type={data?.video?.mimeType} className=' w-full h-full' />
      </video>
      {/* video for mobile */}

      <video
        controls={isPlay}
        className='md:hidden w-full h-[80vh] about-video z-0 object-fill'
        width={2000}
        height={1000}
        ref={videoRef}
        muted
      >
        <source
          src={data?.videoMb?.mediaItemUrl || data?.videomb?.mediaItemUrl}
          type={data?.videoMb?.mimeType || data?.videomb?.mimeType}
          className='w-full h-full'
        />
      </video>
      <div ref={imageRef} className={`${isPlay && 'hidden'} absolute top-0 left-0 z-10 w-full h-full`}>
        <Image
          src={data?.thumbnail?.sourceUrl}
          alt={data?.thumbnail?.altText}
          width={1000}
          height={1000}
          priority
          className='md:block hidden object-cover w-full h-full'
        />

        <Image
          src={data?.thumbnailMb?.sourceUrl || data?.thumbnailmb?.sourceUrl}
          alt={data?.thumbnailMb?.altText || data?.thumbnailmb?.altText}
          width={1000}
          height={1000}
          priority
          className='md:hidden object-cover w-full h-full'
        />
        <div
          className='w-full h-full absolute top-0 left-0 z-[1]'
          style={{
            background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 45.44%, rgba(0, 0, 0, 0.35) 69.74%)'
          }}
        ></div>
        <div className='absolute bottom-[8.125vw] left-[8.125vw] z-10 flex gap-[2.3125vw] items-center'>
          <Image
            src={playBtn}
            alt=''
            className='md:w-[8.75vw] w-[15.2vw] md:h-[10.25vw] h-[17.8vw] cursor-pointer'
            onClick={() => {
              videoRef.current?.play()
              setIsPlay(true)
            }}
          />
          <div className='md:w-[31.9375vw] w-[49.87vw] font-optima md:text-[4vw] text-[6.4vw] leading-[110%] font-semibold text-white'>
            <div>{data?.label?.line1}</div>
            <div>{data?.label?.line2}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
