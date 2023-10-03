import Image from 'next/image'
import React from 'react'

const data = {
  title: 'tour 1',
  img: 'https://viva-cms.okhub.tech/wp-content/uploads/2023/09/des-menu-2.png'
}
function TourSearch() {
  return (
    <div className='flex gap-[1vw]'>
      <Image src={data?.img} width={50} height={50} alt='img' className='w-[3vw] h-[3vw] object-cover'/>
      <h3>{data?.title}</h3>
    </div>
  )
}

export default TourSearch