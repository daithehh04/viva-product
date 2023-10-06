'use client'
import Image from 'next/image'
import bannerAbout from '@/assets/images/banner-about.png'
import arrowBottom from '@/assets/images/arrow-bottom.svg'
import scrollDown from '@/helpers/scrollDown'
import { useRef } from 'react'

export default function Banner({ data = {} }) {
  const outsideRef = useRef()

  return (
    <section className='about-banner w-full relative font-manrope'>
      <Image
        src={data?.backgroundImage?.sourceUrl || bannerAbout}
        alt={data?.backgroundImage?.altText || 'Who We Are'}
        width={1600}
        height={1000}
        className='w-full h-[74.4vw] md:h-[100vh]'
      />
      <div className='about-banner-mask w-full md:h-[12.4375vw] h-[7.2vw] absolute bottom-0 right-0'></div>

      <div className='absolute top-0 left-0 flex flex-col items-center w-full h-full justify-center text-white'>
        <h4 className='md:text-[1.9375vw] text-[3.2vw] font-medium '>{data?.heading}</h4>
        {/* use slug to change data of h2 el */}
        <h2 className='md:text-[4.5vw] text-[6.4vw] font-semibold text-justify uppercase leading-[120%] font-optima'>
          {data?.title}
        </h2>
        <span
          className='banner-sub-title md:w-[43.25vw] w-[68.267vw] text-center md:text-[1.5vw] text-[2.66vw] font-medium leading-normal md:flex md:flex-col'
          dangerouslySetInnerHTML={{ __html: `${data?.subTitle}` }}
        ></span>
        <div className='md:hidden flex text-[2.67vw] opacity-80 font-medium leading-[151%]'></div>
        <div
          className='flex flex-col justify-center items-center gap-[0.9375vw] mt-[2.5vw] cursor-pointer banner-btn-down select-none'
          onClick={() => scrollDown(outsideRef, 'start')}
        >
          <Image
            src={arrowBottom}
            width={22}
            height={22}
            alt=''
            className='arrow-down md:w-[1.375vw] md:h-[1.375vw] w-[4.26vw] h-[4.26vw]'
          />
          <div className='hidden md:flex text-center text-[0.875vw] font-semibold leading-[1.125vw] uppercase tracking-[0.75px]'>
            {data?.button}
          </div>
        </div>
      </div>
      <div ref={outsideRef}></div>
    </section>
  )
}
