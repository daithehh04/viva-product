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
        className='w-[6.4vw] h-[6.4vw] object-contain md:w-[1.5vw] md:h-[1.5vw]'
      />
    </button>
  )
}

export default TwitterShare
