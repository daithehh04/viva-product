"use client"
import Image from 'next/image'
import searchIcon from '@/assets/images/search-mb.svg'
import { useData } from './DataContextMenu';

function InputSearchHome() {
  const { dataInput, setDataInput } = useData(null);
  function handleInput(e){
    setDataInput(e.target.value)
  }

  return (
    <div className='ml-[3.73vw] mr-[5.33vw] relative'>
      <input
        type='text'
        className='rounded-full search-mb w-full h-[9.3vw] border border-solid border-[#eee] outline-none pl-[4.27vw] text-[3.2vw]'
        placeholder='Please enter keywords'
        onInput={handleInput}
        autoFocus = {true}
      />
      <div className='search-mb-btn w-[7.46vw] h-[7.46vw] rounded-full flex items-center justify-center bg-[#eee] cursor-pointer absolute right-[1.07vw] top-[50%] -translate-y-1/2'>
        <Image
          src={searchIcon}
          width={50}
          height={50}
          alt='icon'
          className='w-[3.73vw] h-[3.73vw] relative z-10'
        />
      </div>
    </div>
  )
}

export default InputSearchHome
