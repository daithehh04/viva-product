import SlideRepresent from './SlideRepresentative'

function TouristRepresentative({ data }) {
  return (
    <div className='tourist-representative pt-[4.69vw] pb-[8.42vw] max-md:pt-[13.81vw]'>
      <div className='flex md:flex-row flex-col items-center content mb-[6.4vw] md:mb-0'>
        <h2 className='heading-1 md:w-[28.9375vw] w-full'>{data?.title}</h2>
        <p className='md:text-[1.125vw] text-[3.73vw] leading-normal md:w-[36vw] w-full ml-auto opacity-70 md:opacity-100'>
          {data?.desc}
        </p>
      </div>
      <SlideRepresent data={data?.members} />
    </div>
  )
}

export default TouristRepresentative
