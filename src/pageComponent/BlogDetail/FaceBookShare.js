'use client'

import React from 'react'
import facebook from '@/assets/images/facebookBlog.svg'
import Image from 'next/image'
function FaceBookShare({ url, title }) {
  const handleClick = () => {
    const facebookUrl = 'https://www.facebook.com/sharer/sharer.php?'
    const params = new URLSearchParams({
      url: url,
      text: title
    })
    window.open(facebookUrl + params.toString(), '_blank')
  }

  return (
    <button onClick={handleClick}>
      <Image
        src={facebook}
        alt='fb'
        width={50}
        height={50}
        className='w-[6.4vw] h-[6.4vw] object-contain md:w-[1.5vw] md:h-[1.5vw]'
      />
    </button>
  )
}

export default FaceBookShare
