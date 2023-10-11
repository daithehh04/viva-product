import Image from 'next/image'
import inImg from '@/assets/images/about/in.svg'

export default function StaffItem({ staff = {} }) {
  return (
    <div className='md:h-[30.5625vw] h-[80.53vw] staffItem'>
      <Image
        src={staff?.image?.sourceUrl}
        alt={staff?.image?.altText}
        width={1000}
        height={1000}
        className='h-[22vw] w-full max-md:h-auto'
      />
      <div className='md:pl-[1.359vw] pl-[3.677vw] md:pr-[1.43vw] pr-[3.32vw] md:pt-[1.92vw] pt-[5.18vw] md:pb-[2.125vw] pb-[5.05vw]'>
        <div className='flex w-full justify-between items-center g-[2vw] md:mb-[0.75vw] mb-[2vw]'>
          <span className='md:text-[2vw] xl:text-[1.5vw] text-[4vw] font-medium leading-[150%] text-[#171717]'>
            {staff?.name}
          </span>
          <a
            href={staff?.link?.url}
            className='cursor-pointer'
          >
            <Image
              src={inImg}
              alt='image'
              className='md:w-[1.875vw] w-[4.8vw] md:h-[1.875vw] h-[4.8vw]'
            />
          </a>
        </div>
        <div className='md:text-[1.2vw] xl:text-[0.875vw] text-[2.67vw] leading-[170%] opacity-80 color-[#171717]'>
          {staff?.position}
        </div>
      </div>
    </div>
  )
}
