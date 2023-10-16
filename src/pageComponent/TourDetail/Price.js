'use client'

import triangle from '@/assets/images/triangle.svg'
import BookTour from '@/components/Common/BookTour'
import ModalCustom from '@/components/Common/ModalCustom'
import Image from 'next/image'
import { useState } from 'react'

export default function Price({ type, className, data, onClick }) {
  return (
    <div>
      <div
        className={`${
          className || ''
        } relative hidden md:block w-full px-[5.5vw] py-[1.75vw] shadow-[0_2px_50px_0_rgba(0,0,0,0.03)] bg-white rounded-lg`}
      >
        <div className='flex mb-[1vw] gap-[0.62vw] font-bold leading-normal items-center'>
          <span className='text-[1vw] max-lg:text-[1.5vw]'>{data?.price?.header}:</span>
          <span className='capitalize text-[1.5vw] max-lg:text-[2.25vw]'>${data?.price?.value}</span>
        </div>
        <button
          className=' w-[15.375vw] max-lg:w-[17vw] h-[3.6875vw] flex items-center text-[1vw] max-lg:text-[1.25vw] px-[2.62vw] py-[1.25vw] bg-primaryColor rounded-xl max-lg:rounded cursor-pointer'
          onClick={onClick}
        >
          {data?.button}
        </button>

        {type === 'promo' && (
          <div className='absolute top-[1.12vw] left-[-0.375vw] '>
            <div className='px-[1vw] py-[0.25vw] bg-[#F22] rounded-br-[4px] rounded-tr-[4px] text-white font-manrope font-semibold leading-normal text-[0.75vw]'>
              Hot Sale
            </div>
            <Image
              src={triangle}
              alt='triangle'
              width={100}
              height={100}
              className='w-[0.375vw] h-[0.5vw] absolute object-cover'
            />
          </div>
        )}
      </div>
    </div>
  )
}
