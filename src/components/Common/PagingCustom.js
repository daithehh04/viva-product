const pagis = [1, 2, 3]
const PagingCustom = () => {
  return (
    <div className='w-fit m-auto flex md:gap-[0.75vw] gap-[3.2vw] md:mt-[4.538vw] mt-[6.4vw]'>
      {pagis.map((pagi, index) => {
        return (
          <span
            key={index}
            className={`${
              index === 0 ? 'bg-textColor text-white' : 'bg-primaryColor text-textColor opacity-10 '
            }   rounded-full md:w-[2.125vw] w-[9.07vw] md:h-[2.125vw] h-[9.07vw] text-center md:text-[1.125vw] text-[4.27vw] font-manrope leading-[150%] font-semibold flex justify-center items-center cursor-pointer`}
          >
            {pagi}
          </span>
        )
      })}
    </div>
  )
}

export default PagingCustom
