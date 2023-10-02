'use client'
import { createTheme, useMediaQuery } from '@mui/material'
import Link from 'next/link'

import BlogItem2 from './BlogItem2'

function OurBlogHomePage({ data, button, lang }) {
  const theme = createTheme({
    breakpoints: {
      values: {
        sm: 768
      }
    }
  })
  const onlySmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <div className={`flex flex-col ${onlySmallScreen ? 'w-full' : 'content'}`}>
      <span className='heading-1 md:mb-[3vw] mb-[6.4vw] md:pl-0 pl-[4.27vw]' data-aos-once="true"
            data-aos="fade-up"
            data-aos-duration="1000">{data?.title}</span>
      <div className='md:grid md:grid-cols-4 md:grid-rows-2 md:gap-[2.5vw] flex md:overflow-x-visible overflow-x-auto gap-0 listBlog max-md:flex '>
        <div className='hidden md:flex flex-shrink-0 md:col-span-2 md:row-span-2 h-full md:pl-0 pl-[4.27vw]'>
          <BlogItem2
            data={data?.listBlog ? data?.listBlog[4] : null}
            className={`${onlySmallScreen ? '' : 'bigger'}`}
            lang={lang}
          />
        </div>
        {data?.listBlog?.map((blog, index) => {
          if (index < 4)
            return (
              <BlogItem2
                lang={lang}
                data={blog}
                key={index}
                className='flex flex-shrink-0 blogItem max-md:pl-[4.27vw] '
              />
            )
        })}
      </div>
      <div className='flex justify-center md:mb-[7.37vw] md:mt-[3.5vw] mt-[7.47vw]'>
        <Link href='/blog' className='btn-secondary'>
          {button?.buttonseemore}
        </Link>
      </div>
    </div>
  )
}

export default OurBlogHomePage
