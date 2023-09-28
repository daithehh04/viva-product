import banner from '@/assets/images/blogDetail_Banner.png'
import Image from 'next/image'

function TextBlogDetail({ data }) {
  const blogdetail = data?.data?.postBy?.translation?.blogdetail

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
        <svg
          className='md:w-[1.5vw] md:h-[1.5vw] md:mr-[0.5vw] w-[6.4vw] h-[6.4vw] mr-[2.13vw] '
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
        >
          <path
            d='M20 7.03899C19.4009 7.30434 18.7655 7.47843 18.1148 7.55545C18.8001 7.14544 19.313 6.50026 19.5578 5.74016C18.9136 6.12253 18.2087 6.39178 17.4736 6.53625C17.1664 6.20872 16.7953 5.94774 16.3831 5.76949C15.971 5.59124 15.5266 5.49952 15.0776 5.5C13.2649 5.5 11.795 6.96919 11.795 8.78199C11.795 9.03898 11.8241 9.28973 11.8802 9.53009C9.15201 9.39319 6.7334 8.08646 5.11435 6.1006C4.82242 6.60149 4.66903 7.17101 4.6699 7.75074C4.66947 8.29109 4.80254 8.82318 5.0573 9.29973C5.31206 9.77629 5.68061 10.1825 6.1302 10.4824C5.60902 10.4659 5.09932 10.3251 4.64351 10.0719C4.64309 10.0856 4.64309 10.0991 4.64309 10.1132C4.64309 11.7029 5.77448 13.0294 7.27592 13.3312C6.79246 13.4621 6.28556 13.4813 5.79359 13.3873C6.21124 14.6909 7.42345 15.6401 8.85986 15.6667C7.69709 16.5791 6.26121 17.0739 4.78314 17.0717C4.51821 17.0717 4.25703 17.0564 4 17.0258C5.50089 17.99 7.2477 18.5018 9.0317 18.5C15.0695 18.5 18.3712 13.4993 18.3712 9.16279C18.3712 9.02069 18.3679 8.8788 18.3616 8.73774C19.0046 8.27361 19.5595 7.69832 20 7.03899Z'
            fill='#171717'
          />
        </svg>
        <svg
          className='md:w-[1.5vw] md:h-[1.5vw] md:mr-[0.5vw] w-[6.4vw] h-[6.4vw] mr-[2.13vw] '
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
        >
          <path
            d='M13.3333 10.125H16V12.9375H13.3333V19.5H10.6667V12.9375H8V10.125H10.6667V8.94844C10.6667 7.83375 10.9991 6.42562 11.6604 5.65594C12.3218 4.88437 13.1476 4.5 14.1369 4.5H16V7.3125H14.1333C13.6907 7.3125 13.3333 7.68938 13.3333 8.15531V10.125Z'
            fill='#171717'
          />
        </svg>
        <svg
          className='md:w-[1.5vw] md:h-[1.5vw] w-[6.4vw] h-[6.4vw]'
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
        >
          <path
            d='M8.57143 18.5H6V9.5H8.57143V18.5ZM18 18.5H15.4286V13.6922C15.4286 12.4394 15.0034 11.8157 14.1609 11.8157C13.4931 11.8157 13.0697 12.1649 12.8571 12.8642V18.5H10.2857C10.2857 18.5 10.32 10.4 10.2857 9.5H12.3154L12.4723 11.3H12.5254C13.0526 10.4 13.8951 9.7898 15.0506 9.7898C15.9291 9.7898 16.6397 10.0463 17.1823 10.6907C17.7283 11.336 18 12.2018 18 13.4177V18.5Z'
            fill='#171717'
          />
          <path
            d='M7.5 8.5C8.32843 8.5 9 7.82843 9 7C9 6.17157 8.32843 5.5 7.5 5.5C6.67157 5.5 6 6.17157 6 7C6 7.82843 6.67157 8.5 7.5 8.5Z'
            fill='#171717'
          />
        </svg>
      </div>
    </div>
  )
}

export default TextBlogDetail
