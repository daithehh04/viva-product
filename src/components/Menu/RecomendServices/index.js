import ServiceItem from './ServiceItem'
function index({ rcmServicesList, lang }) {
  const data = rcmServicesList?.data?.categories?.nodes
  return (
    <div className='grid grid-cols-3 grid-rows-[max-content] gap-[2.5vw] w-[64.375vw] ml-auto mr-auto pt-[6.25vw]'>
      {data?.map((item, index) => (
        <ServiceItem
          key={index}
          data={item}
          lang={lang}
        />
      ))}
    </div>
  )
}

export default index
