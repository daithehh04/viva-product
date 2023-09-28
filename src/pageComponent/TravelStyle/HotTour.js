'use client'

import TourSlides from '@/components/Common/SlideTour'
import Reason from './Reason'
import Button from '@/components/Common/Button'
function HotTour({ hotTour, reason }) {
  return (
    <div className='w-[87.5%] ml-auto mr-auto max-md:w-full'>
      <div className='md:mt-[3.12vw] mt-[14.67vw]'>
        <p className='heading-1 mb-[1.5vw] max-md:pl-[4.27vw]'>{hotTour?.title}</p>
        <div className='max-md:mt-[6.4vw] mb-[3.5vw] max-md:mb-[7.7vw]'>
          <TourSlides data={hotTour?.hotTour} />
        </div>
        <div className='flex justify-center'>
          <Button className='btn-secondary'>See More</Button>
        </div>
      </div>
      <div className='mt-[8.62vw] flex flex-col max-md:px-[4.27vw] md:mb-[6.25vw] mb-[16.21vw] '>
        <span className='font-optima md:text-[4vw] text-[4.8vw] font-semibold leading-[130%] capitalize text-[#171717] mb-[3vw] '>
          {reason?.title}
          {/* Why Travel with Asia Viva Travel */}
        </span>
        <div className='grid md:grid-cols-4 md:grid-rows-1 md:gap-[2vw] gap-[4.27vw] grid-cols-2 grid-rows-2'>
          {reason?.reason?.map((choose, index) => {
            return <Reason key={index} icon={choose.image.sourceUrl} title={choose.title} desc={choose.content} />
          })}
        </div>
      </div>
    </div>
  )
}

export default HotTour
