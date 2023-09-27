'use client'
import locationIcon from '@/assets/images/route-square-gr.svg'
import styleIcon from '@/assets/images/style-travel.svg'
import budgetIcon from '@/assets/images/budget.svg'
import Image from 'next/image'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useEffect, useState } from 'react'
import searchIcon from '@/assets/images/search-normal.svg'
import Button from '@/components/Common/Button'
function FilterPopup() {
  const [destination, SetDestination] = useState('')
  const [travelStyle, SetTravelStyle] = useState('')
  const [visible, setVisible] = useState(false)
  const [duration, SetDuration] = useState('')

  const searchAnimation = document.getElementById('btn-search-animation')
  const filterTourBlock = document.getElementById('filterTourBlock')
  const filterPopUp = document.querySelector('.filterPopUp')

  const handleChangeDestination = (event) => {
    SetDestination(event.target.value)
  }
  const handleChangeTravelStyle = (event) => {
    SetTravelStyle(event.target.value)
  }
  const handleChangeDuration = (event) => {
    SetDuration(event.target.value)
  }

  const handleShowPopUp = () => {
    searchAnimation.addEventListener('click', (e) => {
      e.stopPropagation()
      filterPopUp.classList.toggle('active')
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      const searchAnimation = document.getElementById('btn-search-animation')
      const filterTourBlock = document.getElementById('filterTourBlock')
      const scrollTop = window.scrollY

      if (scrollTop >= 560 && !visible) {
        if (filterTourBlock) {
          setVisible(true)
          searchAnimation.style.transform = 'translateX(0)'
          setTimeout(() => {
            filterTourBlock.style.transform = 'translateX(0)'
            filterTourBlock.style.visibility = 'visible'
            filterTourBlock.style.opacity = '1'

            setTimeout(() => {
              filterTourBlock.style.transform = 'translateX(20%)'
              filterTourBlock.style.visibility = 'hidden'
              filterTourBlock.style.opacity = '0'
            }, 1500)
          }, 1000)
        }
      } else if (scrollTop == 0) {
        setVisible(false)
        searchAnimation.style.transform = 'translateX(300%)'
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [visible])

  return (
    <div>
      <div className='fixed bottom-[8vw] z-[1000] right-0 md:flex items-center h-12vw hidden'>
        <div
          onClick={handleShowPopUp}
          id='btn-search-animation'
          className=' w-[4.5vw] h-[4.5vw] rounded-[50%] absolute right-[3.31vw] bg-[#FFD220] flex justify-center items-center flex-shrink-0'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='22'
            height='22'
            viewBox='0 0 22 22'
            fill='none'
          >
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

        <div
          id='filterTourBlock'
          className='py-[0.75vw] absolute  right-[5vw] h-fit px-[1.19vw] bg-[#FFD220] inline-flex justify-center items-center gap-[0.625vw] rounded-tl-[3.0625vw] rounded-bl-[3.0625vw] '
        >
          <span className='text-[1vw] text-[#171717] font-normal leading-[130%]'>Filter tour</span>
          <div className='flex w-[1.375vw] h-[1.375vw] justify-center items-center'></div>
        </div>
      </div>

      <div className='fixed filterPopUp rounded-[1vw] shadow-lg bottom-[10vw] right-[8vw] z-[1000] bg-white w-[28.5625vw] h-[15vw] grid grid-cols-2 grid-rows-2 gap-y-[2.25vw] gap-x-[4.14vw] pt-[2.5vw] pr-[2.125vw] pb-[2.8125vw] pl-[2.1875vw]'>
        <div className='flex flex-col select  flex-shrink-0 md:w-full max-md:bg-white '>
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

        <div className='flex flex-col select  flex-shrink-0 md:w-full max-md:bg-white'>
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

        <div className='flex flex-col select  flex-shrink-0 md:w-full max-md:bg-white'>
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
        <Button className='btn-primary w-full'>
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
    </div>
  )
}

export default FilterPopup
