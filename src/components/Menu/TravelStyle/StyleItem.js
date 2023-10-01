'use client'

import Image from 'next/image'
import Link from 'next/link'

function StyleItem({id, title, image, lang,onCloseMenu}) {
  return (
    <Link
      href={`/${lang}/travel-style/${id}`}
      className='flex items-center gap-x-[1.32vw]'
      onClick={onCloseMenu}
    >
      <Image
        src={image?.sourceUrl}
        width={100}
        height={100}
        alt={image?.altText}
        className='w-[5.1vw] h-[5.1vw] object-cover'
      />
      <h3 className='uppercase text-[1.4375vw] font-[500] leading-[1.2] text-textColor'>{title}</h3>
    </Link>
  )
}

export default StyleItem
