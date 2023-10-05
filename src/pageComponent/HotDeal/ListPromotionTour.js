import TourItem from '@/components/Common/TourItem'
import TourItemMobile from '@/components/Common/TourItemMobile'

const ListPromotionTour = ({ promotionList, menu, lang, quantity }) => {
  const list = promotionList?.slice(0, quantity ? quantity : 4 )
  return (
    <div className='relative best-tours md:overflow-hidden'>
      <div className={`md:w-[83.5%] md:m-auto md:grid flex flex-col ${quantity ? 'grid-cols-3' : 'grid-cols-4'} md:gap-[2.5vw] gap-[3.2vw]`} >
        {list?.map((item, index) => (
          <div key={index}>
            <div className='hidden md:flex'>
              <TourItem
                data={item}
                menu={menu}
                lang={lang}
              />
            </div>

            <div className='flex md:hidden'>
              <TourItemMobile
                data={item}
                lang={lang}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListPromotionTour
