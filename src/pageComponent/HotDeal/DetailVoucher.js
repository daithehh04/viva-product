'use client'

import TimeDown from './TimeDown'
import { useForm } from 'react-hook-form'
import detailVocherImg from '@/assets/images/des-menu.png'
import Image from 'next/image'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { gql, useMutation } from '@apollo/client'
import Notification from '@/components/Common/Notification'
import { useRef, useState } from 'react'
import { useClickOutside } from '@/helpers/customHooks'

// css for label + placeholder + error msg
const labelStyle =
  'text-[0.9375vw] font-medium leading-[1.5vw] mb-[0.5vw] max-md:mb-[2.13vw] max-md:text-[14px] leading-[21px] '
const labelInputStyle =
  'w-[35vw] pl-[1.5vw] h-[3.125vw] bg-[#d9d9d966] outline-none border-[1px] border-white rounded-[0.5vw] text-[1vw] max-md:pl-[5.3vw] max-md:text-[3.73vw] max-md:w-full max-md:h-[12.8vw] '
const placeholderStyle =
  'absolute pointer-events-none pl-[1.5vw] top-[50%] translate-y-[-50%] left-0 opacity-0.5 font-normal text-[1vw] text-[#838383] max-md:text-[3.73vw] max-md:pl-[5.3vw] max-md:leading-normal'
const errorStyle = 'text-red-300 text-[1vw] max-md:text-[3.73vw] mb-[0.62vw] max-md:mb-[3.2vw]'
//validate
const schema = Yup.object().shape({
  fullname: Yup.string().required('Tên là trường bắt buộc'),
  email: Yup.string().email('Email không hợp lệ').required('Email là trường bắt buộc'),
  phone: Yup.string()
    .matches(/^[0-9]+$/, 'Phải là số')
    .min(9, 'Phải có ít nhất 9 số')
    .required('Số điện thoại là trường bắt buộc'),
  participantsNumber: Yup.string()
    .matches(/^[0-9]+$/, 'Phải là số')
    .required('Số  người tham gia là trường bắt buộc')
})

// queries form
const SUBMIT_FORM = gql`
  mutation ($input: SubmitGfFormInput!) {
    submitGfForm(input: $input) {
      entry {
        id
      }
      errors {
        message
      }
    }
  }
`

const DetailVocher = ({ headerData = {}, data, setOpenModal }) => {
  const itemRef = useRef()
  const [openNoti, setOpenNoti] = useState(false)
  const [msg, setMsg] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isConfirm, setIsConfirm] = useState(false)
  const [isDone, setIsDone] = useState(false) // check when successful noti or error noti appeared

  useClickOutside(itemRef, (e) => {
    console.log(e.target)
    e.preventDefault()
    e.stopPropagation()
    if (!isDone) {
      setOpenNoti(true)
      setIsConfirm(true)
    }
  })

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema)
  })
  const [mutate, { loading }] = useMutation(SUBMIT_FORM)
  const onSubmit = (data) => {
    setIsDone(false)
    mutate({
      variables: {
        input: {
          id: 2,
          fieldValues: [
            {
              id: 1,
              value: data.fullname
            },
            {
              id: 3,
              value: data.phone
            },
            {
              id: 4,
              value: data.email
            },
            {
              id: 5,
              value: data.participantsNumber
            },
            {
              id: 6,
              value: data.date
            }
          ]
        }
      }
    }).then((res) => {
      if (res?.data?.submitGfForm?.errors?.length > 0) {
        // Have Error
        setIsError(true)
        setOpenNoti(true)
        setMsg('Failed')
        setIsDone(true)
      } else {
        // Successful
        setIsSuccess(true)
        setOpenNoti(true)
        setMsg('Successfull')
        setIsDone(true)
        reset({
          fullname: '',
          phone: '',
          email: '',
          participantsNumber: '',
          date: ''
        })
      }
    })
  }
  const expireDate = data?.content?.expireDate.slice(0, data?.content?.expireDate?.indexOf(' '))

  return (
    <div
      className='w-full md:py-[5vw] py-[11.46vw] md:px-[8.12vw] px-[4.26vw]'
      ref={itemRef}
    >
      <h1 className='w-[44.625vw] font-optima text-[2.875vw] font-semibold leading-[3.1625vw] mb-[2vw] capitalize max-md:text-[5.87vw] max-md:mb-[0.4116vw] max-md:leading-[7.04vw] max-md:w-full'>
        {headerData?.header}
      </h1>
      <p className='font-bold hidden opacity-70 max-md:block max-md:mb-[0.75vw] max-md:text-[3.7vw max-md:w-full max-md:leading-normal'>
        {data?.content?.extraDiscount}
      </p>
      <div className='flex gap-[3.5vw] max-md:flex-col-reverse'>
        <div className='w-[40.825vw] max-md:w-full '>
          <p className='font-bold leading-[1.3vw] w-[40.8125vw] text-[2vw] mb-[1.625vw] max-md:text-[0.875vw] max-md:opacity-70 max-md:hidden'>
            {data?.content?.extraDiscount}
          </p>
          <div className='text-[1vw]'>
            <h4 className='font-bold leading-normal mb-[0.5vw] mt-[1.5vw] max-md:mb-[4.27vw] max-md:text-[4.267vw] max-md:mt-[5.3vw] opacity-70 uppercase'>
              {headerData?.expiryDateHeader}:
            </h4>
            <ul className='ml-[1.2vw] max-md:text-[3.73vw] max-md:ml-[5vw]'>
              <li className='list-disc leading-normal'>{expireDate}</li>
            </ul>
          </div>
          <div className='text-[1vw]'>
            <h4 className='font-bold leading-normal mb-[0.5vw] mt-[1.5vw] max-md:mb-[4.27vw] max-md:text-[4.267vw] max-md:mt-[5.3vw] opacity-70 uppercase'>
              {headerData?.conditionsHeader}:
            </h4>
            <ul className='flex gap-[1vw] flex-col max-md:gap-[2.13vw] ml-[1.2vw] max-md:ml-[5vw] max-md:text-[3.73vw]'>
              {data?.rules?.conditions?.map((rule, index) => {
                return (
                  <li
                    className='leading-normal list-disc'
                    key={index}
                    dangerouslySetInnerHTML={{ __html: rule?.condition }}
                  ></li>
                )
              })}
            </ul>
          </div>
        </div>
        <div>
          <TimeDown
            headerData={headerData}
            data={data?.content?.expireDate}
          />
        </div>
      </div>
      <div className='w-full h-[0.0625vw] mt-[3vw] mb-[2.5vw] bg-[#171717] opacity-10 max-md:my-[6.4vw]'></div>
      <div className='flex gap-[3.31vw] max-md:flex-col'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col'
        >
          <h2 className='text-[2rem] font-bold leading-[2.6vw] mb-[2.2vw] max-md:mb-[5.33vw] max-md:text-[5.3vw] max-md:leading-normal'>
            {headerData?.form?.heading}
          </h2>

          <label className={labelStyle}>{headerData?.form?.name?.header}</label>
          <div className='relative '>
            <input
              className={labelInputStyle}
              id='fullname'
              name='fullname'
              {...register('fullname')}
            />
            {!watch('fullname') && (
              <label className={placeholderStyle}>
                {headerData?.form?.name?.placeholder} <span className='text-[#F04040]'>*</span>
              </label>
            )}
          </div>
          {<span className={errorStyle}>{errors?.fullname && errors?.fullname?.message}</span>}

          <label className={labelStyle}>{headerData?.form?.phone?.header}</label>
          <div className='relative '>
            <input
              className={labelInputStyle}
              id='phone'
              name='phone'
              {...register('phone')}
            />
            {!watch('phone')?.length && (
              <label className={placeholderStyle}>
                {headerData?.form?.phone?.placeholder} <span className='text-[#F04040]'>*</span>
              </label>
            )}
          </div>
          {<span className={errorStyle}>{errors.phone && errors.phone.message}</span>}

          <label className={labelStyle}>{headerData?.form?.email?.header}</label>
          <div className='relative '>
            <input
              className={labelInputStyle}
              id='email'
              name='email'
              {...register('email')}
            />
            {!watch('email') && (
              <label className={placeholderStyle}>
                {headerData?.form?.email?.placeholder} <span className='text-[#F04040]'>*</span>
              </label>
            )}
          </div>
          {<span className={errorStyle}>{errors?.email && errors.email.message}</span>}

          <label className={labelStyle}>{headerData?.form?.participantsnumber?.header}</label>
          <div className='relative '>
            <input
              className={labelInputStyle}
              id='participantsNumber'
              name='participantsNumber'
              {...register('participantsNumber')}
            />
            {!watch('participantsNumber') && (
              <label className={placeholderStyle}>
                {headerData?.form?.participantsnumber?.placeholder} <span className='text-[#F04040]'>*</span>
              </label>
            )}
          </div>
          {<span className={errorStyle}>{errors.participantsNumber && errors.participantsNumber.message}</span>}

          <label className={labelStyle}>{headerData?.form?.date?.header}</label>
          <div className='relative mb-[0.62vw] max-md:mb-[3.2vw]'>
            <input
              className={labelInputStyle}
              id='date'
              name='date'
              {...register('date')}
            />
            {!watch('date') && <label className={placeholderStyle}>{headerData?.form?.date?.placeholder}</label>}
          </div>

          <button
            type='submit'
            className='mt-[1.26vw] w-[14vw] h-[3.125vw] text-[#171717] flex items-center justify-center rounded-[0.75vw] 
                text-[1vw] font-manrope font-semibold bg-primaryColor max-md:mt-[8px] max-md:w-full max-md:h-[48px] max-md:text-[14px] max-md:leading-[15.19px]'
            disabled={loading}
          >
            {headerData?.form?.button} {loading && '...'}
          </button>
        </form>
        <Image
          src={detailVocherImg}
          alt='Detail voucher'
          className='w-[29.1875vw] h-[33.5vw] max-md:hidden'
        />
      </div>

      <Notification
        openNoti={openNoti}
        setOpenNoti={setOpenNoti}
        msg={msg}
        isSuccess={isSuccess}
        isError={isError}
        isConfirm={isConfirm}
        handleSuccess={() => {
          setIsSuccess(false)
          setOpenModal(false)
        }}
        handleError={() => {
          setIsError(false)
        }}
        handleConfirm={() => {
          setOpenModal(false)
        }}
      />
    </div>
  )
}

export default DetailVocher
