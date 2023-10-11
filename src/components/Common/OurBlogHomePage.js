'use client'
import { createTheme, useMediaQuery } from '@mui/material'
import Link from 'next/link'
import AOS from 'aos'
import BlogItem2 from './BlogItem2'
import BlogItem from './BlogItem'
import { useEffect } from 'react'

function OurBlogHomePage({ data, button, lang }) {
  useEffect(() => {
    AOS.init({
      disable: function () {
        var maxWidth = 768
        return window.innerWidth < maxWidth
      }
    })
    AOS.refresh()
  }, [])
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
      <span className='heading-1 md:mb-[3vw] mb-[6.4vw] md:pl-0 pl-[4.27vw]'>{data?.title}</span>
      <div className='grid md:grid-cols-4 max-md:px-[4.27vw] max-md:gap-x-[4.27vw] max-md:gap-y-[8.53vw] grid-rows-2 md:gap-[2.5vw] grid-cols-2 md:overflow-x-visible overflow-x-auto gap-0 listBlog'>
        <div className='hidden md:flex flex-shrink-0 md:col-span-2 md:row-span-2 h-full md:pl-0 pl-[4.27vw]'>
          <BlogItem2
            isHomePage={true}
            data={data?.listBlog ? data?.listBlog[4] : null}
            className={`max-md:hidden ${onlySmallScreen ? '' : 'bigger'}`}
            lang={lang}
          />
        </div>
        {data?.listBlog?.map((blog, index) => {
          if (index < 4)
            return (
              <div key={index}>
                <BlogItem2
                  isHomePage={true}
                  lang={lang}
                  data={blog}
                  className='max-md:hidden flex flex-shrink-0 blogItem max-md:pl-[4.27vw] '
                />

                <BlogItem
                  isHomePage={true}
                  className='md:hidden !ml-0 !w-[43vw]'
                  heightImage={'!h-[43.73333vw]'}
                  data={blog}
                  lang={lang}
                />
              </div>
            )
        })}
      </div>
      <div className='flex justify-center md:mb-[7.37vw] md:mt-[3.5vw] mt-[7.47vw]'>
        <Link
          href={`/${lang}/blog`}
          className='btn-secondary'
          content={button?.buttonseemore}
        >
          <span>{button?.buttonseemore}</span>
        </Link>
      </div>
    </div>
  )
}

export default OurBlogHomePage
