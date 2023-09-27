/* eslint-disable react/display-name */
import btnDown2 from '@/assets/images/tourDetail/btnDown2.svg'
import Image from 'next/image'
import { forwardRef } from 'react'

const ScrollToTop = forwardRef((props, ref) => {
  const handleScrollUp = () => {
    ref?.current?.scrollIntoView({
      behavior: 'smooth'
    })
  }
  return (
    <div
      className='flex flex-col justify-center items-center gap-1 cursor-pointer fixed bottom-[10vw] right-[1vw] z-100'
      onClick={handleScrollUp}
    >
      <div className='tour-detail-scroll-up rounded-full w-[2.8125vw] h-[2.8125vw] bg-primaryColor flex items-center justify-center'>
        <Image
          src={btnDown2}
          alt='btnDown2'
          width={15}
          height={15}
          className='w-[0.86188vw] h-[0.75844vw] rotate-180'
        />
      </div>
    </div>
  )
})

export default ScrollToTop
