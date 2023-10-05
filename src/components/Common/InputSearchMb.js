"use client"
import Image from 'next/image'

import searchIcon from '@/assets/images/search-mb.svg'
import arrIcon from '@/assets/images/right-arr.svg'
import HomeSearch from '../Menu/HomeSearch'
import { useRef } from 'react'
import { useData } from '../Menu/DataContextMenu'
import { DATA_SEARCH_TEXT_TOUR } from '@/graphql/filter/queries'
import { useQuery } from '@apollo/client'
import Loading from './Loading'
import Link from 'next/link'
import FilterBanner from '@/pageComponent/Home/FilterBanner'

function InputSearchMb({lang, dataFilter}) {
  const { dataInput } = useData();
  const refMenu = useRef()
  const handleOpen = (e) => {
    e.preventDefault()
    refMenu.current.classList.add('show')
  }
  const handleClose = () => {
    refMenu.current.classList.remove('show')
  }
  const {data,loading} = useQuery(DATA_SEARCH_TEXT_TOUR, {
    variables: {
      title: dataInput,
      language: lang?.toUpperCase()
    }
  })
  const allTours = data?.allTours?.nodes
  return (
    <div className='ml-[3.73vw] mr-[5.33vw] relative'>
      <input
        type='text'
        className='rounded-full search-mb w-full h-[9.3vw] border border-solid border-[#ccc] outline-none pl-[9.6vw] text-[3.2vw]'
        placeholder='Search'
        onFocus={handleOpen}
      />
      <Image
        src={searchIcon}
        width={50}
        height={50}
        alt='icon'
        onClick={handleOpen}
        className='w-[3.73vw] h-[3.73vw] absolute left-[4.27vw] top-[50%] -translate-y-1/2'
      />
      <div className='search-mb-btn w-[7.46vw] h-[7.46vw] rounded-full flex items-center justify-center bg-[#eee] cursor-pointer absolute right-[1.07vw] top-[50%] -translate-y-1/2'>
        <Image
          src={arrIcon}
          width={50}
          height={50}
          alt='icon'
          className='w-[2.13vw] h-[2.13vw] relative z-10'
          onClick={handleOpen}
        />
      </div>
      <div className='fixed inset-0 bg-white home-search__mb !z-[200] overflow-hidden w-full' ref={refMenu}>
        <HomeSearch onClose= {handleClose} lang={lang}/>
        <div className='mt-[6.4vw]'>
          {loading ? <div className="flex items-center justify-center w-full">
            <Loading/>
          </div> : 
          <div className="flex flex-col gap-[3.2vw] max-h-[54.4vw] overflow-y-auto content">
            {allTours?.length === 0 ? <h4 className="text-[3.2vw]">No result for this search !!</h4> : (allTours?.map((tour,index) => (
              <Link href={`${lang}/tours/${encodeURIComponent(tour?.translation?.slug)}`} key={index}>
                <h3 className='text-[3.2vw] pb-[3.2vw]'>{tour?.translation?.tourDetail?.banner?.title}</h3>
                <hr/>
              </Link>
            )))}
          </div>}
          <div className='mt-[6.4vw]'>
            <FilterBanner dataFilter={dataFilter} lang={lang} onClose={handleClose}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InputSearchMb
