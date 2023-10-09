'use client'
import { useEffect } from 'react'
import SlideRepresent from './SlideRepresentative'
import AOS from 'aos'

function TouristRepresentative({ data }) {
  useEffect(() => {
    AOS.init({
      disable: function () {
        var maxWidth = 769
        return window.innerWidth < maxWidth
      }
    })
    AOS.refresh()
  }, [])
  return (
    <div className='tourist-representative pt-[4.69vw] pb-[8.42vw] max-md:pt-[13.81vw]'>
      <div className='flex md:flex-row flex-col items-center content mb-[6.4vw] md:mb-0'>
        <h2
          className='heading-1 md:w-[28.9375vw] w-full '
          data-aos-once='true'
          data-aos-disabled='true'
          data-aos='fade-up'
          data-aos-duration='1000'
        >
          {data?.title}
        </h2>
        <p
          className='text-[1.125vw] max-md:text-[3.73vw] leading-normal text-justify md:w-[36vw] w-full ml-auto max-md:opacity-70 opacity-80 text-textColor max-lg:text-[1.6vw]'
          data-aos-once='true'
          data-aos-disabled='true'
          data-aos='fade-up'
          data-aos-duration='1000'
        >
          {data?.desc}
        </p>
      </div>
      <SlideRepresent data={data?.members} dataInfo={data} />
    </div>
  )
}

export default TouristRepresentative
