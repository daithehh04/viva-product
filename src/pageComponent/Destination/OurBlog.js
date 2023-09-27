'use client'
import BlogItem2 from '@/components/Common/BlogItem2'
import { createTheme, useMediaQuery } from '@mui/material'
import Link from 'next/link'

function OurBlog() {
  const theme = createTheme({
    breakpoints: {
      values: {
        sm: 768
      }
    }
  })
  const onlySmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const listBlogs = new Array(4).fill(0)
  return (
    <div className={`flex flex-col ${onlySmallScreen ? 'w-full' : 'content'}`}>
      <span className='heading-1 md:mb-[3vw] mb-[6.4vw] md:pl-0 pl-[4.27vw]'>Our Blog</span>
      <div className='md:grid md:grid-cols-4 md:grid-rows-2 md:gap-[2.5vw] flex md:overflow-x-visible overflow-x-auto gap-0 listBlog'>
        <div className='flex flex-shrink-0 md:col-span-2 md:row-span-2 h-full md:pl-0 pl-[4.27vw]'>
          <BlogItem2 className={`${onlySmallScreen ? '' : 'bigger'}`} />
        </div>
        {listBlogs?.map((blog, index) => (
          <BlogItem2
            key={index}
            className='md:pl-0 pl-[4.27vw] flex flex-shrink-0 blogItem '
          />
        ))}
      </div>
      <div className='flex justify-center md:mb-[7.37vw] md:mt-[3.5vw] mt-[7.47vw]'>
        <Link
          href='/blog'
          className='btn-secondary'
        >
          See more
        </Link>
      </div>
    </div>
  )
}

export default OurBlog
