'use client'

import Image from 'next/image'
import Link from 'next/link'

function StyleItem({id, title, image, lang,onCloseMenu}) {
  return (
    <Link
      href={`/travel-style/${id}`}
      className='flex items-center gap-x-[1.32vw]'
      onClick={onCloseMenu}
    >
      <Image
        src={image?.sourceUrl}
        width={100}
        height={100}
        alt={image?.altText}
        className='w-[4.1vw] h-[4.1vw] object-contain'
      />
      <h3 className='uppercase text-[1.0375vw] font-[500] leading-[1.2] text-textColor'>{title}</h3>
    </Link>
  )
}

export default StyleItem
