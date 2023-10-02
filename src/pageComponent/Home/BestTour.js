'use client'
import FilterTour from '@/components/Common/FilterTour'
import TourItem from '@/components/Common/TourItem'
import TourItemMobile from '@/components/Common/TourItemMobile'
import bgTourItemMB from '@/assets/images/bgTourItemMB.png'
import imgTour from '@/assets/images/img-more.png'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/Common/Button'

function BestTour({
  dataFilter,
  onDestination,
  onTravelStyle,
  onBudget,
  onDuration,
  allTours,
  lang,
  button,
  finalData
}) {
  const [destination, setDestination] = useState('')
  const [travelStyle, setTravelStyle] = useState('')
  const [budget, setBudget] = useState('')
  const [duration, setDuration] = useState('')
  useEffect(() => {
    onDestination(destination)
    onTravelStyle(travelStyle)
    onBudget(budget)
    onDuration(duration)
  }, [onDestination, onTravelStyle, destination, travelStyle, budget, duration, onBudget, onDuration])
  return (
    <div className='best-tours pt-[8.13vw] relative'>
      <div className='absolute top-0 h-[50vw] w-full bg-white md:hidden'></div>
      <Image
        alt='img'
        src={bgTourItemMB}
        quality={100}
        className='absolute w-full h-[171vw] object-cover bottom-[-17.5%] z-[-1] md:hidden'
      />
      <div className='max-md:pl-[4.27vw] pl-[8.125vw] max-md:pr-[4.27vw] '>
        <h2 className='heading-1 max-md:relative max-md:text-center'>{finalData?.bestTour?.title}</h2>
        <div className='bg-white mt-[1vw] w-max rounded-[1.125vw] px-[2.38vw] py-[1.19vw] max-md:mt-[4.27vw] max-md:p-0 max-md:bg-transparent max-md:w-full'>
          <FilterTour
            dataFilter={dataFilter}
            onSelectDes={(data) => setDestination(data)}
            onSelectStyle={(data) => setTravelStyle(data)}
            onSelectBudget={(data) => setBudget(data)}
            onSelectDuration={(data) => setDuration(data)}
            className={'filterMobile'}
          />
        </div>
      </div>
      <div className='grid grid-cols-4 gap-[2.5vw] max-md:relative md:mt-[1.88vw] mt-[7.73vw] max-md:grid-cols-1 w-[83.75%] ml-auto mr-auto max-md:w-full'>
        <div className='bg-tourMobile md:hidden'></div>
        {allTours?.slice(0, 7).map((tour, index) => (
          <div key={index}>
            <div className='max-md:hidden'>
              <TourItem data={tour} />
            </div>
            <div className='hidden max-md:block'>
              <TourItemMobile data={tour} />
            </div>
          </div>
        ))}
        {allTours?.length > 7 ? (
          <div className='h-[24.5vw] rounded-[1vw] relative hidden md:flex  justify-center items-center lastItem'>
            <Image src={imgTour} alt='img-tour' fill className='object-cover h-full ' />
            <div className='absolute flex flex-col items-center justify-center'>
              <div className='inline-flex gap-[0.3125vw] justify-center items-center'>
                <span className='text-justify font-optima text-[2vw] font-normal leading-[130%] text-white'>+</span>
                <span className='text-white heading-1'>{allTours.length - 7}</span>
              </div>
              <span className='text-white text-justify font-optima text-[1.5vw] block font-medium leading-[150%]'>
                Other tours
              </span>
              <div className='flex justify-center mt-[1.25vw]'>
                <Link href={`/${lang}/search`} className='btn-secondary'>
                  {button?.buttonseemore}
                </Link>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>

      <div className='flex justify-center md:hidden max-md:mt-[8.53vw]'>
        <Link href={`/${lang}/search`}>
          <Button className='btn-secondary'> {button?.buttonseemore}</Button>
        </Link>
      </div>
    </div>
  )
}

export default BestTour
