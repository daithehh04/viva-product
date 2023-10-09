'use client'

import { iconsTour } from '@/lib/Icons'
import Image from 'next/image'

export default function TourDetailStep({ data: tourDetailData, icons }) {
  return (
    <>
      <div>
        {tourDetailData?.map((tour, index) => {
          return (
            <div
              className='mb-[2.13vw] md:mb-[0]'
              key={index}
            >
              <div className='flex font-medium leading-normal md:h-[2.375vw] h-[11.2vw] md:items-center md:gap-[1.625vw] gap-[2.67vw]'>
                <div className='bg-primaryColor md:h-[2.375vw] h-[5.86vw] md:w-[2.375vw] w-[10vw] md:text-[1vw] text-[2.66vw] rounded-full flex items-center justify-center mt-[1vw] md:mt-0'>
                  {index + 1}
                </div>
                <div className='lg:text-[1.125vw] md:text-[1.4vw] text-[3.733vw]'>{tour?.heading}</div>
              </div>
              <div className='lg:text-[1vw] md:text-[1.4vw] text-[3.733vw] leading-normal md:pl-[3.75vw] pl-[5.6vw] md:pb-[3.125vw] md:pt-0 pt-[5.2vw] pb-[8.53vw] md:ml-[1.1875vw] ml-[2.93vw] md:my-[0.75vw] my-[-2vw] border-l border-dashed border-primaryColor flex flex-col md:gap-[1.5vw] gap-[5.6vw]'>
                <div className='text-justify opacity-80'>{tour?.desc}</div>

                {/* image */}
                <div className={`${!tour?.gallery && 'hidden'}`}>
                  {tour?.gallery?.map((img, index) => {
                    return (
                      <Image
                        src={img?.sourceUrl}
                        alt={img?.altText}
                        key={index}
                        width={500}
                        height={500}
                        className=' md:max-h-[26.25vw] md:w-[50.0625vw] max-h-[40vw] object-cover mb-[1vw] rounded-[1.06667vw] md:rounded-[0.625vw]'
                      />
                    )
                  })}
                </div>
                {/* icon */}
                <div className='flex md:gap-[0.625vw] gap-[2.13vw]'>
                  {icons &&
                    icons?.length > 0 &&
                    icons?.map((icon, index) => {
                      return (
                        <Image
                          alt={icon}
                          src={iconsTour[icon]}
                          key={index}
                          width={40}
                          height={40}
                          className='md:w-[2.375vw] w-[8vw] md:h-[2.375vw] h-[8vw] md:p-[0.55vw] p-[1.8vw] bg-[#FFF2BD] md:rounded-[5px] rounded-[4px]'
                        />
                      )
                    })}
                </div>

                <div className='flex flex-col md:gap-[1vw] gap-[2.67vw]'>
                  {tour?.place?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className='flex md:gap-[0.625vw] gap-[2.13vw] items-center'
                      >
                        <Image
                          src={item?.image?.sourceUrl}
                          alt={item?.image?.altText}
                          width={40}
                          height={40}
                          className='md:w-[3vw] w-[10.67vw] md:h-[3vw] h-[10.67vw] object-cover'
                        />
                        <span>{item?.placeName}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
