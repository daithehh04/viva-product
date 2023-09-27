import Image from 'next/image'

import searchIcon from '@/assets/images/search-mb.svg'
import arrIcon from '@/assets/images/right-arr.svg'

function InputSearchMb() {
  return (
    <div className='ml-[3.73vw] mr-[5.33vw] relative'>
      <input
        type='text'
        className='rounded-full search-mb w-full h-[9.3vw] border border-solid border-[#171717] outline-none pl-[9.6vw]'
        placeholder='Search'
      />
      <Image
        src={searchIcon}
        width={50}
        height={50}
        alt='icon'
        className='w-[3.73vw] h-[3.73vw] absolute left-[4.27vw] top-[50%] -translate-y-1/2'
      />
      <div className='w-[7.46vw] h-[7.46vw] rounded-full flex items-center justify-center bg-[#eee] cursor-pointer absolute right-[1.07vw] top-[50%] -translate-y-1/2'>
        <Image
          src={arrIcon}
          width={50}
          height={50}
          alt='icon'
          className='w-[2.13vw] h-[2.13vw] relative z-10'
        />
      </div>
    </div>
  )
}

export default InputSearchMb
