'use client'
import { useEffect, useRef, useState } from 'react'

const CountDown = ({ data, time }) => {
  const [number, setNumber] = useState(0)
  const numberRef = useRef()
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => {
      if (numberRef.current) {
        const rect = numberRef.current?.getBoundingClientRect()
        const viewHeight = Math.max(numberRef.current.clientHeight || 0, window.innerHeight || 0)
        if (rect.top <= viewHeight && rect.bottom >= 0) {
          setIsVisible(true)
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    let setTimeOutId = null
    if (isVisible) {
      setTimeOutId = setTimeout(() => {
        if (number < parseInt(data?.value)) {
          setNumber((pre) => pre + 1)
        }
      }, time / parseInt(data?.value))
    } else {
      setNumber(0)
    }

    return () => {
      setTimeOutId && clearTimeout(setTimeOutId)
    }
  }, [number, isVisible, data, time])

  return (
    <div className='text-center stat-detail w-[47.81%] md:w-fit mb-[8.53vw] md:mb-0'>
      <div
        className='md:text-[8vw] xl:text-[6.25vw] text-[14.93vw] font-optima font-semibold uppercase leading-[100%]'
        ref={numberRef}
      >
        {number < 10 ? `0${number}` : number}
      </div>
      <div className='md:text-[2vw] xl:text-[1.6875vw] text-[4.8vw] font-optima font-semibold uppercase leading-[100%] md:tracking-[-1.35px] tracking-[-0.9px] mt-[1vw] mb-[0.5vw]'>
        {data?.title}
      </div>
      <div className='md:text-[1.6vw] xl:text-[1.125vw] text-[3.2vw] leading-[150%] md:tracking-[-0.9px] tracking-[-0.6px]'>
        {data?.description}
      </div>
    </div>
  )
}

export default CountDown
