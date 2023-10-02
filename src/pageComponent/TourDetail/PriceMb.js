'use client'

import React, { useState } from 'react'
import priceIcon from '@/assets/images/tourDetail/price.svg'
import Image from 'next/image'
import Button from '@/components/Common/Button'

export default function PriceMb({ data, onClick }) {
  return (
    <div className='fixed bottom-0 left-0 z-[100000]'>
      <div className='w-[16vw] h-[16vw] mb-[4.27vw] ml-[4.27vw] flex items-center justify-center bg-primaryColor rounded-full flex-shrink-0'>
        <Image
          src={priceIcon}
          alt='icon'
          className='w-[8.33vw] h-[8.33vw]'
        />
      </div>

      <div className='px-[4.27vw] pt-[4.2vw] pb-[3.2vw] w-[100vw] bg-[#fff]'>
        <div className='flex justify-between items-center mb-[2.27vw] text-[#171717]'>
          <div className='text-[3.73vw] font-medium'>{data?.price?.header}:</div>
          <div className='text-[4.26vw] capitalize leading-[1.5] font-bold'>
            {' '}
            ${data?.price?.value?.lowestPrice} - ${data?.price?.value?.highestPrice}
          </div>
        </div>

        <Button
          className='btn-primary w-full flex justify-center'
          onClick={() => onClick()}
        >
          {data?.button}
        </Button>
      </div>
    </div>
  )
}
