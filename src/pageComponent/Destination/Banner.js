'use client'
import Box from '@mui/material/Box'
import Image from 'next/image'
import FilterTour from '@/components/Common/FilterTour'
import Button from '@/components/Common/Button'
import searchIcon from '@/assets/images/search-normal.svg'

function Banner({ data }) {
  return (
    <Box
      sx={{
        height: {
          xs: '74.4vh', // For extra-small (mobile) screens
          sm: '74.4vh', // For small screens
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
            <FilterTour />
            <Button className='btn-primary'>
              <Image
                src={searchIcon}
                width={50}
                height={50}
                alt='search'
                className='w-[1.25vw] h-[1.25vw]'
              />
              Search
            </Button>
          </div>
          <div className='flex flex-col gap-[0.94vw] text-center items-center justify-center md:mt-[2.19vw] mt-[4.8vw]'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='arrow-down md:w-[1.375vw] md:h-[1.35vw] w-[3.2vw] h-[3.2vw]'
              viewBox='0 0 24 25'
              fill='none'
            >
              <path
                d='M1 1L12 12L23 1'
                stroke='white'
                strokeWidth='2'
              />
              <path
                d='M1 12L12 23L23 12'
                stroke='white'
                strokeWidth='2'
              />
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
        {/* <div className='fixed bottom-[8vw] z-[1000] right-0 md:flex items-center h-12vw hidden'>
          <div
            id='filterTourBlock'
            className=' py-[0.75vw] absolute  right-[5vw] h-fit px-[1.19vw] bg-[#FFD220] inline-flex justify-center items-center gap-[0.625vw] rounded-tl-[3.0625vw] rounded-bl-[3.0625vw] '
          >
            <span className='text-[1vw] text-[#171717] font-normal leading-[130%]'>Filter tour</span>
            <div className='flex w-[1.375vw] h-[1.375vw] justify-center items-center'></div>
          </div>
          <div
            onMouseOver={handleShow}
            id='btn-search-animation'
            className='w-[4.5vw] h-[4.5vw] rounded-[50%] absolute right-[3.31vw] bg-[#FFD220] flex justify-center items-center flex-shrink-0'
          >
            <svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 22 22' fill='none'>
              <path
                d='M10.5413 19.2502C15.3508 19.2502 19.2497 15.3513 19.2497 10.5418C19.2497 5.73235 15.3508 1.8335 10.5413 1.8335C5.73186 1.8335 1.83301 5.73235 1.83301 10.5418C1.83301 15.3513 5.73186 19.2502 10.5413 19.2502Z'
                stroke='#171717'
                strokeWidth='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M20.1663 20.1668L18.333 18.3335'
                stroke='#171717'
                strokeWidth='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </div>
        </div>
      */}
      </div>
    </Box>
  )
}

export default Banner
