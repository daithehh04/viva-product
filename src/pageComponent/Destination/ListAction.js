import Image from 'next/image'

function ListAction({ icon, title, desc }) {
  return (
    <div className='flex flex-col justify-end items-center'>
      <Image
        src={icon}
        alt='icon'
        className='md:w-[5vw] md:h-[5vw] w-[12.8vw] h-[12.8vw]'
      />
      <span className='text-[#171717] text-center font-manrope md:text-[1.25vw] text-[3.2vw] font-extrabold leading-[150%] mt-[1.5vw] '>
        {title}
      </span>
      <span className='text-[#171717] text-center whitespace-nowrap font-manrope md:text-[1vw] text-[2.67vw] font-medium leading-[150%] '>
        {desc}
      </span>
    </div>
  )
}

export default ListAction
