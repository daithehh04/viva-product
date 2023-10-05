'use client'
import { useRef, useState } from 'react'
import Image from 'next/image'
import playBtn from '@/assets/images/about/playBtn.svg'

export default function AboutVideo({ data = {} }) {
  const imageRef = useRef()
  const videoRef = useRef()

  const [isPlay, setIsPlay] = useState(false)
  return (
    <section className='relative videoReview w-full'>
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
          {/* <Image
            src={playBtn}
            alt=''
            className='md:w-[8.75vw] w-[15.2vw] md:h-[10.25vw] h-[17.8vw] cursor-pointer btnPauseVid'
            onClick={() => {
              videoRef.current?.play()
              setIsPlay(true)
            }}
          /> */}
          <svg
            className='md:w-[8.75vw] w-[15.2vw] md:h-[10.25vw] h-[17.8vw] cursor-pointer btnPauseVid'
            onClick={() => {
              videoRef.current?.play()
              setIsPlay(true)
            }}
            xmlns='http://www.w3.org/2000/svg'
            width='140'
            height='164'
            viewBox='0 0 140 164'
            fill='none'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M140 24.0345C125.16 9.18528 104.652 0 82 0C36.7127 0 0 36.7127 0 82C0 127.287 36.7127 164 82 164C104.652 164 125.16 154.815 140 139.965V138.542C125.288 153.631 104.738 163 82 163C37.2649 163 1 126.735 1 82C1 37.2649 37.2649 1 82 1C104.738 1 125.288 10.3693 140 25.4579V24.0345Z'
              fill='white'
            />
            <path
              d='M73.16 64.882C69.7581 62.8134 67 64.508 67 68.6639V99.3331C67 103.493 69.7581 105.186 73.16 103.119L98.4477 87.7457C101.851 85.6764 101.851 82.3238 98.4477 80.255L73.16 64.882Z'
              fill='white'
            />
          </svg>
          <div className='md:w-[31.9375vw] w-[49.87vw] font-optima md:text-[4vw] text-[6.4vw] leading-[110%] font-semibold text-white'>
            <div>{data?.label?.line1}</div>
            <div>{data?.label?.line2}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
