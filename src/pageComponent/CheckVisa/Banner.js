'use client'
import Image from 'next/image'
import { useState } from 'react'
import { createTheme, FormControl, MenuItem, Select, useMediaQuery } from '@mui/material'
import { Button } from '@mui/base'
import { CHECK_VISA } from '@/graphql/checkVisa/queries'
import { useQuery } from '@apollo/client'
import { useData } from './DataContext'
function Banner({ data, dataFilter, lang }) {
  const [nationality, setNationality] = useState('')
  const [country, setCountry] = useState('')
  const { dataB, setDataB } = useData(null)

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

  const dataVisa = useQuery(CHECK_VISA, {
    variables: {
      language: lang?.toUpperCase(),
      countryFrom: nationality,
      countryTo: country
    }
  })
  if (dataVisa) {
    var dataCheckVisa = dataVisa?.data?.allVisa?.nodes
  }

  const handleCheck = function () {
    if (dataCheckVisa) {
      const isFreeVisa = dataCheckVisa[0]?.checkVisa?.freeVisa
      if (isFreeVisa?.toLowerCase() === 'no') {
        var contentVisa = dataCheckVisa[0]?.checkVisa?.content
      }
      if (isFreeVisa?.toLowerCase() === 'yes') {
        var descVisa = dataCheckVisa[0]?.checkVisa?.desc
        var titleVisa = dataCheckVisa[0]?.checkVisa?.title
      }
      const data = {
        isFreeVisa,
        contentVisa,
        descVisa,
        titleVisa
      }
      setDataB(data)
    }
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
      <div className='bg-overlayBanner2 absolute w-full md:h-[12.4375vw] h-[26.13333vw] bottom-0 z-[3]'></div>
      <div className='flex flex-col relative z-10 md:pl-[8.13vw] md:pt-0 pt-[27.73vw] md:pr-0 px-[4.27vw]'>
        <h2 className='font-optima text-white md:text-[2.875vw] text-[5.86667vw] capitalize font-semibold leading-[120%] md:w-[37vw] mb-[6.13vw] md:mb-[2.5vw]'>
          {dataBanner?.heading}
        </h2>

        <p className='text-white xl:text-[1vw] md:text-[2.5vw] text-[3.73333vw] leading-[1.5] md:mb-[1vw] mb-[2.13333vw]'>
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
          <Select value={nationality} onChange={handleChangeNation} className='text-white' displayEmpty>
            <MenuItem value=''>
              <span className='xl:text-[1vw] md:text-[1.5vw] text-[3.73333vw] leading-[1.5] '>Country</span>
            </MenuItem>
            {dataFilter?.countryFrom?.map((item, index) => (
              <MenuItem value={item?.slug} key={index}>
                <span className='xl:text-[1vw] md:text-[1.5vw] text-[3.73333vw] leading-[1.5] '>{item?.name}</span>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <p className='text-white xl:text-[1vw] md:text-[1.5vw] text-[3.73333vw] leading-[1.5]  leading-[1.5] md:mb-[1vw] md:mt-[1.5vw] mb-[2.13333vw] mt-[6.4vw]'>
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
          <Select onChange={handleChangeCountry} value={country} className='text-white' displayEmpty>
            <MenuItem value=''>
              <span className='xl:text-[1vw] md:text-[1.5vw] text-[3.73333vw] leading-[1.5]  leading-[1.5] '>
                Country
              </span>
            </MenuItem>
            {dataFilter?.countryTo?.map((item, index) => (
              <MenuItem value={item?.slug} key={index}>
                <span className='xl:text-[1vw] md:text-[1.5vw] text-[3.73333vw] leading-[1.5]  leading-[1.5] '>
                  {item?.name}
                </span>
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button
          className='bg-primaryColor md:rounded-[0.75vw] rounded-[2.13333vw] w-fit md:mt-[3.13vw] mt-[8.53vw] px-[7.73vw] py-[3.2vw] md:px-[2.88vw] md:py-[1.25vw]'
          onClick={handleCheck}
        >
          <span className='md:text-[1.4vw] xl:text-[1vw]  text-[3.2vw] font-medium text-textColor '>
            {dataBanner?.button}
          </span>
        </Button>
      </div>
    </div>
  )
}

export default Banner
