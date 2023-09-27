'use client'
import { useEffect, useState } from 'react'
import TravelStyleItem from './TravelStyleItem'
import coconut from '@/assets/images/coconut.svg'
import coconut2 from '@/assets/images/coconut2.svg'
import Image from 'next/image'

function TravelStyle({ data, title, desc }) {
  const [row1, setRow1] = useState([])
  const [row2, setRow2] = useState([])
  const [row3, setRow3] = useState([])
  useEffect(() => {
    const len = data?.length
    const quantityOnRow = Math.floor(len / 3)
    const residual = len % 3
    // console.log(quantityOnRow)
    const arrRow1 = []
    const arrRow2 = []
    const arrRow3 = []
    let bonusRow1 = 0
    let bonusRow2 = 0
    if (residual == 1) {
      bonusRow1 = 1
    } else if (residual == 2) {
      bonusRow1 = 1
      bonusRow2 = 2
    }

    data?.forEach((item, index) => {
      if (index < quantityOnRow + bonusRow1) arrRow1.push(item)
      else if (index < quantityOnRow * 2 + bonusRow2) {
        arrRow2.push(item)
      } else {
        arrRow3.push(item)
      }
    })
    setRow1(arrRow1)
    setRow2(arrRow2)
    setRow3(arrRow3)
  }, [data])

  return (
    <div className='pt-[10.62vw] pb-[4.87vw] relative max-md:hidden'>
      <div className='content'>
        <h2 className='heading-1'>{title}</h2>
        <p className='w-[36vw] text-[1.125vw] leading-normal'>{desc}</p>
        <div className='flex gap-[2.5vw]'>
          <div className='col-1 flex flex-col gap-[2.5vw] mt-[4.56vw]'>
            {row1?.map((item, index) => (
              <TravelStyleItem
                data={item}
                key={index}
              />
            ))}
          </div>
          <div className='col-2 flex flex-col gap-[2.5vw] mt-[13.31vw]'>
            {row2?.map((item, index) => (
              <TravelStyleItem
                data={item}
                key={index}
              />
            ))}
          </div>
          <div className='col-3 flex flex-col gap-[2.5vw] mt-[-5vw]'>
            {row3?.map((item, index) => (
              <TravelStyleItem
                data={item}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
      <Image
        src={coconut2}
        width={200}
        height={200}
        alt='coconut'
        className='w-[34.57vw] h-[31.44vw] object-cover absolute left-[43.25vw] top-[8.5vw]'
      />
      <Image
        src={coconut}
        width={200}
        height={200}
        alt='coconut'
        className='w-[34.57vw] h-[31.44vw] object-cover absolute left-0 top-[21.56vw]'
      />
    </div>
  )
}

export default TravelStyle
