import imgReview from '@/assets/images/imgReview.png'
import avatar from '@/assets/images/avatar.png'
import location from '@/assets/images/locationF.svg'
import calendar from '@/assets/images/calendar.svg'
import commaRes from '@/assets/images/about/commaRes.svg'

import Image from 'next/image'
import Link from 'next/link'

function ReviewItem({ className, data, lang }) {
  // className prop is mush have a wrapper's class to overwrite css

  const tourData = data?.customerReview?.tours?.tourDetail
  const authorInfo = data?.customerReview?.authorInformation
  const tourSlug = data?.customerReview?.tours?.slug
  return (
    <div
      className={`${
        className || ''
      } review-item-wrapper md:p-[1vw] px-[4.8vw] py-[6.4vw] rounded-[8px] md:border border-solid border-[#ccc] flex md:flex-row flex-col md:gap-[1vw] gap-[4.8vw] bg-[#fff]`}
    >
      <div className='overflow-hidden rounded-lg max-md:rounded-[2.33vw]'>
        <Image
          src={(tourData?.banner?.gallery && tourData?.banner?.gallery[0]?.sourceUrl) || imgReview}
          alt={(tourData?.banner?.gallery && tourData?.banner?.gallery[0]?.altText) || 'img'}
          width={1000}
          height={1000}
          className={`review-item-img md:w-[18.0625vw] w-full md:h-[19.125vw] h-[60vw] rounded-[8px] max-md:rounded-[2.33vw] object-cover`}
        />
      </div>

      {/* content */}

      <div
        className={`review-item-content relative flex flex-1 md:flex-col flex-col-reverse justify-between md:pt-[0.5vw] gap-[2.93vw] md:gap-0`}
      >
        <div className='md:mb-[0.5vw] lg:mb-0'>
          <Link
            href={`/${lang}/tours/${tourSlug}`}
            className='lg:text-[1.25vw] md:text-[1.4vw] text-[3.733vw] md:leading-[1.35] leading-normal font-bold text-textColor tracking-[-0.4px] md:mb-[0.62vw]'
          >
            {tourData?.banner?.title}
          </Link>

          {/* location & calendar */}
          <div className='md:hidden flex items-center mt-[0.62vw] md:text-[0.875vw] text-[3.2vw]'>
            <div className='flex items-center'>
              <Image
                src={location}
                width={100}
                height={100}
                alt='location'
                className='md:w-[1vw] w-[3.2vw] md:h-[1vw] h-[3.2vw] object-cover'
              />
              <span className='leading-normal ml-[0.25vw]'>{authorInfo?.country}</span>
            </div>
            <div className='md:ml-[1.75vw] ml-[4.26vw] flex items-center'>
              <Image
                src={calendar}
                width={100}
                height={100}
                alt='calendar'
                className='md:w-[0.75vw] w-[3.2vw] md:h-[0.83vw] h-[3.2vw] object-cover'
              />
              <span className='leading-normal ml-[0.3vw]'>{tourData?.numberDay}</span>
            </div>
          </div>

          <div className='relative'>
            <p className='lg:text-[0.875vw] md:text-[1.1vw] text-[3.73vw] opacity-60 md:opacity-70 leading-normal mt-[3.2vw] md:mt-0 lg:line-clamp-4 line-clamp-3'>
              {data?.customerReview?.content}
            </p>
            <Image
              src={commaRes}
              alt='commaRes'
              className='review-icon-comma md:hidden block w-[8.2136vw] h-[5.866vw] absolute top-[37.5%] left-0'
            />
          </div>
        </div>
        <div className='review-item-user'>
          <div className='flex items-center gap-x-[0.63vw]'>
            <Image
              src={authorInfo?.thumbnail?.sourceUrl || avatar}
              width={100}
              height={100}
              alt={authorInfo?.thumbnail?.altText || 'avatar'}
              className='user-avatar md:w-[2.9375vw] w-[11.2vw] h-[11.2vw] md:h-[2.9375vw] rounded-full object-cover'
            />
            <div className='flex flex-col justify-center'>
              <h4 className='lg:text-[1vw] md:text-[1.2vw] text-[3.73vw] font-bold capitalize'>{authorInfo?.name}</h4>
              <span className='md:text-[0.875vw] text-[3.73vw] opacity-60 md:opacity-100 leading-normal'>
                {authorInfo?.country}
              </span>
            </div>
          </div>

          {/* location & calendar */}
          <div className='md:flex hidden items-center mt-[0.62vw] md:text-[0.875vw] text-[3.2vw]'>
            <div className='flex items-center'>
              <Image
                src={location}
                width={100}
                height={100}
                alt='location'
                className='md:w-[1vw] w-[3.2vw] md:h-[1vw] h-[3.2vw] object-cover'
              />
              <span className=' leading-normal ml-[0.25vw] text-textColor opacity-70'>
                {tourData?.banner?.location}
              </span>
            </div>
            <div className='ml-[1.75vw] flex items-center'>
              <Image
                src={calendar}
                width={100}
                height={100}
                alt='calendar'
                className='md:w-[0.75vw] w-[3.2vw] md:h-[0.83vw] h-[3.2vw] object-cover'
              />
              <span className='leading-normal ml-[0.3vw]'>{tourData?.numberDay} Day</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewItem
