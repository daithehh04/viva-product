'use client'

import { Box, useMediaQuery, useTheme } from '@mui/material'
import Image from 'next/image'
import scrollDown from '@/helpers/scrollDown'
import React, { useRef } from 'react'
function Banner({ data }) {
  const scrollDownRef = useRef()
  const theme = useTheme()
  const onlySmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const imageSrc = onlySmallScreen ? data?.mobileImage?.sourceUrl : data?.banner?.sourceUrl
  return (
    <Box
      sx={{
        height: {
          xs: '74.67vw',
          sm: '74.67vw',
          md: '100vh'
        }
      }}
    >
      <div className='relative h-[100%] flex justify-center items-center'>
        <Image alt='imageSrc' src={imageSrc} quality={100} fill className='w-[100%] h-screen object-cover z-[-1]' />
        <div className='flex flex-col justify-center text-center items-center absolute z-[10] max-md:pt-[22vw] '>
          <span className='text-center md:text-[1.94vw] text-[3.2vw] md:font-bold font-medium leading-normal text-[#fff] md:mb-[0.62vw] mb-[1.07vw] font-sans '>
            {data?.title}
          </span>
          <span className='md:w-[70vw] w-[67vw] font-optima text-[#fff] md:text-[4.5vw] text-[6.4vw] text-center font-semibold leading-[120%] uppercase '>
            {data?.heading}
          </span>
          <span className='md:w-[43vw] w-[66.27vw] text-center font-sans md:text-[1.5vw] text-[2.67vw] font-medium leading-[151%] text-[#fff] pb-[2.5vw]'>
            <span dangerouslySetInnerHTML={{ __html: data?.desc }} className='whitespace-pre-wrap white'></span>
          </span>

          <div
            onClick={() => scrollDown(scrollDownRef, 'start')}
            className='flex flex-col gap-[0.94vw] text-center items-center justify-center explore '
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='md:w-[1.375vw] md:h-[1.35vw] w-[3.2vw] h-[3.2vw] arrow-down '
              viewBox='0 0 24 25'
              fill='none'
            >
              <path d='M1 1L12 12L23 1' stroke='white' strokeWidth='2' />
              <path d='M1 12L12 23L23 12' stroke='white' strokeWidth='2' />
            </svg>
            <span className='md:block hidden text-center font-manrope text-[0.875vw] not-italic font-semibold tracking-[0.04375vw] uppercase text-[#fff] '>
              {data?.subdesc}
            </span>
          </div>
        </div>
        <div className='absolute bottom-[0] h-[12.4vw] left-[0] right-[0] md:flex hidden flex-shrink-0 bg-overlayBanner2'></div>
      </div>
      <div ref={scrollDownRef}></div>
    </Box>
  )
}

export default Banner
