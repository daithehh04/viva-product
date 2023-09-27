'use client'
import React, { useRef, useState } from 'react'
import TourItem from '@/components/Common/TourItem'

const SearchResult = ({ data, quantity }) => {
  let totalPage = useRef(0)
  const [activePage, setActivePage] = useState(1)
  const size = quantity
  totalPage.current = size ? Math.ceil(data?.length / size) : Math.ceil(data?.length / size)
  const pagination = new Array(totalPage.current || 0).fill(0)
  return (
    <div>
      <h2 className='text-[2vw] font-medium leading-[2.2vw] mb-[1.5vw]'></h2>
      <div className='grid grid-cols-3 gap-[1.5vw]'>
        {data?.slice(size * (activePage - 1), size * activePage).map((tour, index) => (
          <div key={index}>
            <div>
              <TourItem data={tour} />
            </div>
          </div>
        ))}
      </div>
      <div className='flex md:gap-[0.75vw] gap-[3.2vw] justify-center items-center relative md:mt-[4.5vw] mt-[8.53vw]'>
        {totalPage.current > 1 &&
          pagination?.map((page, index) => (
            <div
              key={index}
              onClick={() => setActivePage(index + 1)}
              className={`cursor-pointer md:w-[2.125vw] md:h-[2.125vw] w-[9.07vw] h-[9.07vw] rounded-[50%] flex justify-center items-center bg-primaryColor ${
                activePage === index + 1 ? 'bg-textColor  opacity-[1]' : 'opacity-[0.5]'
              }`}
            >
              <span className={`${activePage === index + 1 ? 'text-white' : 'text-textColor'}`}>{index + 1}</span>
            </div>
          ))}
      </div>
    </div>
  )
}

export default SearchResult
