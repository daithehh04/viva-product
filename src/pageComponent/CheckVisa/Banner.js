'use client'
import Image from 'next/image'
import { useState } from 'react'
import banner from '@/assets/images/checkVisa_Banner.png'
import bannerMobile from '@/assets/images/checkVisa_Banner_mobile.png'
import useBanner from '@/assets/images/checkVisa_UserBanner.png'
import { createTheme, FormControl, MenuItem, Select, useMediaQuery } from '@mui/material'
import { Button } from '@mui/base'
function Banner({ data }) {
  const [nationality, setNationality] = useState('')
  const [country, setCountry] = useState('')

  const theme = createTheme({
    breakpoints: {
      values: {
        sm: 768
      }
    }
  })
  const onlySmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const handleChangeNation = (e) => {
    setNationality(e.target.value)
  }
  const handleChangeCountry = (e) => {
    setCountry(e.target.value)
  }

  const dataBanner = data?.checkvisa?.banner

  return (
    <div className='md:h-[100vh] h-[216.53333vw] visaBanner relative flex md:items-center'>
      <Image
        alt='banner'
        src={onlySmallScreen ? dataBanner?.imagebannermobile?.sourceUrl : dataBanner?.imagebanner?.sourceUrl}
        width={1000}
        height={1000}
        quality={100}
        className='h-full absolute w-full z-[1] object-cover '
      />
      <Image
        alt='banner'
        src={dataBanner?.imageuser?.sourceUrl}
        quality={100}
        width={200}
        height={200}
        className='md:w-[31.125vw] md:h-[41.875vw] w-[60.26667vw] h-[81.6vw] object-cover absolute bottom-0 md:right-[8vw] right-0 z-[3] '
      />
      <div className='bg-overlayBanner absolute right-0 h-[100vh] w-[47.93vw] top-0 z-[2] md:block hidden'></div>
      <div className='bg-overlayBanner2 absolute w-full md:h-[12.4375vw] h-[26.13333vw] bottom-0 z-[2]'></div>
      <div className='flex flex-col relative z-10 md:pl-[8.13vw] md:pt-0 pt-[27.73vw] md:pr-0 px-[4.27vw]'>
        <h2 className='font-optima text-white md:text-[2.875vw] text-[5.86667vw] capitalize font-semibold leading-[120%] md:w-[37vw] mb-[6.13vw] md:mb-[2.5vw]'>
          {dataBanner?.heading}
        </h2>

        <p className='text-white md:text-[1vw] text-[3.73333vw] leading-[1.5] md:mb-[1vw] mb-[2.13333vw]'>
          {dataBanner?.nationalchoice}
        </p>
        <FormControl
          inputprops={{ 'aria-label': 'Without label' }}
          sx={{
            maxWidth: '35.875vw',
            [theme.breakpoints.down('sm')]: {
              maxWidth: '100%'
            },
            '&.MuiFormControl-root': {
              margin: 0
            }
          }}
        >
          <Select
            value={nationality}
            onChange={handleChangeNation}
            className='text-white'
            displayEmpty
          >
            <MenuItem value=''>
              <span className='md:text-[1vw] text-[3.73333vw] leading-[1.5] '>VietNam-VN</span>
            </MenuItem>
            <MenuItem value='ThaiLand - TL'>
              <span className='md:text-[1vw] text-[3.73333vw] leading-[1.5] '>ThaiLand-TL</span>
            </MenuItem>
            <MenuItem value='Myanmar-MY'>
              <span className='md:text-[1vw] text-[3.73333vw] leading-[1.5] '>Myanmar-MY</span>
            </MenuItem>
            <MenuItem value='Indonesia-ID'>
              <span className='md:text-[1vw] text-[3.73333vw] leading-[1.5] '>Indonesia-ID</span>
            </MenuItem>
          </Select>
        </FormControl>
        <p className='text-white md:text-[1vw] text-[3.73333vw] leading-[1.5] md:mb-[1vw] md:mt-[1.5vw] mb-[2.13333vw] mt-[6.4vw]'>
          {dataBanner?.countrychoice}
        </p>
        <FormControl
          inputprops={{ 'aria-label': 'Without label' }}
          sx={{
            maxWidth: '35.875vw',
            [theme.breakpoints.down('sm')]: {
              maxWidth: '100%'
            },
            '&.MuiFormControl-root': {
              margin: 0
            }
          }}
        >
          <Select
            onChange={handleChangeCountry}
            value={country}
            className='text-white'
            displayEmpty
          >
            <MenuItem value=''>
              <span className='md:text-[1vw] text-[3.73333vw] leading-[1.5] '>VietNam-VN</span>
            </MenuItem>
            <MenuItem value='ThaiLand'>
              <span className='md:text-[1vw] text-[3.73333vw] leading-[1.5] '>ThaiLand-TL</span>
            </MenuItem>
            <MenuItem value='Indo'>
              <span className='md:text-[1vw] text-[3.73333vw] leading-[1.5] '>Indonesia-ID</span>
            </MenuItem>
            <MenuItem value='Sing'>
              <span className='md:text-[1vw] text-[3.73333vw] leading-[1.5] '>Singapor-SP</span>
            </MenuItem>
          </Select>
        </FormControl>

        <Button className='bg-primaryColor md:rounded-[0.75vw] rounded-[2.13333vw] w-fit md:mt-[3.13vw] mt-[8.53vw] px-[7.73vw] py-[3.2vw] md:px-[2.88vw] md:py-[1.25vw]'>
          <span className='md:text-[1vw] text-[3.2vw] font-medium text-textColor '>Check Visa Now</span>
        </Button>
      </div>
    </div>
  )
}

export default Banner
