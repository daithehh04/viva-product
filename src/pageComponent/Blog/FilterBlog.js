'use client'
import locationIcon from '@/assets/images/route-square-gr.svg'
import styleIcon from '@/assets/images/style-travel.svg'
import durationIcon from '@/assets/images/duration.svg'
import Image from 'next/image'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useState } from 'react'

function FilterBlog({ handleDes, handleTopic, handleCate, metaTopic, metaDestination, metaCategories }) {
  const [destination, SetDestination] = useState('')
  const [topic, SetTopic] = useState('')
  const [category, SetCategory] = useState('')

  const handleChangeDestination = (event) => {
    SetDestination(event.target.value)
    handleDes(event.target.value)
  }
  const handleChangeTopic = (event) => {
    SetTopic(event.target.value)
    handleTopic(event.target.value)
  }
  const handleChangeCategory = (event) => {
    SetCategory(event.target.value)
    handleCate(event.target.value)
  }

  return (
    <div className='flex md:gap-[] gap-[3.2vw]  md:justify-normal justify-end md:mt-[3.5vw] ourBlog relative'>
      <div className='background'></div>
      <div className='flex flex-col select md:rounded-0 rounded-[1.06667vw] flex-shrink-0 md:w-auto w-[44.53333vw]'>
        <div className='bgFilterMobile'></div>
        <span className='text-[#9B9B9B] uppercase text-[0.875vw] md:block hidden'>
          {metaDestination && metaDestination[0]?.taxonomyName}
        </span>
        <div className='flex items-center select-mobile'>
          <Image
            src={locationIcon}
            width={100}
            height={100}
            alt='location'
            className='md:w-[1.875vw] md:h-[1.875vw] w-[3.73333vw] h-[3.73333vw] object-cover'
          />
          <FormControl
            sx={{
              minWidth: '8.75vw',
              '&.MuiFormControl-root': {
                margin: 0
              }
            }}
          >
            <Select
              value={destination}
              onChange={handleChangeDestination}
              displayEmpty
              inputprops={{ 'aria-label': 'Without label' }}
              sx={{
                height: '2.5rem',
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none'
                },
                '& .MuiSvgIcon-root': {
                  right: 0
                },
                '& .MuiSelect-outlined': {
                  padding: 0,
                  paddingLeft: '0.62vw'
                }
              }}
            >
              <MenuItem value=''>
                <span className='md:text-[1.0625vw] md:font-[500] leading-[130%] text-textColor text-[2.93333vw] font-[400]'>
                  Country
                </span>
              </MenuItem>
              {metaDestination?.map((destination, index) => (
                <MenuItem key={index} value={destination?.slug}>
                  <span className='md:text-[1.0625vw] md:font-[500] leading-[130%] text-textColor text-[2.93333vw] font-[400]'>
                    {destination?.name}
                  </span>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
      <div className='flex flex-col select md:rounded-0 rounded-[1.06667vw] flex-shrink-0 md:w-auto w-[44.53333vw] pl-0 md:pl-[1.87vw]'>
        <div className='bgFilterMobile'></div>
        <span className='text-[#9B9B9B] uppercase text-[0.875vw] md:block hidden '>
          {metaTopic && metaTopic[0]?.taxonomyName}
        </span>
        <div className='flex items-center select-mobile'>
          <Image
            src={styleIcon}
            width={100}
            height={100}
            alt='style'
            className='md:w-[1.875vw] md:h-[1.875vw] w-[3.73333vw] h-[3.73333vw] object-cover'
          />
          <FormControl
            sx={{
              minWidth: '8.75vw',
              '&.MuiFormControl-root': {
                margin: 0
              }
            }}
          >
            <Select
              value={topic}
              onChange={handleChangeTopic}
              displayEmpty
              inputprops={{ 'aria-label': 'Without label' }}
              sx={{
                height: '2.5rem',

                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none'
                },
                '& .MuiSvgIcon-root': {
                  right: 0
                },
                '& .MuiSelect-outlined': {
                  padding: 0,
                  paddingLeft: '0.62vw'
                }
              }}
            >
              <MenuItem value=''>
                <span className='md:text-[1.0625vw] md:font-[500] leading-[130%] text-textColor text-[2.93333vw] font-[400]'>
                  Travel Guide
                </span>
              </MenuItem>
              {metaTopic?.map((topic, index) => (
                <MenuItem key={index} value={topic?.slug}>
                  <span className='md:text-[1.0625vw] md:font-[500] leading-[130%] text-textColor text-[2.93333vw] font-[400]'>
                    {topic?.name}
                  </span>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
      <div className='hidden md:flex flex-col select md:rounded-0 rounded-[1.06667vw] flex-shrink-0 md:w-auto w-[44.53333vw] pl-0 md:pl-[1.87vw]'>
        <div className='bgFilterMobile'></div>
        <span className='text-[#9B9B9B] uppercase text-[0.875vw] md:block hidden'>
          {metaCategories && metaCategories[0]?.taxonomyName}
        </span>
        <div className='flex items-center select-mobile'>
          <Image
            src={durationIcon}
            width={100}
            height={100}
            alt='duration'
            className='md:w-[1.875vw] md:h-[1.875vw] w-[3.73333vw] h-[3.73333vw] object-cover'
          />
          <FormControl
            sx={{
              minWidth: '8.75vw',
              '&.MuiFormControl-root': {
                margin: 0
              },
              '& .MuiSvgIcon-root': {
                right: 0
              }
            }}
          >
            <Select
              value={category}
              onChange={handleChangeCategory}
              displayEmpty
              inputprops={{ 'aria-label': 'Without label' }}
              sx={{
                height: '2.5rem',
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none'
                },
                '& .MuiSvgIcon-root': {
                  right: 0
                },
                '& .MuiSelect-outlined': {
                  padding: 0,
                  paddingLeft: '0.62vw'
                }
              }}
            >
              <MenuItem value=''>
                <span className='md:text-[1.0625vw] md:font-[500] leading-[130%] text-textColor text-[2.93333vw] font-[400]'>
                  Restaurants
                </span>
              </MenuItem>
              {metaCategories?.map((cate, index) => (
                <MenuItem value={cate?.slug} key={index}>
                  <span className='md:text-[1.0625vw] md:font-[500] leading-[130%] text-textColor text-[2.93333vw] font-[400]'>
                    {cate?.name}
                  </span>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  )
}

export default FilterBlog
