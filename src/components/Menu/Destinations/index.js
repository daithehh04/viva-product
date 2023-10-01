'use client'
import DestinationItem from './DestinationItem'

function index({ data, lang,onCloseMenu }) {
  const dataMenu = data
  return (
    <div className='grid grid-cols-3 gap-[2.5vw] content pt-[2.93vw] pb-[4.38vw] h-max'>
      {dataMenu &&
        dataMenu.map((item, index) => (
          <DestinationItem
            tour={item}
            key={index}
            lang={lang}
            onCloseMenu={onCloseMenu}
          />
        ))}
    </div>
  )
}

export default index
