import banner from '@/assets/images/blogDetail_Banner.png'
import Image from 'next/image'
import FaceBookShare from './FaceBookShare'
import LinkedInShare from './LinkedInShare'
import TwitterShare from './TwitterShare'

function TextBlogDetail({ data }) {
  const blogdetail = data?.data?.postBy?.translation?.blogdetail
  const urlDetail = data?.data?.postBy?.translation

  return (
    <div className='md:mt-[1.56vw] mt-[4.2vw] w-full md:px-[16.25vw] px-[4.27vw] md:mb-[7vw] mb-[15.47vw]'>
      <div className='flex md:gap-[0.5vw] gap-[2.13vw] md:mb-[1vw] mb-[4.27vw]'>
        <div className='md:h-[1.875vw] md:px-[1vw] md:py-[0.25vw] py-[1.067vw] px-[4.27vw] flex items-center justify-center md:gap-[0.625vw] md:rounded-[0.25vw] rounded-[1.067vw] bg-primaryColor'>
          <span className='text-textColor text-center font-manrope md:text-[0.75vw] text-[3.2vw] font-medium leading-[150%]'>
            {blogdetail?.subtitle1}
          </span>
        </div>
        <div className='md:h-[1.875vw] md:px-[1vw] md:py-[0.25vw] py-[1.067vw] px-[4.27vw] flex items-center justify-center md:gap-[0.625vw] md:rounded-[0.25vw] rounded-[1.067vw] bg-primaryColor'>
          <span className='text-textColor text-center font-manrope md:text-[0.75vw] text-[3.2vw] font-medium leading-[150%]'>
            {blogdetail?.subtitle2}
          </span>
        </div>
      </div>
      <div
        className='content-container'
        dangerouslySetInnerHTML={{ __html: `${data?.data?.postBy?.translation?.content}` }}
      ></div>
      <div className='w-full md:mt-[1.31vw] mt-[5.067vw] md:mb-[1.62vw] mb-[3.73vw] h-[1px] bg-[#44444424]'></div>
      <div className='flex justify-end items-center'>
        <span className='text-textColor  md:text-[0.875vw] text-[3.73vw] font-bold md:leading-[1.25] leading-[1.42] uppercase md:mr-[0.81vw] mr-[3.47vw]'>
          {blogdetail?.transtitle?.share}
        </span>
        <div className='flex items-center'>
          <TwitterShare url={urlDetail?.link} title={urlDetail?.title} />
          <FaceBookShare url={urlDetail?.link} title={urlDetail?.title} />
          <LinkedInShare url={urlDetail?.link} title={urlDetail?.title} />
        </div>
      </div>
    </div>
  )
}

export default TextBlogDetail
