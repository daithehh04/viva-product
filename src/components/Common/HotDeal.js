import ListVoucher from '../../pageComponent/HotDeal/ListVoucher'
import ListPromotionTour from '../../pageComponent/HotDeal/ListPromotionTour'
import Image from 'next/image'
import imageSrc from '@/assets/images/bg-hotdeals.png'

export default function HotDeal({ hotDeals, menu, lang, onCloseMenu }) {
  const listVoucher = hotDeals?.voucherHeader?.listVoucher
  return (
    <div className={`${menu ? 'pt-[3vw]' : 'md:pt-[9.75vw] pt-[23.46vw]'} mb-[9.19vw] max-md:bg-[#f3f6fb]`}>
      <div className='content'>
        <h2
          className={`heading-1 ${menu ? 'md:mb-[2vw]' : 'md:mb-[2.5vw]'}  mb-[4.267vw] text-textColor`}
          style={menu && { fontSize: '2.5vw' }}
        >
          {hotDeals?.voucherHeader?.listHeader}
        </h2>
        <ListVoucher
          isSubNav={true}
          headerData={hotDeals?.voucherHeader?.detailHeader}
          listVoucher={listVoucher}
        />
      </div>
      <div className={menu ? 'mt-[3.12vw]' : 'mt-[7.06vw]'}>
        <h2
          className={`${menu ? 'mb-[2vw]' : 'mb-[3.12vw]'} heading-1 content text-textColor`}
          style={menu && { fontSize: '2.5vw' }}
        >
          {hotDeals?.promotionHeader || ''}
        </h2> 
        <ListPromotionTour quantity={3}
          promotionList={hotDeals?.promotionList}
          menu={menu}
          lang={lang}
          onCloseMenu={onCloseMenu}
        />
      </div>
      {!menu && (
        <Image
          alt='image'
          src={imageSrc}
          quality={100}
          className='w-full h-[70vw] absolute top-0 left-0 object-cover z-[-1] max-md:hidden'
        />
      )}
    </div>
  )
}
