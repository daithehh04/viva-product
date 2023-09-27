'use client'
import locationIcon from '@/assets/images/route-square-gr.svg'
import styleIcon from '@/assets/images/style-travel.svg'
import durationIcon from '@/assets/images/duration.svg'
import budgetIcon from '@/assets/images/budget.svg'
import Image from 'next/image'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useState } from 'react'
function FilterTourTravelStyle() {
  const [destination, SetDestination] = useState('')
  const [travelStyle, SetTravelStyle] = useState('')
  const [duration, SetDuration] = useState('')
  const [budget, SetBudget] = useState('')

  const handleChangeDestination = (event) => {
    SetDestination(event.target.value)
  }
  const handleChangeTravelStyle = (event) => {
    SetTravelStyle(event.target.value)
  }
  const handleChangeDuration = (event) => {
    SetDuration(event.target.value)
  }
  const handleChangeBudget = (event) => {
    SetBudget(event.target.value)
  }
  return (
    <div className='flex max-md:grid max-md:grid-cols-2 max-md:gap-[2.67vw] md:gap-x-[1.87vw] gap-y-[3.2vw] gap-x-[2.67vw] md:flex-nowrap flex-wrap md:justify-normal justify-between'>
      <div className='flex flex-col select md:rounded-0  relative rounded-[1.06667vw] flex-shrink-0 md:w-auto w-[48vw] bg-white max-md:w-full'>
        <div className='fitlerTourTravel'></div>
        <span className='text-[#9B9B9B] uppercase text-[0.875vw] md:block hidden'>Destination</span>
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
                  VietNam
                </span>
              </MenuItem>
              <MenuItem value='VietNam'>
                <span className='md:text-[1.0625vw] md:font-[500] leading-[130%] text-textColor text-[2.93333vw] font-[400]'>
                  VietNam
                </span>
              </MenuItem>
              <MenuItem value='VietNam'>
                <span className='md:text-[1.0625vw] md:font-[500] leading-[130%] text-textColor text-[2.93333vw] font-[400]'>
                  VietNam
                </span>
              </MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      <div className='flex flex-col select md:rounded-0 relative rounded-[1.06667vw] flex-shrink-0 md:w-auto w-[48vw] bg-white max-md:w-full pl-0 md:pl-[1.87vw]'>
        <div className='fitlerTourTravel'></div>
        <span className='text-[#9B9B9B] uppercase text-[0.875vw] md:block hidden'>Travel Style</span>
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
              value={travelStyle}
              onChange={handleChangeTravelStyle}
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
                  VietNam
                </span>
              </MenuItem>
              <MenuItem value='VietNam'>
                <span className='md:text-[1.0625vw] md:font-[500] leading-[130%] text-textColor text-[2.93333vw] font-[400]'>
                  VietNam
                </span>
              </MenuItem>
              <MenuItem value='VietNam'>
                <span className='md:text-[1.0625vw] md:font-[500] leading-[130%] text-textColor text-[2.93333vw] font-[400]'>
                  VietNam
                </span>
              </MenuItem>
              <MenuItem value='VietNam'>
                <span className='md:text-[1.0625vw] md:font-[500] leading-[130%] text-textColor text-[2.93333vw] font-[400]'>
                  VietNam
                </span>
              </MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      <div className='flex flex-col select md:rounded-0  relative rounded-[1.06667vw] flex-shrink-0 md:w-auto w-[48vw] bg-white max-md:w-full pl-0 md:pl-[1.87vw]'>
        <div className='fitlerTourTravel'></div>
        <span className='text-[#9B9B9B] uppercase text-[0.875vw] md:block hidden'>Duration</span>
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
              value={duration}
              onChange={handleChangeDuration}
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
                  VietNam
                </span>
              </MenuItem>
              <MenuItem value='VietNam'>
                <span className='md:text-[1.0625vw] md:font-[500] leading-[130%] text-textColor text-[2.93333vw] font-[400]'>
                  VietNam
                </span>
              </MenuItem>
              <MenuItem value='VietNam'>
                <span className='md:text-[1.0625vw] md:font-[500] leading-[130%] text-textColor text-[2.93333vw] font-[400]'>
                  VietNam
                </span>
              </MenuItem>
              <MenuItem value='VietNam'>
                <span className='md:text-[1.0625vw] md:font-[500] leading-[130%] text-textColor text-[2.93333vw] font-[400]'>
                  VietNam
                </span>
              </MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      <div className='flex flex-col select md:rounded-0  relative rounded-[1.06667vw] flex-shrink-0 md:w-auto w-[48vw] bg-white max-md:w-full pl-0 md:pl-[1.87vw]'>
        <div className='fitlerTourTravel'></div>
        <span className='text-[#9B9B9B] uppercase text-[0.875vw] md:block hidden'>Budget</span>
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
              value={budget}
              onChange={handleChangeBudget}
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
                  VietNam
                </span>
              </MenuItem>
              <MenuItem value='VietNam'>
                <span className='md:text-[1.0625vw] md:font-[500] leading-[130%] text-textColor text-[2.93333vw] font-[400]'>
                  VietNam
                </span>
              </MenuItem>
              <MenuItem value='VietNam'>
                <span className='md:text-[1.0625vw] md:font-[500] leading-[130%] text-textColor text-[2.93333vw] font-[400]'>
                  VietNam
                </span>
              </MenuItem>
              <MenuItem value='VietNam'>
                <span className='md:text-[1.0625vw] md:font-[500] leading-[130%] text-textColor text-[2.93333vw] font-[400]'>
                  VietNam
                </span>
              </MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  )
}

export default FilterTourTravelStyle
