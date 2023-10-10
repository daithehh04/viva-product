import locationIcon from '@/assets/images/route-square.svg'
import calendarIcon from '@/assets/images/calendarY.svg'
import quote from '@/assets/images/quote-review.png'
import Image from 'next/image'
import Link from 'next/link'

function ReviewItem({ data, lang }) {
  const tourData = data?.customerReview?.tours?.tourDetail
  const authorInfo = data?.customerReview?.authorInformation
  const tourSlug = data?.customerReview?.tours?.slug
  return (
    <Link
      href={`${lang}/tours/${tourSlug}`}
      className='block relative h-[31.9375vw] rounded-[1vw] max-md:rounded-[3.2vw] max-md:h-[104.8vw] max-md:ml-[4vw] customer-review__item cursor-pointer'
    >
      <Image
        src={tourData?.banner?.gallery && tourData?.banner?.gallery[0]?.sourceUrl}
        alt={(tourData?.banner?.gallery && tourData?.banner?.gallery[0]?.altText) || 'img'}
        width={500}
        height={500}
        className='rounded-[1vw] w-full h-full object-cover max-md:rounded-[3.2vw] customer-review__img'
      />
      <div className='top absolute top-0 pt-[1.5vw] pl-[1.5vw] pr-[2.38vw] z-10 max-md:pt-[4.8vw] max-md:pl-[4.92vw] max-md:pr-[7.88vw]'>
        <h3 className='text-white text-[1.25vw] font-bold leading-[1.3] tracking-tight max-md:text-[4vw] desc max-lg:text-[1.2vw]'>
          {tourData?.banner?.title}
        </h3>
        <div className='flex items-center gap-x-[1.63vw] mt-[1vw] max-md:mt-[3.47vw] max-md:gap-x-[3.47vw]'>
          <div className='flex items-center gap-x-[0.25vw] max-md:gap-x-[0.82vw]'>
            <Image
              src={locationIcon}
              width={50}
              height={50}
              alt='img'
              className='w-[1vw] h-[1vw] max-md:w-[3.2vw] max-md:h-[3.2vw] object-cover'
            />
            <span className='text-white text-[0.875vw] leading-normal max-md:text-[3.2vw] max-lg:text-[1.2vw]'>
              {tourData?.banner?.location}
            </span>
          </div>
          <div className='flex items-center gap-x-[0.25vw] max-md:gap-x-[0.82vw] max-lg:text-[1.2vw]'>
            <Image
              src={calendarIcon}
              width={50}
              height={50}
              alt='img'
              className='w-[1vw] h-[1vw] max-md:w-[3.2vw] max-md:h-[3.2vw] object-cover'
            />
            <span className='text-white text-[0.875vw] leading-normal max-md:text-[3.2vw] max-lg:text-[1.4vw]'>
              {tourData?.numberDay} Day
            </span>
          </div>
        </div>
      </div>
      <div className='bottom absolute bottom-0 px-[1.5vw] pb-[1.88vw] z-10 max-md:pb-[6.4vw] max-md:px-[6.5vw]'>
        <div className='flex items-center gap-[0.75vw] max-md:gap-[2.5vw]'>
          <div className='border-[2px] border-white border-solid w-[3.5vw] h-[3.5vw] max-md:w-[11.46vw] max-md:h-[11.46vw] rounded-full'>
            <Image
              src={authorInfo?.thumbnail?.sourceUrl || avatar}
              width={100}
              height={100}
              alt={authorInfo?.thumbnail?.altText || 'avatar'}
              className='object-cover w-full h-full rounded-full'
            />
          </div>
          <div className='flex flex-col'>
            <span className='text-[1.125vw] font-bold capitalize text-white leading-normal max-md:text-[3.73vw] max-lg:text-[1.4vw]'>
              {authorInfo?.name}
            </span>
            <span className='text-white text-[0.875vw] leading-normal max-md:text-[2.93vw] max-lg:text-[1.2vw] '>{authorInfo?.country}</span>
          </div>
        </div>
        <div className='flex mt-[1.25vw] ml-[-1vw] max-md:mt-[3.3vw]'>
          <Image
            src={quote}
            width={100}
            height={100}
            alt='quote'
            className='w-[2.75vw] h-[2.75vw] object-cover mt-[-0.95vw]'
          />
          <Link
            href={'/'}
            className='text-white inline text-[1vw] font-[500] leading-normal ml-[-1.25vw] max-md:text-[3.2vw] max-lg:text-[1.2vw]'
          >
            {data?.customerReview?.content.length >= 68
              ? `${data?.customerReview?.content?.slice(0, 68)}...`
              : data?.customerReview?.content}
          </Link>
        </div>
      </div>
      <div className='absolute top-0 left-0 right-0 overlayReview-top rounded-[1vw] max-md:rounded-[3.2vw] h-[13.6875vw] max-md:h-[58vw]'></div>
      <div className='absolute inset-0 overlayReview-bottom rounded-[1vw] max-md:rounded-[3.2vw]'></div>
    </Link>
  )
}

export default ReviewItem
