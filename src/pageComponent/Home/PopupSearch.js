'use client'

import Loading from '@/components/Common/Loading'
import { DATA_SEARCH_TEXT_TOUR } from '@/graphql/filter/queries'
import { useQuery } from '@apollo/client'
import { useState } from 'react'
import TourSearch from './TourSearch'

function PopupSearch({ lang, onClose }) {
  const [text, setText] = useState('')
  function handleInput(e) {
    setText(e.target.value)
  }

  const { data, loading } = useQuery(DATA_SEARCH_TEXT_TOUR, {
    variables: {
      title: text,
      language: lang?.toUpperCase()
    }
  })
  const allTours = data?.allTours?.nodes
  return (
    <div className='w-[80vw] h-[80vh] bg-white relative z-10 overflow-y-auto'>
      <input
        type='text'
        placeholder='Search...'
        className='w-full border-none p-[1.25vw] outline-none text-[1.12vw]'
        onInput={handleInput}
      />
      <hr />
      <div className='p-[1.25vw]'>
        {loading ? (
          <div className='flex items-center justify-center w-full'>
            <Loading />
          </div>
        ) : (
          <div className='flex flex-col gap-[1vw]'>
            {allTours?.length === 0 ? (
              <h4 className='text-[1.1vw]'>No result for this search !!</h4>
            ) : (
              allTours?.map((tour, index) => (
                <TourSearch
                  onClose={onClose}
                  data={tour}
                  key={index}
                  lang={lang}
                />
              ))
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default PopupSearch
