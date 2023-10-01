'use client'
import searchIcon from '@/assets/images/search-normal.svg'
import calendar from '@/assets/images/calendarFilter.svg'
import wallet from '@/assets/images/wallet.svg'
import styleIcon from '@/assets/images/style-travel.svg'
import Image from 'next/image'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useEffect, useRef, useState } from 'react'
import Button from '@/components/Common/Button'
import { useRouter } from 'next/navigation'
import { useClickOutside } from '@/helpers/customHooks'
function FilterPopup({ lang, dataFilter, slug }) {
  const refLink = useRef()
  const searchRef = useRef()
  const popUp = useRef(null)
  const filterTourRef = useRef()
  let isFilterTourRef = useRef(false)
  const [travelStyle, setTravelStyle] = useState('')
  const [duration, setDuration] = useState('')
  const [budget, setBudget] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleChangeTravelStyle = (event) => {
    setTravelStyle(event.target.value)
  }
  const handleChangeDuration = (event) => {
    setDuration(event.target.value)
  }
  const handleChangeBudget = (event) => {
    setBudget(event.target.value)
  }

  function handleSearch(e) {
    const arrParams = []
    if (travelStyle || duration || budget) {
      if (travelStyle) {
        arrParams.push({ style: travelStyle })
      }
      if (duration) {
        arrParams.push({ duration: duration })
      }
      if (budget) {
        arrParams.push({ budget: budget })
      }
      const resultObject = {}
      arrParams.forEach((obj) => {
        for (const key in obj) {
          if (obj.hasOwnProperty(key)) {
            resultObject[key] = obj[key]
          }
        }
      })
      const queryString = new URLSearchParams(resultObject).toString()
      var link = `/search?&country=${slug}&${queryString}`
      if (lang !== 'en') {
        link = `/${lang}/search?&country=${slug}&${queryString}`
      }
      router.push(link)
    } else {
      router.push(`/${lang}/search`)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 600 && !isFilterTourRef.current) {
        searchRef.current.style.transform = 'translateX(0)'
        setTimeout(() => {
          filterTourRef.current.style.transform = 'translateX(0%)'
          filterTourRef.current.style.visibility = 'visible'
          filterTourRef.current.style.opacity = '1'
          setTimeout(() => {
            filterTourRef.current.style.transform = 'translateX(30%)'
            filterTourRef.current.style.visibility = 'hidden'
            filterTourRef.current.style.opacity = '0'
          }, 3000)
        }, 1000)
        isFilterTourRef.current = true
      } else if (window.scrollY < 600 && isFilterTourRef.current) {
        searchRef.current.style.transform = 'translateX(300%)'
        isFilterTourRef.current = false
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleShow = (e) => {
    e.stopPropagation()
    if (popUp.current.classList && typeof popUp.current.classList.toggle === 'function') {
      popUp.current.classList.toggle('active')
    }
  }

  useClickOutside(popUp, (e) => {
    if (popUp.current && popUp.current.classList.contains('active') && !searchRef.current.contains(e.target)) {
      popUp.current.classList.remove('active')
    }
  })
  return (
    <div className=''>
      <div className='fixed bottom-[6.44vw] z-[10] right-0 md:flex items-center h-12vw hidden'>
        <div
          onClick={handleShow}
          id='btn-search-animation'
          ref={searchRef}
          className='w-[4.5vw] h-[4.5vw] rounded-[50%] absolute right-[3.31vw] bg-[#FFD220] flex justify-center items-center flex-shrink-0 z-20'
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
          ref={filterTourRef}
          id='filterTourBlock'
          className=' py-[0.75vw] absolute  right-[5vw] h-fit px-[1.19vw] bg-[#FFD220] inline-flex justify-center items-center gap-[0.625vw] rounded-tl-[3.0625vw] rounded-bl-[3.0625vw] '
        >
          <span className='text-[1vw] text-[#171717] font-normal leading-[130%]'>Filter tour</span>
          <div className='flex w-[1.375vw] h-[1.375vw] justify-center items-center'></div>
        </div>
      </div>
      <div
        ref={popUp}
        className='md:grid hidden z-10 grid-cols-2 filterPopUp gap-y-[2.12vw] gap-x-[2.25vw] justify-items-end rounded-[1vw] shadow-lg bg-white fixed bottom-[8.94vw] right-[6.13vw] items-center w-[28.6vw] pt-[2.5vw] pr-[2.125vw] pb-[2.18vw] pl-[2.1875vw]'
      >
        <div className='flex flex-col select md:rounded-0 rounded-[1.06667vw] flex-shrink-0 md:w-auto w-[48vw] max-md:bg-white max-md:w-full pl-0 md:pl-[1.87vw]'>
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
                    Travel Style
                  </span>
                </MenuItem>
                {dataFilter?.style?.map((item, index) => (
                  <MenuItem
                    value={item?.slug}
                    key={index}
                  >
                    <span className='md:text-[1.0625vw] md:font-[500] leading-[130%] text-textColor text-[2.93333vw] font-[400]'>
                      {item?.name}
                    </span>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>

        <div className='flex flex-col select md:rounded-0 rounded-[1.06667vw] flex-shrink-0 md:w-auto w-[48vw] max-md:bg-white max-md:w-full pl-0 md:pl-[1.87vw]'>
          <span className='text-[#9B9B9B] uppercase text-[0.875vw] md:block hidden'>Duration</span>
          <div className='flex items-center select-mobile'>
            <Image
              src={calendar}
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
                    Duration
                  </span>
                </MenuItem>
                {dataFilter?.duration?.map((item, index) => (
                  <MenuItem
                    value={item?.name}
                    key={index}
                  >
                    <span className='md:text-[1.0625vw] md:font-[500] leading-[130%] text-textColor text-[2.93333vw] font-[400]'>
                      {item?.name} day
                    </span>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>

        <div className='flex flex-col select md:rounded-0 rounded-[1.06667vw] flex-shrink-0 md:w-auto w-[48vw] max-md:bg-white max-md:w-full pl-0 md:pl-[1.87vw]'>
          <span className='text-[#9B9B9B] uppercase text-[0.875vw] md:block hidden'>Budget</span>
          <div className='flex items-center select-mobile'>
            <Image
              src={wallet}
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
                    Budget
                  </span>
                </MenuItem>
                {dataFilter?.budget?.map((item, index) => (
                  <MenuItem
                    value={item?.name}
                    key={index}
                  >
                    <span className='md:text-[1.0625vw] md:font-[500] leading-[130%] text-textColor text-[2.93333vw] font-[400]'>
                      {item?.name}$
                    </span>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <Button
          ref={refLink}
          onClick={handleSearch}
          className='btn-primary w-fit '
        >
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
