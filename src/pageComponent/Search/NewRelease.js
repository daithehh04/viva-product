import BestSeller from '@/components/Common/BestSeller'
import Button from '@/components/Common/Button'
import React from 'react'

const NewRelease = ({ data, lang }) => {
  return (
    <div>
      <div className='mt-[6.69vw]'>
        <h2 className='mb-[3vw] font-optima font-semibold leading-[4.4vw] capitalize text-[4vw] max-md:px-[4.27vw]'>Related News</h2>
        <BestSeller
          isBlogItem={true}
          listBlog={data}
          lang={lang}
        />
      </div>
      <div className='flex md:mt-[4vw] mt-[9.87vw] md:mb-[5.75vw] mb-[14.93vw] justify-center'>
        <Button className='btn-secondary'>See more</Button>
      </div>
    </div>
  )
}

export default NewRelease
