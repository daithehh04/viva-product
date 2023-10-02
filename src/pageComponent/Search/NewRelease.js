import BestSeller from '@/components/Common/BestSeller'
import Button from '@/components/Common/Button'
import React from 'react'

const NewRelease = ({ data, lang }) => {
  return (
    <div>
      <div className='md:mt-[6.69vw] mt-[12.8vw]'>
        <h2 className='md:mb-[3vw] mb-[6.4vw] font-optima font-semibold leading-[4.4vw] max-md:pl-[4.27vw] capitalize text-[4vw]'>
          Related News
        </h2>
        <BestSeller lang={lang} isBlogItem={true} listBlog={data} />
      </div>
      <div className='flex md:mt-[4vw] mt-[9.87vw] md:mb-[5.75vw] mb-[14.93vw] justify-center'>
        <Button className='btn-secondary'>See more</Button>
      </div>
    </div>
  )
}

export default NewRelease
