import TourItem from '@/components/Common/TourItem'
import TourItemMobile from '@/components/Common/TourItemMobile'

const ListPromotionTour = ({ promotionList, menu }) => {
  const list = promotionList?.slice(0, 4)
  return (
    <div className='best-tours relative'>
      <div className='md:w-[83.5%] md:m-auto md:grid flex flex-col grid-cols-4 md:gap-[2.5vw] gap-[3.2vw]'>
        {list?.map((item, index) => (
          <div key={index}>
            <div className='md:flex hidden'>
              <TourItem
                data={item}
                menu={menu}
              />
            </div>

            <div className='md:hidden flex'>
              <TourItemMobile data={item} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListPromotionTour
