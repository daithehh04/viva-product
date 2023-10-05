'use client'
import React from 'react'
import SearchResult from './SearchResult'
import warningIcon from '@/assets/images/search/warning.svg'
import Image from 'next/image'
import { DATA_ALL_TOUR } from '@/graphql/search/queries'
import { useQuery } from '@apollo/client'

function OtherTours({ lang }) {
  const dataAllTours = useQuery(DATA_ALL_TOUR, {
    variables: {
      language: lang?.toUpperCase()
    }
  })
  var allTours = dataAllTours?.data?.allTours?.nodes
  return (
    <div>
      <div className='w-[100%] rounded-[0.5vw] h-[4.4375vw] 
      bg-gradient-to-b from-[#FFF9DF] to-[#FFF1BC] pl-[2.44vw]
       flex items-center mb-[2.63vw] max-md:mx-[4.27vw] max-md:h-auto max-md:w-auto max-md:py-[2vw] max-md:rounded-[1.2vw] max-md:my-[2.4vw]'>
        <Image src={warningIcon} alt='warningIcon' className='mr-[1.8vw]' />
        <p className='text-[1.5vw] font-medium leading-[1.65vw] max-md:text-[3.2vw] max-md:px-[4.27vw] max-md:leading-normal'>No results for this search</p>
      </div>
      <div className='pb-[6.25vw]'>
        {allTours?.length !== 0 ? (
          <div>
            <h3 className='text-[2.5vw] font-[500] max-md:text-[3.2vw] max-md:px-[4.27vw]'>You may also like:</h3>
            <SearchResult data={allTours} quantity={6} text={'You may also like:'} className='hidden' />
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default OtherTours
