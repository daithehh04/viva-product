import calendar from '@/assets/images/calendar_blogItem.svg'
import Image from 'next/image'
import Link from 'next/link'
import moment from 'moment'

function BlogItem({ className, data, lang, heightImage }) {
  return (
    <Link
      href={`/${lang}/${data?.translation?.slug || data?.slug}`}
      className={`blog-item md:!w-[19.0625vw] !h-auto w-[52.26667vw] max-md:flex flex-shrink-0 max-md:ml-[4.27vw] ${className}`}
    >
      <div className={`w-full`}>
        <div className='relative image'>
          <Image
            src={data?.featuredImage?.node?.sourceUrl || data?.translation?.featuredImage?.node?.sourceUrl}
            width={1000}
            height={1000}
            alt='img'
            className={`md:!h-[16.3125vw] h-[52.26667vw] object-cover md:rounded-[0.5vw] rounded-[2.13333vw] ${className} ${heightImage}`}
          />
          <span className='absolute md:top-[1.62vw] top-[3.69vw] md:left-[-0.375vw] left-[-1.67vw] md:px-[1vw] md:py-[0.25vw] px-[4.27vw] py-[1.07vw] bg-primaryColor md:text-[1vw] lg:text-[0.75vw] text-[2.66667vw] font-[500] rounded-r-[0.25vw] tip-review'>
            {data?.blogdetail?.subtitle1}
          </span>
        </div>
        <div className='flex items-center md:gap-x-[0.64vw] gap-x-[1.07vw] mt-[2.67vw] md:mt-[1vw] info'>
          <Image
            src={calendar}
            width={100}
            height={100}
            alt='calendar'
            className='md:w-[1.2vw] lg:w-[0.84375vw] opacity-60 w-[2.4vw] h-[2.66667vw] md:h-[1.4vw] lg:h-[0.9375vw] object-cover'
          />
          <span className='md:text-[1.2vw] lg:text-[0.875vw] opacity-60 text-[2.66667vw] leading-none'>
            {data?.blogdetail?.time || moment(data?.dateGmt)?.format('DD MMMM YYYY')}
          </span>
        </div>
        <h4 className='  md:text-[1.25vw] text-[3.73333vw] line-clamp-2 font-[700] leading-[1.4] md:mt-[0.78vw] mt-[1.07vw] title max-lg:leading-normal'>
          <a className='title__ourBlog '>{data?.title}</a>
        </h4>
        <p
          className='md:text-[1.1vw] lg:text-[0.875vw] text-ellipsis line-clamp-2 opacity-60 text-[2.66667vw] font-[500] desc leading-normal md:mt-[0.5vw] mt-[1.07vw]'
          dangerouslySetInnerHTML={{ __html: `${data?.excerpt}` }}
        ></p>
      </div>
    </Link>
  )
}

export default BlogItem
