import imgReview from '@/assets/images/imgReview.png'
import avatar from '@/assets/images/avatar.png'
import location from '@/assets/images/locationF.svg'
import calendar from '@/assets/images/calendar.svg'
import commaRes from '@/assets/images/about/commaRes.svg'

import Image from 'next/image'
import Link from 'next/link'

function ReviewItem({ className, data }) {
  // className prop is mush have a wrapper's class to overwrite css
  return (
    <div
      className={`${
        className || ''
      } review-item-wrapper md:p-[1vw] px-[4.8vw] py-[6.4vw] rounded-[8px] md:border border-solid border-[#ccc] flex md:flex-row flex-col md:gap-[1vw] gap-[4.8vw] bg-[#fff]`}
    >
      <div className='overflow-hidden md:rounded-lg'>
        <Image
          src={data?.customerReview?.image?.sourceUrl || imgReview}
          width={1000}
          height={1000}
          alt={data?.customerReview?.image?.altText || 'img'}
          className={`review-item-img md:w-[18.0625vw] w-full md:h-[19.125vw] h-[60vw] rounded-[8px] object-cover`}
        />
      </div>

      {/* content */}

      <div
        className={`review-item-content relative flex flex-1 md:flex-col flex-col-reverse justify-between md:pt-[0.5vw] gap-[2.93vw] md:gap-0`}
      >
        <div>
          <Link
            href={'#'}
            className='md:text-[1.25vw] text-[3.733vw] md:leading-[1.35] leading-normal font-bold text-textColor tracking-[-0.4px] md:mb-[0.62vw]'
          >
            {data?.customerReview?.title}
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
              <span className='leading-normal ml-[0.25vw]'>
                {data?.authorInformation?.country || data?.customerReview?.authorInformation?.country}
              </span>
            </div>
            <div className='md:ml-[1.75vw] ml-[4.26vw] flex items-center'>
              <Image
                src={calendar}
                width={100}
                height={100}
                alt='calendar'
                className='md:w-[0.75vw] w-[3.2vw] md:h-[0.83vw] h-[3.2vw] object-cover'
              />
              <span className='leading-normal ml-[0.3vw]'>{data?.time || data?.customerReview?.time}</span>
            </div>
          </div>

          <div className='relative'>
            <p className='md:text-[0.875vw] text-[3.73vw] opacity-60 md:opacity-70 leading-normal mt-[3.2vw] md:mt-0 md:line-clamp-4 line-clamp-3'>
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
              src={data?.customerReview?.thumbnail?.sourceUrl || avatar}
              width={100}
              height={100}
              alt={data?.customerReview?.authorInformation?.thumbnail?.altText || 'avatar'}
              className='user-avatar md:w-[2.9375vw] w-[11.2vw] h-[11.2vw] md:h-[2.9375vw] rounded-full object-cover'
            />
            <div className='flex flex-col justify-center'>
              <h4 className='md:text-[1vw] text-[3.73vw] font-bold capitalize'>
                {data?.customerReview?.authorInformation?.name}
              </h4>
              <span className='md:text-[0.875vw] text-[3.73vw] opacity-60 md:opacity-100 leading-normal'>
                {data?.customerReview?.authorInformation?.country}
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
                {data?.customerReview?.location}
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
              <span className='leading-normal ml-[0.3vw]'>{data?.customerReview?.time}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewItem
