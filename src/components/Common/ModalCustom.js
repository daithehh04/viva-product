'use client'
import { Modal } from '@mui/material'
import closeImg from '@/assets/images/close.svg'
import Image from 'next/image'
import Notification from './Notification'

const ModalCustom = ({ children, openModal, setOpenModal, className, handleBeforeClose }) => {
  //className prop requires width and height properties

  return (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
    >
      <div
        style={{ outline: 'none' }}
        className={`${className} fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
      >
        <Image
          src={closeImg}
          alt='close'
          width={20}
          height={20}
          className='md:hidden absolute md:top-[4.53vw] top-[2.5vw] right-[4.53vw] 
          max-md:w-[4vw] max-md:right-[10vw] max-md:top-[5vw] max-md:h-[4vw]'
          onClick={() => setOpenModal(false)}
        />

        {children}
      </div>
    </Modal>
  )
}

export default ModalCustom
