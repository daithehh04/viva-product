'use client'
import Image from 'next/image'
import { useEffect } from 'react'
import img1 from '@/assets/images/restau.png'
import img2 from '@/assets/images/accom.png'
import img3 from '@/assets/images/activi.png'
import img4 from '@/assets/images/ltiner.png'
import img5 from '@/assets/images/trans.png'
import img6 from '@/assets/images/staff.png'
import imgPerson from '@/assets/images/people-survey.png'
import Button from '@/components/Common/Button'
import AOS from 'aos'

const arrImg = [
  {
    img: img1,
    title: 'Restaurants'
  },
  {
    img: img2,
    title: 'Accomodations'
  },
  {
    img: img3,
    title: 'Activities'
  },
  {
    img: img4,
    title: 'Itineraries'
  },
  {
    img: img5,
    title: 'Transport'
  },
  {
    img: img6,
    title: 'Staff'
  }
]
function Surveys({ data, button }) {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <div className='surveys h-[62.1875vw] max-md:h-[auto]'>
      <div className='flex content pt-[6.38vw] max-md:flex-col max-md:pt-[14.93vw]'>
        <div className='w-[43vw] max-md:w-full'>
          <h2 className='heading-1'>{data?.title}</h2>
          <p className='mt-[1.5vw] text-[1.125vw] text-textColor opacity-70 leading-[150%] max-md:text-[3.73vw]'>
            {data?.text}
          </p>
          <ul className='grid grid-cols-3 gap-x-[3.75vw] gap-y-[2vw] mt-[2vw] max-md:mt-[6.93vw] max-md:gap-x-[15.75vw] max-md:gap-y-[3.2vw]'>
            {arrImg?.map((item, index) => (
              <li key={index} className='flex flex-col items-center'>
                <Image
                  src={item?.img}
                  width={100}
                  height={100}
                  alt='img'
                  className='w-[4.375vw] h-[4.375vw] object-cover max-md:w-[14.99vw] max-md:h-[14.99vw]'
                />
                <span className='text-[1vw] capitalize mt-[0.62vw] font-[500] text-textColor leading-normal max-md:text-[3.2vw]'>
                  {item?.title}
                </span>
              </li>
            ))}
          </ul>
          <div className='flex gap-x-[1vw] mt-[3.25vw] max-md:gap-x-[2.67vw] max-md:mt-[8.53vw]'>
            <Button className='btn-primary'>{button?.buttonbooktour}</Button>
            <Button className='btn-secondary'>{button?.buttonseemore}</Button>
          </div>
        </div>
        <div className='relative flex flex-col-reverse flex-1 max-md:mt-[31.08vw]'>
          <Image
            src={imgPerson}
            width={500}
            height={500}
            alt='img'
            className='relative z-20 w-[47vw] h-[34vw] object-contain max-md:w-full max-md:h-[70.9vw]'
          />
          <div
            className='circle w-[33.54285vw] h-[33.54285vw] max-md:w-[69.828vw] max-md:h-[69.828vw] rounded-full bg-bgCircle opacity-60 absolute bottom-[9.73vw] left-[20%]'
            data-aos-once='true'
            data-aos='fade-up'
            data-aos-duration='2000'
          ></div>
        </div>
      </div>
    </div>
  )
}

export default Surveys
