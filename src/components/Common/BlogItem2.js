import calendarY from '@/assets/images/calendarY.svg'
import calendarW from '@/assets/images/calendarW.svg'
import Image from 'next/image'
import Link from 'next/link'
import moment from 'moment'

function BlogItem2({ className, data, lang, isHomePage }) {
  return (
    <Link
      href={`/${data?.slug}`}
      className={`${className} relative item-blog_2 md:rounded-[0.5vw] rounded-[2.13333vw]`}
    >
      <div className='relative w-full'>
        <div className='relative image'>
          <div className='overlay-blog'></div>
          <div className='overlay-blog-left'></div>
          <Image
            src={data?.featuredImage?.node?.sourceUrl}
            width={1000}
            height={1000}
            alt='img'
            className='md:h-[19.0625vw] h-[81.33333vw] md:w-full w-[74.93333vw] object-cover md:rounded-[1vw] rounded-[2.13333vw] img-blog_2'
          />
          <span className='absolute md:top-[1.62vw] top-[6.93vw] md:left-[-0.375vw] left-[-1.375vw] md:px-[1vw] md:py-[0.25vw] py-[1.07vw] px-[4.27vw] bg-[#FFD220] md:text-[0.75vw] text-[2.66667vw] font-[500] rounded-r-[0.25vw] tip-review'>
            {data?.blogdetail?.subtitle1}
          </span>
        </div>
        <div className='absolute bottom-0 md:pb-[1vw] pb-[5.3vw] md:pl-[1.13vw] pl-[4.8vw] md:pr-[2vw] pr-[2.4vw] info'>
          <div className='flex items-center gap-x-[0.64vw] md:mb-0 mb-[1vw]'>
            <Image
              src={calendarY}
              width={300}
              height={300}
              alt='calendar'
              className='max-lg:scale-150 w-[0.84375vw] max-md:w-[2.26667vw] md:h-[0.9375vw] max-md:h-[2.26667vw] object-cover'
            />
            <span className='md:text-[0.875vw] text-[3.2vw] leading-none text-[#fff]'>
              {moment(data?.dateGmt)?.format('DD MMMM YYYY')}
            </span>
          </div>
          <h4 className='line-clamp-2'>
            <a
              className='text-[1vw] max-md:text-[3.73333vw] font-[700] leading-[1.4] mt-[0.47vw] max-md:mt-[2.4vw] text-[#fff] title 
            max-lg:leading-[0.2px]'
            >
              {data?.title}
            </a>
          </h4>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem2
