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
        className='w-[6.4vw] h-[6.4vw] object-contain md:w-[1.5vw] md:h-[1.5vw]'

      />
    </button>
  )
}

export default LinkedInShare
