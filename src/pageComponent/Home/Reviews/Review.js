import VideoReview from './VideoReview'
import SlideReview from './SlideReview'
import Button from '@/components/Common/Button'

function Review({ data }) {
  // console.log(data?.customerReview?.customerReview, 213213)
  return (
    <>
      <div className='flex gap-x-[2vw] items-end overflow-hidden custom-review pt-[9.37vw]'>
        <div className='w-[35.1875vw] max-md:hidden'>
          <VideoReview
            data={data?.video}
            videoInfo={data?.customerReview?.customerReview}
          />
        </div>
        <div className='w-[62vw] max-md:w-full'>
          <h2 className='heading-1 max-md:pl-[4.27vw]'>{data?.title}</h2>
          <p className='text-[1.125vw] leading-normal mb-[5.31vw] w-[30.875vw] max-md:text-[3.73vw] max-md:w-full max-md:pl-[4.27vw] max-md:mt-[2.13vw]'>
            {data?.text}
          </p>
          <SlideReview data={data?.listReview} />
        </div>
      </div>
      <div className='mt-[3.5vw] flex justify-center max-md:hidden'>
        <Button className='btn-secondary'>See more</Button>
      </div>
    </>
  )
}

export default Review
