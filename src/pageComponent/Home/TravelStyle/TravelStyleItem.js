'use client'

import icon from '@/assets/images/icon-style.svg'
import Image from 'next/image'
import Link from 'next/link'

function TravelStyleItem({ data, lang }) {
  return (
    <div className='relative w-[26.25vw] travel-style z-10'>
      <Image
        src={data?.banner?.travelStyleInfo?.imageHomePage?.sourceUrl}
        width={500}
        height={500}
        alt={data?.banner?.travelStyleInfo?.image?.imageHomePage?.altText}
        className='h-[30.0625vw] w-full object-cover rounded-[1vw]'
      />
      <div className='info absolute top-0 pt-[2vw] px-[2.5vw] z-10'>
        <h3 className='text-white text-[2.125vw] font-[600] leading-[1.2] capitalize'>
          {data?.banner?.travelStyleInfo?.travelStyleName}
        </h3>
        <p
          dangerouslySetInnerHTML={{ __html: data?.banner?.travelStyleInfo?.textHomePage }}
          className='text-white desc text-[1.125vw] font-[500] mt-[0.75vw] leading-normal'
        ></p>
      </div>
      <div className='btn absolute bottom-0 right-[1.81vw] pb-[1.81vw] z-10'>
        <Image
          src={icon}
          width={50}
          height={50}
          alt='img'
          className='absolute w-[2.825vw] left-[-2.25vw] top-[-0.5vw]'
        />
        <Link
          href={`/${lang}/travel-style/${data?.slug}`}
          className='w-[5.9375vw] h-[5.9375vw] rounded-full bg-primaryColor text-textColor text-[0.875vw] font-[500] flex items-center justify-center'
        >
          View more
        </Link>
      </div>
      <div className='overlay-travel'></div>
    </div>
  )
}

export default TravelStyleItem
