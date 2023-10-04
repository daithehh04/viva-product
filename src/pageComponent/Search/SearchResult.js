'use client'
import React, { useRef, useState } from 'react'
import TourItem from '@/components/Common/TourItem'
import TourItemMobile from '@/components/Common/TourItemMobile'

const SearchResult = ({ data, quantity, lang, className }) => {
  console.log(data)
  let totalPage = useRef(0)
  const [activePage, setActivePage] = useState(1)
  const size = quantity
  totalPage.current = size ? Math.ceil(data?.length / size) : Math.ceil(data?.length / size)
  const pagination = new Array(totalPage.current || 0).fill(0)
  return (
    <div>
      <h2 className={`text-[2vw] font-medium leading-[2.2vw] mb-[1.5vw] max-md:hidden ${className}`}>
        Found {data?.length} results
      </h2>

      <div className='grid md:grid-cols-3 grid-cols-1 md:gap-[1.5vw] gap-[4.27vw] relative'>
        <div className='absolute inset-0 z-[-1] bg-[#F3F6FB] md:hidden'></div>
        {data?.slice(size * (activePage - 1), size * activePage).map((tour, index) => (
          <div key={index}>
            <div className='max-md:hidden'>
              <TourItem data={tour} lang={lang} />
            </div>

            <div className='md:hidden'>
              <TourItemMobile data={tour} lang={lang} />
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
