import React from 'react'
import logo from '@/assets/images/logo-white.svg'
import close from '@/assets/images/close-white.svg'
import Image from 'next/image'
import Link from 'next/link'
import InputSearchHome from './InputSearchHome'

function HomeSearch({onClose,lang}) {
  return (
    <div className='bg-[#138140] flex items-center px-[4.27vw] h-[14.93vw]'>
      <Link href={`/${lang}`} onClick={onClose}>
        <Image
          src={logo}
          width={100}
          height={100}
          alt='viva-travel'
          className='w-[10.4vw] object-cover'
        />
      </Link>
      <div className='flex-1'>
        <InputSearchHome lang = {lang}/>
      </div>
      <Image
        src={close}
        width={50}
        height={50}
        alt='bars'
        className={`w-[4.8vw] h-[2.93vw] ml-auto object-cover cursor-pointer hidden max-lg:block`}
        onClick={onClose}
      />
    </div>
  )
}

export default HomeSearch