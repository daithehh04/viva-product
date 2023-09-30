'use client'

import React from 'react'
import linkdin from '@/assets/images/linkedinBlog.svg'
import Image from 'next/image'

function LinkedInShare({ url, title }) {
  const handleClick = () => {
    const linkedInUrl = 'https://www.linkedin.com/sharing/share-offsite/?'
    const params = new URLSearchParams({
      url: url,
      text: title
    })
    window.open(linkedInUrl + params.toString(), '_blank')
  }

  return (
    <button onClick={handleClick}>
      <Image
        src={linkdin}
        alt='linkdin'
        width={50}
        height={50}
        className='w-[1.5vw] h-[1.5vw] object-contain lg:w-[2.5vw] lg:h-[2.5vw] md:w-[6.4vw] md:h-[6.4vw]'
      />
    </button>
  )
}

export default LinkedInShare
