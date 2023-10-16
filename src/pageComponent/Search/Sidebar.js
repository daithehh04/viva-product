'use client'
import locationIcon from '@/assets/images/search/location.svg'
import moneyIcon from '@/assets/images/search/money.svg'
import { Button, Checkbox, capitalize, useMediaQuery } from '@mui/material'
import RangeCustom from '@/components/tag/RangeCustom'
import OptionCustomer from '@/components/tag/OptionCustomer'
import OptionBudget from '@/components/tag/OptionBuget'
import { useEffect, useRef, useState } from 'react'
import theme from '@/components/ThemeRegistry/theme'

export default function Sidebar({
  searchInfo,
  params,
  travelStylesList,
  dataMenuCountry,
  dataTaxonomiesBudget,
  onDay,
  onDestination,
  onTravelStyle,
  onBudget,
  isOpenModal
}) {
  const [travelStyle, setTravelStyle] = useState([])
  const refStyle = useRef()
  function handleCheck(e) {
    const value = e.target.value
    if (e.target.checked) {
      setTravelStyle([...travelStyle, value])
      onTravelStyle([...travelStyle, value])
    } else {
      var rs = travelStyle.filter((item) => item !== value)
      setTravelStyle(rs)
      onTravelStyle(rs)
    }
  }
  

  useEffect(() => {
    const list = refStyle?.current?.children
    Array.from(list).forEach((item) => {
      const value = item.querySelector('label').getAttribute('for')
      if (value === params.style) {
        setTravelStyle([value])
      }
    })
  }, [params.style])
  const onlySmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <div className={`w-[20vw] flex flex-col max-md:overflow-y-scroll max-md:h-[70vh]
    max-md:w-auto max-md:rounded-t-[2vw] max-md:pt-[11.46vw]`}>
      <h2 className='text-[1.375vw] leading-[1.5125vw] font-medium mb-[1vw] max-md:hidden'>{searchInfo?.navbar?.selectYourInformation}</h2>
      <div
        className='search-option mb-[1.88vw] pt-[1.5vw] pb-[2vw] w-full px-[1.8vw] border 
        max-md:px-[4.26vw] max-md:mx-[4.26vw] max-md:pt-[6.4vw] max-md:rounded-[2.66vw] max-md:w-auto max-md:pb-[5.2vw] max-md:mb-[8vw]'
        style={{ boxShadow: '0px 0px 30px 0px rgba(0, 0, 0, 0.08)' }}
      >
        <h3 className='flex mb-[0.69vw] font-bold text-[1.25vw] leading-[1.64288vw] max-md:text-[5.33vw] max-md:leading-normal'>{
          searchInfo?.navbar?.duration?.title
        }</h3>
        <div className='flex justify-between mb-[0.94vw] max-md:mb-[2.93vw]'>
          <p className='text-[0.875vw] max-md:text-[3.73vw]'>
            <span className='font-bold'>{searchInfo?.navbar?.duration?.min}</span>
            <span className='font-normal'>{" "}{searchInfo?.navbar?.duration?.minValue}</span>
          </p>
          <p className='text-[0.875vw] leading-[1.4375vw] max-md:text-[3.73vw]'>
            <span className='font-bold'>{searchInfo?.navbar?.duration?.max}</span>
            <span className='font-normal'>{" "}{searchInfo?.navbar?.duration?.maxValue}</span>
          </p>
        </div>
        <RangeCustom isOpenModal={isOpenModal} day={params.day} onDay={(data) => onDay(data)} />
      </div>
      <div
        className='search-option px-[1.8vw] mb-[1.88vw] w-full border pb-[2vw] pt-[1.5vw] 
        max-md:mx-[4.26vw] max-md:pt-[7.46vw] max-md:px-[4.26vw] max-md:rounded-[2.66vw] max-md:w-auto max-md:mb-[8vw] max-md:pb-[8.53vw]'
        style={{ boxShadow: '0px 0px 30px 0px rgba(0, 0, 0, 0.08)' }}
      >
        <h3 className='mb-[1.32vw] text-[1.25vw] font-bold max-md:text-[5.33vw] max-md:mb-[5.6vw]'>{searchInfo?.navbar?.travelStyles}</h3>
        <div className='flex flex-col justify-center gap-[0.75vw] max-md:gap-[3.2vw]' ref={refStyle}>
          {travelStylesList?.data?.allTourStyle?.nodes?.map((item) => (
            <div className='flex items-center justify-between' key={item?.id}>
              <div className='flex gap-[0.4375vw] items-center cursor-pointer max-md:gap-[1.86vw]'>
                <Checkbox
                  checked={travelStyle.includes(item?.slug)}
                  value={item?.slug}
                  color='info'
                  id={item?.slug}
                  sx={{
                    color: '#C7D0D9',
                    '& .MuiSvgIcon-root': { fontSize: onlySmallScreen ? '5.5vw' : '1.25vw' },
                    '&.Mui-checked': {
                      color: '#228B22'
                    }
                  }}
                  className='w-[1.25vw] h-[1.25vw]'
                  onChange={handleCheck}
                />
                <label className='text-[0.875vw] cursor-pointer max-md:text-[3.73vw]' for={item?.slug}>
                  {item?.name}
                </label>
              </div>
              <p className='text-[0.875vw] max-md:text-[3.73vw]'>{item?.quantity}</p>
            </div>
          ))}
        </div>
      </div>
      <div
        className='search-option pt-[1.88vw] pb-[1.72vw] px-[1.25vw] 
        max-md:px-[4.26vw] max-md:mx-[4.26vw] max-md:rounded-[2.66vw] max-md:pt-[8vw] max-md:mb-[8vw]'
        style={{ boxShadow: '0px 0px 30px 0px rgba(0, 0, 0, 0.08)' }}
      >
        <h3 className='font-medium leading-[1.375vw] mb-[1.05vw] text-[1.25vw] 
        max-md:text-[5.33vw] max-md:leading-normal max-md:mb-[4.53vw]'>{searchInfo?.navbar?.selectYourInformation}</h3>
        <div className='mb-[0.94vw] max-md:mb-[4vw]'>
          <OptionCustomer
            onSelect={(data) => onDestination(data)}
            icon={locationIcon}
            list={dataMenuCountry?.data?.allCountries?.nodes}
            defaultValue={params?.country}
          />
        </div>
        <div className='mb-[0.94vw] max-md:mb-[7.29vw]'>
          <OptionBudget 
            onSelect={(data) => onBudget(data)}
            icon={moneyIcon}
            defaultValue={params?.budget}
            list={dataTaxonomiesBudget?.data?.allBudget?.nodes}
          />
        </div>
      </div>
    </div>
  )
}
