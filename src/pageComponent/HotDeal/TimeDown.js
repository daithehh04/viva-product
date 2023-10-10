'use client'

import { memo, useEffect, useState } from 'react'
import moment, { now } from 'moment/moment'
import CountDown from './CountDown'

let idInterval
const TimeDown = ({ headerData = {}, data }) => {
  const [hour, setHour] = useState(0)
  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0)
  const [exprire, setExprire] = useState(false)

  useEffect(() => {
    let currentTime = moment(new Date())
    const currentTimeAfterFormat = currentTime.format('YYYY-MM-DD HH:mm:ss')
    const duration = moment.duration(moment(data, 'YYYY-MM-DD HH:mm:ss').diff(currentTimeAfterFormat))
    const hours = duration.hours() + duration.days() * 24
    const minutes = duration.minutes()
    const seconds = duration.seconds()
    if(seconds > 0) {
      setHour(hours)
      setMinute(minutes)
      setSecond(seconds)
  
    } else {
      setHour(0)
      setMinute(0)
      setSecond(0)
    }
   }, [data])

  useEffect(() => {
    idInterval && clearInterval(idInterval)
  }, [exprire])

  useEffect(() => {
    if (!exprire) {
      idInterval = setInterval(() => {
        if (second > 0) {
          setSecond((pre) => pre - 1)
        } else {
          setSecond(59)
          if (minute > 0) {
            setMinute((pre) => pre - 1)
          } else {
            setMinute(59)
            if (hour > 0) {
              setHour((pre) => pre - 1)
            } else {
              setHour(0)
              setMinute(0)
              setSecond(0)
              setExprire((pre) => !pre)
            }
          }
        }
      }, [1000])
    }

    return () => {
      clearInterval(idInterval)
    }
  }, [second, minute, hour, exprire])

  return (
    <div
      className='count-down relative w-[22.8125vw] h-[13.3225vw] flex gap-[0.88vw] mx-[1.88vw] shadow-md items-center justify-center 
    max-md:mx-0 max-md:w-[82.93vw] max-md:h-[48vw] max-md:mt-[3.2vw] max-md:mb-[6,66vw] max-md:gap-[4.27vw] max-md:items-end max-md:pb-[6.67vw]'
    >
      <CountDown
        number={hour}
        unit={headerData?.timeUnit?.hours}
      />
      <div className='flex gap-[0.5vw] mb-[1.5vw] max-md:gap-[2.13vw] flex-col max-md:mb-[13vw]'>
        <div className='h-[0.25vw] w-[0.25vw] bg-[#171717] opacity-30 rounded-full max-md:h-[1.2vw] max-md:w-[1.2vw]'></div>
        <div className='h-[0.25vw] w-[0.25vw] bg-[#171717] opacity-30 rounded-full max-md:h-[1.2vw] max-md:w-[1.2vw]'></div>
      </div>
      <CountDown
        number={minute}
        unit={headerData?.timeUnit?.minutes}
      />
      <div className='flex gap-[0.5vw] mb-[1.5vw] max-md:gap-[2.13vw] flex-col max-md:mb-[13vw]'>
        <div className='h-[0.25vw] w-[0.25vw] bg-[#171717] opacity-30 rounded-full max-md:h-[1.2vw] max-md:w-[1.2vw]'></div>
        <div className='h-[0.25vw] w-[0.25vw] bg-[#171717] opacity-30 rounded-full max-md:h-[1.2vw] max-md:w-[1.2vw]'></div>
      </div>
      <CountDown
        number={second}
        unit={headerData?.timeUnit?.seconds}
      />
      <div
        className='absolute h-[1.6875vw] w-fit top-0 -left-[0.375vw] bg-[#f22] text-white text-[0.75vw] leading-[1.8vw] px-[1vw] rounded-r-[0.25vw]
      max-md:text-[12px] max-md:h-[7.2vw] max-md:w-[31.2vw] max-md:top-[6.67vw] max-md:leading-[7.2vw] max-md:text-center max-md:-left-2 max-lg:text-[1vw]
      '
      >
        {headerData?.timeRemaining}
      </div>
      <div
        className='absolute top-[1.6875vw] -left-[0.375vw] triangle 
       max-md:top-[13.9vw] max-md:-left-2 ' 
      ></div>
    </div>
  )
}

export default memo(TimeDown)
