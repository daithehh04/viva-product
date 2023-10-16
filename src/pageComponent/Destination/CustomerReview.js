'use client'

import ReviewItem from '@/components/Common/ReviewItem'
import Image from 'next/image'
import bannerReview from '@/assets/images/ourtour_CustomerReview_Banner.png'
import { createTheme, useMediaQuery } from '@mui/material'
import Link from 'next/link'
import Button from '@/components/Common/Button'

function CustomerReview({ data, dataInfo, lang }) {
  const theme = createTheme({
    breakpoints: {
      values: {
        sm: 768
      }
    }
  })

  const onlySmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  if(data.length === 0) return
  return (
    <div className='relative'>
      <Image
        alt='bannerReview'
        src={bannerReview}
        className='z-[-1] object-cover top-[-40%] absolute hidden md:block w-full'
      />
      <div className={`flex flex-col md:mt-[7.06vw] mt-[14.93vw] ${onlySmallScreen ? 'w-full' : 'content'}`}>
        <span className='heading-1 md:mb-[3vw] mb-[5.33vw] md:pl-0 pl-[4.27vw]'>{dataInfo?.titleReviews}</span>
        <div className='md:grid grid-cols-2 md:gap-x-[2.5vw] md:gap-y-[2.5vw] hidden-scroll max-md:overflow-x-auto flex gap-0'>
          {data?.map((item, index) => (
            <div
              key={index}
              className={`${onlySmallScreen ? 'ml-[4.27vw]' : ''}`}
            >
              <ReviewItem
                className='hidden md:flex'
                data={item}
                lang={lang}
              />
              <ReviewItem
                className={`md:hidden block our-tours-item-mobile w-[74.66vw] ${
                  index === data.length - 1 ? 'mr-[4.27vw]' : ''
                }`}
                data={item}
                lang={lang}
              />
            </div>
          ))}
        </div>
        <div className='flex justify-center md:mt-[4vw] mt-[7.61vw]'>
          <Link
            href={`/about-us/reviews`}>
            <Button className='btn-secondary' content={dataInfo?.btn}><span>{dataInfo?.btn}</span></Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CustomerReview
