'use client'
import Image from 'next/image'
import Link from 'next/link'

function TravelStyleMb({ data, title }) {
  return (
    <div className='hidden max-md:block pt-[10.67vw] pb-[15.73vw]'>
      <h2 className='heading-1 pb-[5.33vw] border-b border-solid border-[#ccc] text-center ml-[4.27vw]'>{title}</h2>
      <div className='grid menu-mb_item grid-cols-3 gap-x-[15.2vw] gap-y-[7.47vw] mt-[5.33vw] px-[2.67vw] '>
        {data?.travelStyleList?.map((item, index) => (
          <div key={index}>
            <Link
              href='travel-style/abs'
              className='flex flex-col items-center'
            >
              <div className='w-[17.3vw] h-[17.3vw] rounded-full border border-solid border-primaryColor flex items-center justify-center bg-[#FFFBE9]'>
                <Image
                  src={item?.banner?.travelStyleInfo?.travelStyleImage?.sourceUrl}
                  width={50}
                  height={50}
                  alt={item?.image?.altText}
                  className='w-[10.8vw] h-[10.8vw] rounded-full object-cover'
                />
              </div>
              <span className='uppercase text-[2.67vw] mt-[1.6vw] block'>
                {item?.banner?.travelStyleInfo?.travelStyleName?.split(',')[0]}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TravelStyleMb
