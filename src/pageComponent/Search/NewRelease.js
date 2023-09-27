import BestSeller from '@/components/Common/BestSeller'
import Button from '@/components/Common/Button'
import React from 'react'

const NewRelease = ({ data }) => {
  return (
    <div>
      <div className='mt-[6.69vw]'>
        <h2 className='mb-[3vw] font-optima font-semibold leading-[4.4vw] capitalize text-[4vw]'>Related News</h2>
        <BestSeller
          isBlogItem={true}
          listBlog={data}
        />
      </div>
      <div className='flex mt-[4vw] mb-[5.75vw] justify-center'>
        <Button className='btn-secondary'>See more</Button>
      </div>
    </div>
  )
}

export default NewRelease
