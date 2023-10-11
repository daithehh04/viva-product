'use client'
import Image from 'next/image'
import Link from 'next/link'

function TravelStyleMb({ data, title, lang }) {
  return (
    <div className='hidden max-md:block pt-[10.67vw] pb-[15.73vw]'>
      <h2 className='heading-1 pb-[5.33vw] border-b border-solid border-[#ccc] text-center mx-[4.27vw]'>{title}</h2>
      <div className='grid menu-mb_item grid-cols-3 gap-x-[12.27vw] gap-y-[5.6vw] mt-[5.33vw] px-[4.27vw] '>
        {data?.travelStyleList?.map((item, index) => (
          <div key={index}>
            <Link
              href={`/${lang}/travel-style/${item?.slug}`}
              className='flex flex-col items-center'
            >
              <div className='w-[17.3vw] h-[17.3vw] rounded-full border border-solid border-primaryColor flex items-center justify-center bg-[#FFFBE9]'>
                <Image
                  src={item?.banner?.travelStyleInfo?.travelStyleImage?.sourceUrl}
                  width={50}
                  height={50}
                  alt={item?.image?.altText}
                  className='w-[10.8vw] h-[10.8vw] object-center object-contain'
                />
              </div>
              <span className='uppercase text-[2.93333vw] text-textColor font-[500] leading-[120%] mt-[1.6vw] block'>
                {item?.banner?.travelStyleInfo?.travelStyleName?.split(',')[0]?.length > 8 ? `${item?.banner?.travelStyleInfo?.travelStyleName?.split(',')[0].slice(0,10)}...` : item?.banner?.travelStyleInfo?.travelStyleName?.split(',')[0] }
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TravelStyleMb
