'use client'
import Box from '@mui/material/Box'
import Image from 'next/image'
import { useRef } from 'react'
import scrollDown from '@/helpers/scrollDown'
import FilterBanner from './FilterBanner'

function Banner({ data, dataFilter, slug }) {
  const scrollRef = useRef()
  return (
    <Box
      sx={{
        height: {
          xs: '74.4vw', // For extra-small (mobile) screens
          sm: '74.4vw', // For small screens
          md: '100vh' // For medium screens
        }
      }}
    >
      <div className='relative h-[100%] flex justify-center items-center bannerOurtour'>
        <div className='flex flex-col justify-center text-center items-center absolute z-[10] '>
          <span className='text-center md:text-[1.94vw] text-[3.2vw] md:font-bold font-medium leading-normal text-[#fff] md:mb-[0.62vw] mb-[1.07vw] font-sans '>
            {data?.explore}
          </span>
          <span className='font-optima text-[#fff] md:text-[4.5vw] text-[6.4vw] text-justify font-semibold leading-[120%] uppercase '>
            {data?.nameCountry}
          </span>
          <span className='md:w-[43vw] w-[66.27vw] text-center font-sans md:text-[1.5vw] text-[2.67vw] font-medium leading-[151%] text-[#fff] '>
            {data?.text}
          </span>

          <div className='filter-tour hidden md:flex gap-x-[1.75vw] ml-auto mr-auto mt-[1.94vw] bg-white w-max py-[1.5vw] pl-[2.87vw] pr-[2vw] rounded-[1.125vw]'>
            <FilterBanner dataFilter={dataFilter} slug={slug} />
          </div>
          <div
            onClick={() => scrollDown(scrollRef, 'start')}
            className='flex flex-col gap-[0.94vw] text-center items-center justify-center md:mt-[2.19vw] mt-[4.8vw]'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='arrow-down md:w-[1.375vw] md:h-[1.35vw] w-[3.2vw] h-[3.2vw]'
              viewBox='0 0 24 25'
              fill='none'
            >
              <path d='M1 1L12 12L23 1' stroke='white' strokeWidth='2' />
              <path d='M1 12L12 23L23 12' stroke='white' strokeWidth='2' />
            </svg>
            <span className='md:block hidden text-center font-manrope text-[0.875vw] not-italic font-semibold tracking-[0.04375vw] uppercase text-[#fff] '>
              Explore now
            </span>
          </div>
        </div>
        <Image
          src={data?.img?.sourceUrl}
          width={1500}
          height={1000}
          alt='banner'
          className='absolute inset-0 object-cover w-full h-full z-[-1]'
        />

        {/* animation button filter tour */}
        <div
          id='explore'
          className='absolute bottom-0 h-[12.4vw] w-full hidden md:flex flex-shrink-0 items-center  bg-overlayBanner2 py-[4vw] pr-[3.31vw] '
        ></div>
      </div>
      <div ref={scrollRef}></div>
    </Box>
  )
}

export default Banner
