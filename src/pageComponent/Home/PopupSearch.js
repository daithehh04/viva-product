"use client"

import Loading from "@/components/Common/Loading";
import { DATA_SEARCH_TEXT_TOUR } from "@/graphql/filter/queries";
import { useQuery } from "@apollo/client";
import { useState } from "react";

function PopupSearch() {
  const [text,setText] = useState('')
  function handleInput(e){
    setText(e.target.value)
  }

  const {data,loading} = useQuery(DATA_SEARCH_TEXT_TOUR, {
    variables: {
      title: text
    }
  })
  console.log('data',data?.allTours?.nodes);
  return (
    <div className='w-[80vw] h-[80vh] bg-white relative z-10'>
      <input type="text" placeholder='Search...' className='w-full border-none p-[1.25vw] outline-none text-[1.12vw]' onInput={handleInput}/>
      <hr />
      <div className="p-[1.25vw]">
        {loading ? <div className="flex items-center justify-center w-full">
          <Loading/>
        </div> : 'successfully'}
      </div>
    </div>
  )
}

export default PopupSearch