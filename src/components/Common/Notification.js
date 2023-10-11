'use client'
import Image from 'next/image'
import ModalCustom from './ModalCustom'
import notiIcon from '@/assets/images/notiIcon.svg'
import successIcon from '@/assets/images/successIcon.svg'
import errorIcon from '@/assets/images/errorIcon.svg'

export default function Notification(props) {
  const { openNoti, setOpenNoti, msg, isSuccess, isError, isConfirm, handleConfirm, handleSuccess, handleError } = props

  const handleClose = (e) => {
    e.preventDefault()
    handleSuccess && isSuccess && handleSuccess()
    handleError && isError && handleError()
    handleConfirm && isConfirm && handleConfirm()
    setOpenNoti(false)
  }

  const Success = () => {
    return (
      <div className='bg-white w-full h-full md:py-[3vw] py-[5vw] md:px-[3.12vw] px-[5.5vw] flex flex-col items-center rounded-[1vw]'>
        <Image
          src={successIcon}
          alt=''
          width={200}
          height={200}
          className='md:w-[8.25vw] w-[16vw] md:h-[8.25vw] h-[16vw]'
        />

        <div className='md:text-[2.25vw] text-[4.5vw] font-bold md:mt-[2.5vw] mt-[3.5vw] md:mb-[0.62vw] mb-[1.5vw]'>
          Successful
        </div>

        <div className='md:text-[1vw] text-[3vw] opacity-70 text-center md:mb-[1.69vw] mb-[2.5vw]'>
          We have received your information and will be in touch soon !!
        </div>
        <button
          className='md:py-[1vw] py-[2.5vw] md:px-[2.5vw] px-[5vw] bg-primaryColor font-medium md:text-[1vw] text-[3vw] justify-center items-center flex md:rounded-[0.75vw] rounded-[8px]'
          onClick={handleClose}
        >
          OK
        </button>
      </div>
    )
  }

  const Error = () => {
    return (
      <div className='bg-white w-full h-full md:py-[3vw] py-[5vw] md:px-[3.12vw] px-[5.5vw] flex flex-col items-center rounded-[1vw]'>
        <Image
          src={errorIcon}
          alt=''
          width={200}
          height={200}
          className='md:w-[8.25vw] w-[16vw] md:h-[8.25vw] h-[16vw]'
        />

        <div className='md:text-[2.25vw] text-[4.5vw] font-bold md:mt-[2.5vw] mt-[3.5vw] md:mb-[0.62vw] mb-[1.5vw]'>
          Error
        </div>

        <div className='md:text-[1vw] text-[3vw] opacity-70 text-center md:mb-[1.69vw] mb-[2.5vw]'>
          Please check your infomation again !!!
        </div>
        <button
          className='md:py-[1vw] py-[2.5vw] md:px-[2.5vw] px-[5vw] bg-primaryColor font-medium md:text-[1vw] text-[3vw] justify-center items-center flex md:rounded-[0.75vw] rounded-[8px]'
          onClick={handleClose}
        >
          OK
        </button>
      </div>
    )
  }

  const Confirm = () => {
    return (
      <div className='w-full h-full md:rounded-[1vw] rounded-[8px] bg-white box-border'>
        <div className='md:text-[2vw] text-[4.27vw] font-medium uppercase w-full md:px-[2.94vw] px-[3.5vw] md:py-[1.44vw] py-[2.5vw] bg-primaryColor md:rounded-t-[1vw] rounded-t-[8px]'>
          Confirm !!!
        </div>

        <div className='relative'>
          <Image
            src={notiIcon}
            alt=''
            width={100}
            height={1000}
            className='md:w-[9.1875vw] w-[14vw] md:h-[4.9375vw] h-[8vw] absolute md:bottom-[0.94vw] bottom-[2vw] md:right-[1.31vw] right-[2.2vw]'
          />
          <div className='md:text-[1.5vw] text-[4.27vw] md:px-[2.94vw] px-[3.5vw] md:py-[3.5vw] py-[6vw]'>
            You really want to close this ?
          </div>
        </div>

        {/* button */}
        <div
          className='md:px-[1.62vw] px-[2.5vw] md:py-[1.25vw] py-[3vw] flex md:gap-[0.75vw] gap-[2vw] justify-end'
          style={{ background: 'rgb(169, 169, 169, 0.1)' }}
        >
          <button
            onClick={(e) => {
              e.preventDefault()
              setOpenNoti(false)
            }}
            className='md:py-[1vw] py-[2.5vw] md:px-[2.5vw] px-[5vw] md:text-[1vw] text-[3vw] font-medium justify-center items-center flex md:rounded-[0.75vw] rounded-[8px]'
            style={{ border: '1px solid rgba(46, 46, 46, 0.60)' }}
          >
            Cancel
          </button>
          <button
            onClick={handleClose}
            className='md:py-[1vw] py-[2.5vw] md:px-[2.5vw] px-[5vw] bg-primaryColor font-medium md:text-[1vw] text-[3vw] justify-center items-center flex md:rounded-[0.75vw] rounded-[8px]'
          >
            OK
          </button>
        </div>
      </div>
    )
  }

  return (
    <ModalCustom
      openModal={openNoti}
      setOpenModal={setOpenNoti}
      className={`${isConfirm ? 'md:w-[40vw] w-[80vw] h-fit' : 'md:w-[24.125vw] w-[70vw] h-fit'}`}
    >
      {isSuccess && <Success />}
      {isError && <Error />}
      {isConfirm && <Confirm />}
    </ModalCustom>
  )
}
