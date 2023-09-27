'use client'
import { useState } from 'react'
import ModalCustom from './ModalCustom'
import DetailVocher from '@/pageComponent/HotDeal/DetailVoucher'
import Link from 'next/link'

function VoucherItem({ className, headerData = {}, data = {} }) {
  const [openModal, setOpenModal] = useState(false)
  const voucherData = data?.voucher || {}

  return (
    <>
      <div
        className={`${className || ''} flex voucher-item max-md:flex-shrink-0 cursor-pointer`}
        onClick={() => setOpenModal(true)}
      >
        <div className='voucher-discount-info md:w-[42%] bg-bgGreen text-[#fff] flex flex-col items-center justify-center pt-[1.75vw] pr-[2.44vw] pb-[1.69vw] pl-[2.94vw]'>
          <span className='text-[3.75vw] font-[700] leading-none max-md:text-[4.8vw]'>
            {voucherData?.content?.value}%
          </span>
          <span className='text-[0.875vw] mt-[1vw] max-md:text-[2.66vw]'>Max</span>
          <span className='text-[1.5vw] font-bold tracking-[0.48px] leading-none mt-[0.31vw] max-md:text-[2.93vw]'>
            ${voucherData?.content?.max}
          </span>
        </div>
        <div className='voucher-expire-info flex flex-col pt-[1.25vw] pr-[0.63vw] pb-[1.25vw] pl-[1.62vw] bg-[#fff] max-md:w-[33vw] max-md:p-[3.19vw] overflow-auto'>
          <h4 className='text-[0.875vw] font-[700] leading-[1.35] text-textColor max-md:text-[2.66vw] max-md:font-[500] uppercase max-md:normal-case'>
            {voucherData?.content?.title}
          </h4>
          <span className='text-[0.75vw] leading-[1.16] mt-[0.5vw] text-textColor max-md:text-[2.66vw] max-md:mt-[2.13vw]'>
            Date: {voucherData?.content?.expireDate}
          </span>
          <Link
            href='/'
            className='bg-primaryColor max-md:font-medium flex items-center justify-center rounded-[0.25vw] px-[4vw] py-[0.5vw] max-md:mt-[3.2vw] text-[1vw] leading-[1.25] mt-auto text-textColor max-md:text-[2.66vw] max-md:py-[1.89vw] max-md:rounded-[1.26vw]'
          >
            {headerData?.voucherButton}
          </Link>
        </div>
      </div>
      {openModal && (
        <ModalCustom
          openModal={openModal}
          setOpenModal={setOpenModal}
          className='w-[91.46vw] md:w-[82.93vw] md:h-[90vh] h-[80vh] '
        >
          <div className='w-full h-full bg-white overflow-y-auto md:rounded-[16px] md:py-[5vw] py-[11.46vw] overflow-x-hidden'>
            <DetailVocher
              headerData={headerData}
              data={voucherData}
              setOpenModal={setOpenModal}
            />
          </div>
        </ModalCustom>
      )}
    </>
  )
}

export default VoucherItem
