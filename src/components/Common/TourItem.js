'use client'
import imgTour from '@/assets/images/tour.png'
import imgLocation from '@/assets/images/route-square.svg'
import imgStar from '@/assets/images/star-rate.svg'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { iconsTour } from '@/lib/Icons'
import { Skeleton, useMediaQuery } from '@mui/material'
import { useQuery } from '@apollo/client'
import theme from '../ThemeRegistry/theme'

function TourItem({ data, menu, lang, loading, className, onCloseMenu }) {
  const tourData = data?.translation?.tourDetail?.banner || data?.tourDetail?.banner
  const price = data?.translation?.tourDetail?.priceTour
  let icons = null
  if (tourData?.rate) icons = new Array(Math.round(tourData?.rate)).fill(0)
  const pathName = usePathname()
  const isPromotion = pathName.includes('hot-deals')
  return (
    <Link
      onClick={onCloseMenu}
      href={`/${lang}/${isPromotion || menu ? 'hot-deals' : 'tours'}/${encodeURIComponent(data?.translation?.slug)}`}
      className={`h-[44.23vw] ${menu ? 'lg:h-[14.5vw] w-[52.5vw]' : 'md:h-[24.5vw]'} flex md:rounded-[1vw] rounded-[2.75vw] relative max-lg:flex-shrink-0 tour-item cursor-pointer`}
    >
      {!loading ? (
        <Image
          src={tourData?.gallery ? tourData?.gallery[0]?.sourceUrl : imgTour}
          width={1000}
          height={1000}
          priority
          alt='img tour'
          className='h-full object-cover w-full md:rounded-[1vw] rounded-[2.75vw] img-tour'
        />
      ) : (
        <Skeleton variant='rounded' width={'100%'} height={'100%'} />
      )}
      {!loading ? <div className='absolute overlay'></div> : ''}
      <div className='absolute bottom-0 info md:pl-[1.5vw] md:pr-[0.94vw] px-[3.2vw] md:pb-[1.19vw] pb-[3.2vw] w-full'>
        {!loading ? (
          <div className='flex items-center gap-x-[0.25vw]'>
            <Image
              src={imgLocation}
              width={100}
              height={100}
              alt='location'
              className='md:w-[2vw] lg:w-[1vw] md:h-[2vw] lg:h-[1vw] w-[2.66vw] h-[2.66vw] object-cover'
            />
            <span className='leading-normal text-primaryColor max-lg:text-[1.4vw] text-[0.875vw] max-md:text-[2.66vw]'>
              {tourData?.location}
            </span>
          </div>
        ) : (
          <Skeleton variant='text' sx={{ fontSize: '1rem' }} />
        )}

        <h3 className='line-clamp-2 '>
          <Link
            href={`/${lang}/${isPromotion || menu ? 'hot-deals' : 'tours'}/${encodeURIComponent(
              data?.translation?.slug
            )}`}
            className={`text-white ${
              !loading ? 'title-tour' : ''
            } max-lg:text-[1.6vw] text-[1.125vw] max-md:text-[2.93vw] font-bold tracking-tight leading-[1.2] mt-[0.25vw] ${className}`}
          >
            {!loading ? tourData?.title : <Skeleton variant='text' sx={{ fontSize: '2rem' }} />}
          </Link>
        </h3>
        {/* icons*/}
        <div className='flex md:hidden gap-[1vw] mt-[1.33vw]'>
          {tourData?.icons?.map((icon, index) => {
            return (
              <div
                key={index}
                className='w-[4.8vw] h-[4.8vw] rounded-[6px] bg-[#FFF8DE] flex items-center justify-center'
              >
                <Image src={iconsTour[icon]} alt={icon} className='w-[2.613vw] h-[2.613vw]' width={20} height={20} />
              </div>
            )
          })}
        </div>
        <div className='flex items-center justify-between md:mt-[0.81vw] mt-[2.13vw]'>
          {!loading ? (
            <span className='text-primaryColor max-lg:text-[1.2vw] text-[1vw] max-md:text-[2.67vw]'>${price}</span>
          ) : (
            <Skeleton variant='rectangular' width={'80%'} height={50} />
          )}
          {!loading ? (
            <div className='text-[#434447] md:gap-x-[0.2vw] gap-x-[0.8vw] flex items-center
             md:text-[1.2vw] lg:text-[0.75vw] text-[2.67vw] bg-white md:py-[0.19vw] md:px-[1w] lg:px-[0.5vw] px-[1.28vw] 
             py-[0.5vw] rounded-full w-fit'>
              {tourData?.rate}
              <Image
                src={imgStar}
                width={100}
                height={100}
                alt='star'
                className='md:w-[1.2vw] lg:w-[0.6875vw] md:h-[1.2vw] lg:h-[0.6875vw] w-[2.56vw] h-[2.56vw] object-cover'
              />
            </div>
          ) : (
            <Skeleton variant='circular' width={50} height={50} />
          )}
        </div>
      </div>
    </Link>
  )
}

export default TourItem
