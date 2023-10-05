'use client'
import Image from 'next/image'
import TourDetailVideo from '../TourDetail/TourDetailVideo'
import videoBG from '@/assets/images/about/videoBG.png'
import { useState } from 'react'

export default function Listimg({ data, video }) {
  const [isPlay, setIsPlay] = useState(false)
  return (
    <div className='md:px-[2vw] px-[5vw] md:py-[2vw] py-[8vw] w-full h-full bg-white border-none'>
      <div className='max-h-full overflow-y-scroll hidden-scroll'>
        <div className='w-full h-full md:flex flex-wrap grid grid-rows-3 grid-cols-2 gap-[4.27vw]'>
          <TourDetailVideo
            className={{
              wrapper: 'h-full col-span-2 rounded-xl',
              video: 'h-full',
              button: 'w-[9.6vw] absolute h-[11.2vw] bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 z-10'
            }}
            vidLink={video?.uploadVideo?.mediaItemUrl}
            overlayImg={video?.overlayImage || videoBG}
            isPlay={isPlay}
            setIsPlay={setIsPlay}
          />
          {data?.map((item, index) => (
            <Image
              key={index}
              src={item?.sourceUrl}
              alt={item?.altText}
              width={1000}
              height={1000}
              className='md:w-[46%] md:h-[20vw] w-full h-full object-cover rounded-lg'
            />
          ))}
        </div>
      </div>
    </div>
  )
}
