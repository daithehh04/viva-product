'use client'

import Aos from 'aos'
import { useEffect } from 'react'
import StaffSlide from './StaffSlide'
import StaffSlideMobile from './StaffSlideMobile'

export default function Staffs({ data }) {
  useEffect(() => {
    AOS.init({disable: 'mobile'})
    AOS.refresh()
  }, [])
  return (
    <section className='pb-[7.5vw] mt-[14.93vw] md:mt-[5vw]'>
      {/* title of slide */}
      <div className='content w-full md:mb-[2vw] mb-[6.4vw] text-[#171717]'>
        <h4
          data-aos-once='true'
          data-aos-disabled='true'
          data-aos='fade-up'
          data-aos-duration='1000'
          className='md:w-[47.875vw] md:text-[4vw] text-[4.8vw] font-semibold md:leading-[110%] leading-[120%] capitalize font-optima md:mb-[1vw]'
        >
          {data?.title}
        </h4>
        <p
          data-aos-once='true'
          data-aos-disabled='true'
          data-aos='fade-up'
          data-aos-duration='1200'
          className='md:w-[47.875vw] md:text-[1.125vw] text-[3.73vw] leading-[150%] opacity-80'
        >
          {data?.description}
        </p>
      </div>

      <div className='md:hidden flex'>
        <StaffSlideMobile staffData={data?.staffsInfo} />
      </div>

      <div className='content md:block hidden'>
        <StaffSlide staffData={data?.staffsInfo} />
      </div>
    </section>
  )
}
