'use client'

import React from 'react'
import twitter from '@/assets/images/twitter.svg'
import Image from 'next/image'
function TwitterShare({ url, title }) {
  const handleClick = () => {
    const twitterUrl = 'https://twitter.com/intent/tweet?'
    const params = new URLSearchParams({
      url: url,
      text: title
    })
    window.open(twitterUrl + params.toString(), '_blank')
  }

  return (
    <button onClick={handleClick}>
      <Image
        src={twitter}
        alt='twitter'
        width={50}
        height={50}
        className='w-[1.5vw] h-[1.5vw] object-contain lg:w-[2.5vw] lg:h-[2.5vw] md:w-[6.4vw] md:h-[6.4vw]'
      />
    </button>
  )
}

export default TwitterShare
