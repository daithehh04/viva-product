'use client'

import { memo } from 'react'

const CountDown = ({ unit, number }) => {
  return (
    <div className='flex flex-col items-center gap-[0.38vw] max-md:gap-[2.13vw]'>
      <div className='w-[5vw] h-[5vw] flex items-center justify-center bg-[#FFFBE9] rounded-lg max-md:w-[16.53vw] max-md:h-[16.53vw]'>
        <span className='font-optima text-[2.5vw] font-semibold leading-[1vw] max-md:text-[6.4vw]'>{number}</span>
      </div>
      <span className='font-optima text-[0.75vw] font-medium leading-[1.5vw] text-center max-md:text-[3.2vw] max-md:h-[4.8vw] max-md:leading-[4.8vw] max-lg:text-[1.4vw]'>
        {unit}
      </span>
    </div>
  )
}

export default memo(CountDown)
