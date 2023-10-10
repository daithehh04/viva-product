'use client'
import BlogItem2 from '@/components/Common/BlogItem2'
import Button from '@/components/Common/Button'
import { createTheme, useMediaQuery } from '@mui/material'
import Link from 'next/link'

function OurBlog({ data, lang }) {
  const dataInfo = data?.country?.blogs
  const theme = createTheme({
    breakpoints: {
      values: {
        sm: 768
      }
    }
  })
  const onlySmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <div className={`flex flex-col mt-[14.93vw] md:mt-[8.28vw] ${onlySmallScreen ? 'w-full' : 'content'}`}>
      <span className='heading-1 md:mb-[3vw] mb-[6.4vw] md:pl-0 pl-[4.27vw]'>{data?.ourTour?.titleBlogs}</span>
      <div className='md:grid md:grid-cols-4 md:grid-rows-2 md:gap-[2.5vw] flex md:overflow-x-visible overflow-x-auto gap-0 listBlog'>
        <div className='flex flex-shrink-0 md:col-span-2 md:row-span-2 h-full md:pl-0 pl-[4.27vw]'>
          {dataInfo?.slice(0, 1).map((item, index) => (
            <BlogItem2 data={item} lang={lang} key={index} className={`${onlySmallScreen ? '' : 'bigger'}`} />
          ))}
        </div>
        {dataInfo?.slice(1, 5)?.map((blog, index) => (
          <BlogItem2 data={blog} lang={lang} key={index} className='md:pl-0 pl-[4.27vw] flex flex-shrink-0 blogItem ' />
        ))}
      </div>
      <div className='flex justify-center md:mb-[7.37vw] md:mt-[3.5vw] mt-[7.47vw]'>
        <Link href='/blog'>
            <Button className='btn-secondary' content={data?.ourTour?.btn}><span>{data?.ourTour?.btn}</span></Button>
        </Link>
      </div>
    </div>
  )
}

export default OurBlog
