'use client'

import VideoReview from './VideoReview'
import SlideReview from './SlideReview'
import Button from '@/components/Common/Button'
import Link from 'next/link'
import Image from 'next/image'
import tree from '@/assets/images/cayduaHome.png'

function Review({ data, button, lang }) {
  return (
    <>
      <div className='flex gap-x-[2vw] items-end overflow-hidden relative custom-review pt-[9.37vw]'>
        <Image
          alt='tree'
          src={tree}
          quality={100}
          className='max-md:hidden absolute md:w-[22.18vw] md:h-[26.54vw] top-[4%] right-0'
        />
        <div className='w-[35.1875vw] max-md:hidden'>
          <VideoReview
            className='video__review'
            data={data?.video}
            videoInfo={data?.customerReview?.customerReview}
            lang={lang}
          />
        </div>
        <div className='w-[62vw] max-md:w-full'>
          <h2
            data-aos-once='true'
            data-aos-disabled='true'
            data-aos='fade-up'
            data-aos-duration='1000'
            className='heading-1 max-md:pl-[4.27vw]'
          >
            {data?.title}
          </h2>
          <p
            data-aos-once='true'
            data-aos-disabled='true'
            data-aos='fade-up'
            data-aos-duration='1000' 
            className='text-[1.125vw] leading-normal mb-[5.31vw] w-[30.875vw] max-md:text-[3.73vw] max-md:w-full max-md:pl-[4.27vw] max-md:mt-[2.13vw] max-lg:w-[40vw] max-lg:text-[1.6vw]'
          >
            {data?.text}
          </p>
          <SlideReview
            data={data?.listReview}
            lang={lang}
          />
        </div>
      </div>
      <div className='mt-[3.5vw] flex justify-center max-md:hidden'>
        <Link href={`/${lang}/about-us/reviews`}>
          <Button className='btn-secondary' content={button?.buttonseemore}><span>{button?.buttonseemore}</span></Button>
        </Link>
      </div>
    </>
  )
}

export default Review
