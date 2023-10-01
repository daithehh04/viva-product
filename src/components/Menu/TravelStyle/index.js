'use client'
import StyleItem from './StyleItem'

export default function TravelStyle({ travelStylesList, lang,onCloseMenu }) {
  let travelStyleList = null
  if (travelStylesList?.data?.allTourStyle?.nodes) {
    travelStyleList = travelStylesList?.data?.allTourStyle?.nodes
  }
  return (
    <div>
      <div className='grid grid-cols-3 gap-x-[7.91vw] gap-y-[2.88vw] content ml-auto mr-auto pt-[2.49vw] '>
        {travelStyleList?.map((item, index) => (
          <StyleItem
            key={item?.id}
            image={item?.banner?.travelStyleInfo?.travelStyleImage}
            lang={lang}
            id={item?.slug}
            title={item?.banner?.travelStyleInfo?.travelStyleName}
            onCloseMenu={onCloseMenu}
          />
        ))}
      </div>
    </div>
  )
}
