'use client'
import ModalCustom from './ModalCustom'
const boxClass = 'absolute w-full h-full left-0 rounded-[20px]'
const faceClass =
  'absolute top-[21%] left-[40%] h-[22%] bg-[#fcfcfc] rounded-[50%] border border-solid border-[#777777] z-[2]'
const titleClass = 'md:text-[1vw] text-[2.5vw] tracking-[3px] text-[#fcfcfc] uppercase pt-[0.4vw] font-bold'
const eyeClass = 'absolute top-[40%] left-[20%] md:w-[0.4vw] w-[0.7vw] md:h-[0.4vw] h-[0.7vw] bg-[#777777] rounded-full'
const mouthClass =
  'absolute left-[41%] md:w-[0.5vw] w-[0.9vw] md:h-[0.5vw] h-[0.9vw] rotate-45 border-solid border-[2px] rounded-[50%]'
const shadowClass = 'absolute w-[21%] h-[3%] opacity-50 bg-[#777777] top-[43%] left-[40%] rounded-[50%] z-[1]'
const msgClass = 'absolute top-[47%] w-full h-[40%] text-center'
const pClass = 'md:text-[.9vw] text-[2vw] text-[#0f41cc] tracking-[1px] capitalize'
const btnClass = 'absolute bg-[#fcfcfc] w-1/2 h-[15%] md:text-[0.8vw] text-[2vw] rounded-[20px] top-[73%] left-[25%]'

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
      <div className={`${boxClass} success-box`}>
        {/* face */}
        <div className={`${faceClass} w-[22%] success-face`}>
          {/* eyes */}
          <div className={`${eyeClass}`}></div>
          <div className={`${eyeClass} left-[68%]`}></div>

          {/* mouth */}
          <div
            className={`${mouthClass} top-[43%] `}
            style={{ borderColor: 'transparent #777777 #777777 transparent' }}
          ></div>
        </div>

        {/* shadow */}
        <div className={`${shadowClass} scale`}></div>
        <div className={msgClass}>
          <div className={`${titleClass} title`}>Success!</div>
          <p className={pClass}>{msg}</p>
        </div>
        <button
          className={`${btnClass} button-box`}
          onClick={handleClose}
        >
          <div className='success-btn'>OK</div>
        </button>
      </div>
    )
  }

  const Error = () => {
    return (
      <div className={`${boxClass} error-box`}>
        {/* face */}
        <div className={`${faceClass} w-[18%] error-face`}>
          {/* eyes */}
          <div className={`${eyeClass}`}></div>
          <div className={`${eyeClass} left-[68%]`}></div>
          {/* mouth */}
          <div
            className={`${mouthClass} top-[49%]`}
            style={{ borderColor: '#777777 transparent transparent #777777' }}
          ></div>
        </div>

        {/* shadow */}
        <div className={`${shadowClass} move`}></div>
        <div className={msgClass}>
          <div className={`${titleClass} title`}>Error!</div>
          <p className={pClass}>{msg}</p>
        </div>
        <button
          className={`${btnClass} button-box`}
          onClick={handleClose}
        >
          <div className='error-btn'>Close</div>
        </button>
      </div>
    )
  }

  const Confirm = () => {
    return (
      <div className='confirm-box absolute left-0 top-0 z-10 w-full h-full bg-primaryColor rounded-[20px] flex flex-col justify-center items-center'>
        <div className={`${titleClass} title text-textColor`}>Confirm !</div>
        <div className='md:text-[0.9vw] text-[2.5vw]'> You really want to close this?</div>

        <div className='absolute md:bottom-[2vw] bottom-[4vw] right-[2vw] flex md:gap-[1vw] gap-[2.23vw] md:text-[0.8vw] text-[2vw] '>
          <button
            onClick={(e) => {
              e.preventDefault()
              setOpenNoti(false)
            }}
            className='md:w-[4vw] w-[9vw] md:h-[2vw] h-[4vw] border-[2px] flex items-center justify-center border-solid border-[#ef8d9c] rounded-lg'
          >
            Cancel
          </button>
          <button
            onClick={handleClose}
            className='md:w-[4vw] w-[9vw] md:h-[2vw] h-[4vw] border-[2px] flex items-center justify-center border-solid border-[#b0db7d]  rounded-lg'
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
      className='md:w-[20vw] w-[70vw] md:h-[15vw] h-[40vw]'
    >
      {isSuccess && <Success />}
      {isError && <Error />}
      {isConfirm && <Confirm />}
    </ModalCustom>
  )
}
