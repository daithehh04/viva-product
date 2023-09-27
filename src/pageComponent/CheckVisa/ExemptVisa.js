import Image from 'next/image'

function ExemptVisa({ title, desc, image }) {
  return (
    <div className='md:mt-[6.13vw] md:mb-0 mb-[14.93vw] w-full md:rounded-[1vw] rounded-[2.13333vw] relative'>
      <div className='absolute exempt-visa inset-0 z-[-1] md:rounded-[1vw] rounded-[2.13333vw]'></div>
      <div className='flex md:flex-row flex-col md:pt-0 pt-[7.73vw] md:pl-0 pl-[4.53vw] md:pr-0 pr-[4.8vw]'>
        <div className='flex flex-col md:pl-[3.75vw] md:pt-[3.62vw] md:pb-[4.56vw] md:w-[58.3125vw]'>
          <h2 className='text-[#138140] font-optima md:text-[2.5vw] text-[5.86667vw] font-semibold leading-[110%] md:mb-[1.5vw] mb-[2.13vw]'>
            {title}
          </h2>
          <p className='md:w-[57.6vw] text-textColor md:text-[1vw] text-[3.73333vw] leading-[150%] opacity-80 md:mb-0 mb-[1.6vw]'>
            {desc}
          </p>
        </div>
        <div>
          <Image
            alt='plane'
            src={image}
            quality={100}
            className='object-cover relative md:right-0 right-[-15%] md:h-[18vw] h-[50.67093vw]  w-[75.36507vw] md:w-[26.88781vw]'
          />
        </div>
      </div>
    </div>
  )
}

export default ExemptVisa
