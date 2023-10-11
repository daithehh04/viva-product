// 'use client'

import VoucherItem from '@/components/Common/VoucherItem'

export default function ListVoucher({ headerData, listVoucher }) {
  return (
    <div className='md:grid flex lg:grid-cols-3 md:grid-cols-2 md:gap-[2.5vw] gap-[4.266vw] max-md:overflow-auto hidden-scroll max-md:ml-[-4.27vw] max-md:mr-[-4.27vw]'>
      {listVoucher?.map((voucher, index) => {
        return (
          <div
            key={index}
            className={`${index === 0 && 'max-md:ml-[4.27vw]'} ${
              index === listVoucher?.length - 1 && 'max-md:mr-[4.27vw]'
            }`}
          >
            <VoucherItem
              className='promo-voucher-item'
              headerData={headerData}
              data={voucher}
            />
          </div>
        )
      })}
    </div>
  )
}
