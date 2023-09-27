'use client'

import background from '@/assets/images/bookTour_Background.png'
import Image from 'next/image'
import { Formik, Field, ErrorMessage, Form } from 'formik'
import * as Yup from 'yup'
import TextFiledWrapper from '../FormBookTour/TextField'
import SelectField from '../FormBookTour/SelectField'
import { Input } from '@mui/material'
import Button from './Button'
import DatePickerCustom from '../FormBookTour/DatePickerCustom'
import { gql, useMutation } from '@apollo/client'

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

function BookTour({ data, onClose }) {
  const [mutate] = useMutation(SUBMIT_FORM)
  // init value
  const INITAL_FORM_STATE = {
    nationality: '',
    fullName: '',
    telephone: '',
    email: '',
    confirmEmail: '',
    ageAdult: '',
    ageChildren: '',
    date: null,
    destination: [],
    accommodation: '',
    typeOfTrip: '',
    message: '',
    budget: '',
    confirm: false
  }

  //validate
  const FORM_VALIDATION = Yup.object().shape({
    nationality: Yup.string(),
    fullName: Yup.string(),
    telephone: Yup.string()
      .matches(/^[0-9]+$/, 'Enter a valid number')
      .min(9, 'Phải có ít nhất 9 số')
      .required('Required'),
    email: Yup.string().email('Invalid email.'),
    confirmEmail: Yup.string().oneOf([Yup.ref('email'), null], 'Email must match'),
    ageAdult: Yup.number().min(12),
    ageChildren: Yup.number().max(12),
    date: Yup.date().required('Required'),
    destination: Yup.array().required('Required'),
    accommodation: Yup.string().required('Required'),
    typeOfTrip: Yup.string().required('Required'),
    message: Yup.string(),
    budget: Yup.number().integer().required('Required'),
    confirm: Yup.boolean()
  })

  const dataBooktour = data?.data?.page?.booktour
  const dataBooktourContact = data?.data?.page?.booktour?.contactdetail
  const dataBooktourAge = data?.data?.page?.booktour?.participantage
  const dataParticipant = data?.data?.page?.booktour?.participants

  const handleForm = (values, resetForm) => {
    mutate({
      variables: {
        input: {
          id: 3,
          fieldValues: [
            { id: 1, value: values.nationality },
            { id: 3, value: values.fullName },
            { id: 17, value: values.telephone },
            { id: 6, value: values.email },
            { id: 19, value: values.ageChildren },
            { id: 20, value: values.ageAdult },
            { id: 21, value: values.date },
            { id: 24, value: values.destination.join(', ') },
            { id: 22, value: values.accommodation },
            { id: 23, value: values.typeOfTrip },
            { id: 14, value: values.message },
            { id: 15, value: values.budget },
            { id: 16, value: values.confirm }
          ]
        }
      }
    }).then((res) => {
      console.log(res)
      if (res?.data?.submitGfForm?.errors?.length > 0) {
        // Have Error
      } else {
        resetForm()
        // Successful
      }
    })
  }
  return (
    <div className='md:w-[82.6875vw] md:h-[95.5vw] w-full h-full overflow-auto relative booktour'>
      <Image
        alt='background'
        src={background}
        quality={100}
        fill
        className='object-cover'
      />
      <div className='relative w-full h-full md:pt-[3.59vw] md:pl-[3.75vw] md:pr-[4.06vw] md:pb-[6.25vw] px-[4.27vw] pb-[22.29vw] pt-[8.8vw]'>
        <svg
          className='md:w-[3.5vw] md:h-[3.5vw] w-[8.53333vw] h-[8.53333vw]  absolute z-[10] md:top-[3.59vw] md:right-[4.47vw] max-md:right-[4.27vw] cursor-pointer'
          xmlns='http://www.w3.org/2000/svg'
          width='57'
          height='57'
          viewBox='0 0 57 57'
          fill='none'
          onClick={onClose}
        >
          <line
            x1='46.3438'
            y1='15.857'
            x2='18.0596'
            y2='44.1413'
            stroke='white'
            strokeWidth='2'
          />
          <line
            x1='44.9296'
            y1='43.8575'
            x2='16.6453'
            y2='15.5732'
            stroke='white'
            strokeWidth='2'
          />
        </svg>
        <Formik
          initialValues={{ ...INITAL_FORM_STATE }}
          validationSchema={FORM_VALIDATION}
          onSubmit={(values, { resetForm }) => handleForm(values, resetForm)}
        >
          {(formik) => {
            return (
              <Form onSubmit={formik.handleSubmit}>
                <div className='block md:pt-[3.28vw] md:mb-[3.5vw] mb-[10.67vw]'>
                  <h2 className='text-white heading-1'>{dataBooktour?.heading}</h2>
                  {/* Contact Detail */}
                  <div className='flex flex-col md:gap-[1.5vw] md:mt-[3.5vw] mt-[10.67vw]'>
                    <div className='flex items-center max-md:justify-between'>
                      <h3 className='text-white md:text-[2.5vw] text-[6.4vw] font-[500] leading-[1.1]'>
                        {dataBooktourContact?.subheading}
                      </h3>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-[4.26667vw] h-[4.26667vw] md:hidden'
                        width='16'
                        height='16'
                        viewBox='0 0 16 16'
                        fill='none'
                      >
                        <path
                          d='M13.0053 5.14211C13.1947 4.95263 13.5105 4.95263 13.7 5.14211C13.8895 5.33158 13.8895 5.64737 13.7 5.83684L8.26842 11.2053C8.07895 11.3947 7.76316 11.3947 7.57368 11.2053L2.14211 5.83684C1.95263 5.64737 1.95263 5.33158 2.14211 5.14211C2.33158 4.95263 2.64737 4.95263 2.83684 5.14211L7.95263 10.0684L13.0053 5.14211Z'
                          fill='white'
                        />
                      </svg>
                    </div>
                    <div className='md:grid grid-cols-3 grid-rows-2 md:gap-y-[1vw] md:gap-x-[5.31vw] max-md:mt-[6.4vw] flex flex-col gap-[6.4vw]'>
                      <div className='flex flex-col md:gap-[0.5vw] inputField'>
                        <h4>{dataBooktourContact?.nationality?.label}</h4>
                        <SelectField
                          name='nationality'
                          // options={{ VietNam: 'VietNam-VN', ThaiLand: 'ThaiLand-TL', Myanmar: 'Myanmar-MY' }}
                          options={dataBooktourContact?.nationality?.nationchoice}
                        />
                      </div>
                      <div className='flex flex-col md:gap-[0.5vw] inputField'>
                        <h4>{dataBooktourContact?.fullname?.labelname}</h4>
                        <TextFiledWrapper
                          name='fullName'
                          placeholder={dataBooktourContact?.fullname?.placeholdername}
                        />
                      </div>
                      <div className='flex flex-col md:gap-[0.5vw] inputField'>
                        <h4>{dataBooktourContact?.telephone?.labelphone}</h4>
                        <TextFiledWrapper
                          name='telephone'
                          placeholder={dataBooktourContact?.telephone?.placeholderphone}
                        />
                      </div>
                      <div className='flex flex-col md:gap-[0.5vw] inputField'>
                        <h4>{dataBooktourContact?.email?.labelemail}</h4>
                        <TextFiledWrapper
                          name='email'
                          placeholder={dataBooktourContact?.email?.placeholderemail}
                        />
                      </div>
                      <div className='flex flex-col md:gap-[0.5vw] inputField'>
                        <h4>{dataBooktourContact?.confirmemail?.labelconfirm}</h4>
                        <TextFiledWrapper
                          name='confirmEmail'
                          placeholder={dataBooktourContact?.confirmemail?.placeholderconfirm}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Participant 1 */}

                  <div className='flex flex-col md:gap-[1.5vw] md:mt-[2.5vw] md:mb-[3.75vw] my-[14.93vw] agePicker'>
                    <div className='flex max-md:justify-between  max-md:mb-[6.4vw]'>
                      <h3 className='text-white md:text-[2.5vw] font-[500] leading-[1.1]'>{dataBooktourAge?.title}</h3>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-[4.26667vw] h-[4.26667vw] md:hidden'
                        width='16'
                        height='16'
                        viewBox='0 0 16 16'
                        fill='none'
                      >
                        <path
                          d='M13.0053 5.14211C13.1947 4.95263 13.5105 4.95263 13.7 5.14211C13.8895 5.33158 13.8895 5.64737 13.7 5.83684L8.26842 11.2053C8.07895 11.3947 7.76316 11.3947 7.57368 11.2053L2.14211 5.83684C1.95263 5.64737 1.95263 5.33158 2.14211 5.14211C2.33158 4.95263 2.64737 4.95263 2.83684 5.14211L7.95263 10.0684L13.0053 5.14211Z'
                          fill='white'
                        />
                      </svg>
                    </div>
                    <p className='md:text-[1.125vw] leading-[150%] text-white md:mb-[0.63vw] max-md:hidden'>
                      {dataBooktourAge?.subtitle}
                    </p>
                    <div className='md:grid grid-cols-3 grid-rows-1 md:gap-[5.31vw] flex flex-col gap-[6.4vw]'>
                      <div className='flex flex-col md:gap-[0.5vw] gap-[2.13vw]'>
                        <span className='md:text-white text-[#DFDFDF] md:text-[0.9375vw] text-[3.73333vw] md:font-[500] font-[400] leading-[150%]'>
                          {dataBooktourAge?.adult?.labeladult}
                        </span>
                        <TextFiledWrapper name='ageAdult' />
                      </div>
                      <div className='flex flex-col md:gap-[0.5vw] gap-[2.13vw]'>
                        <span className='md:text-white text-[#DFDFDF] md:text-[0.9375vw] text-[3.73333vw] md:font-[500] font-[400] leading-[150%]'>
                          {dataBooktourAge?.children?.labelchild}
                        </span>
                        <TextFiledWrapper name='ageChildren' />
                      </div>
                    </div>
                  </div>

                  {/* participant 2 */}

                  <div className='flex flex-col md:gap-[1.5vw] participant2'>
                    <div className='flex max-md:justify-between max-md:mb-[6.4vw]'>
                      <h3 className='text-white md:text-[2.5vw] font-[500] leading-[1.1]'>{dataParticipant?.title}</h3>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-[4.26667vw] h-[4.26667vw] md:hidden'
                        width='16'
                        height='16'
                        viewBox='0 0 16 16'
                        fill='none'
                      >
                        <path
                          d='M13.0053 5.14211C13.1947 4.95263 13.5105 4.95263 13.7 5.14211C13.8895 5.33158 13.8895 5.64737 13.7 5.83684L8.26842 11.2053C8.07895 11.3947 7.76316 11.3947 7.57368 11.2053L2.14211 5.83684C1.95263 5.64737 1.95263 5.33158 2.14211 5.14211C2.33158 4.95263 2.64737 4.95263 2.83684 5.14211L7.95263 10.0684L13.0053 5.14211Z'
                          fill='white'
                        />
                      </svg>
                    </div>
                    <div className='md:grid grid-cols-3 grid-rows-1 md:gap-[5.31vw] flex flex-col gap-[6.4vw] '>
                      <div className='flex flex-col md:gap-[0.5vw] gap-[2.13vw] max-md:w-full'>
                        <h4 dangerouslySetInnerHTML={{ __html: `${dataParticipant?.time}` }}></h4>
                        <DatePickerCustom name='date' />
                        <ErrorMessage
                          name='date'
                          component='div'
                          className='md:text-[0.8vw] text-[3.2vw] text-[red]'
                        />
                      </div>

                      {/* checkboxx */}

                      <div className='flex flex-col md:gap-[0.5vw] gap-[3.2vw] max-md:w-full'>
                        <h4
                          className='md:text-[1.125vw] text-[3.73333vw] text-[#fff] leading-[150%]'
                          dangerouslySetInnerHTML={{ __html: `${dataParticipant?.destinationchoice}` }}
                        ></h4>
                        <div
                          id='checkbox-group'
                          role='group'
                          aria-labelledby='checkbox-group'
                          className='grid md:grid-cols-3 grid-cols-2 grid-rows-2 md:gap-y-[1vw] md:gap-x-[1vw] gap-[4.27vw] items-center max-md:w-full '
                        >
                          {data?.data?.allDestination?.nodes?.map((des, index) => (
                            <label key={index}>
                              <Field
                                type='checkbox'
                                name='destination'
                                value={des?.slug}
                              />
                              <span className='md:text-[0.875vw] text-white font-[500] leading-[150%] whitespace-nowrap'>
                                {des?.name}
                              </span>
                            </label>
                          ))}
                          <ErrorMessage
                            name='destination'
                            component='div'
                            className='md:text-[0.8vw] text-[3.2vw] text-[red]'
                          />
                        </div>
                      </div>

                      {/* radio group */}
                      <div className='flex flex-col md:gap-[0.5vw] gap-[3.2vw] max-md:w-full'>
                        <h4 dangerouslySetInnerHTML={{ __html: `${dataParticipant?.accomodation?.labelaccom}` }}></h4>
                        <div
                          role='group'
                          aria-labelledby='radio-group'
                          className='radio-group'
                        >
                          {dataParticipant?.accomodation?.acommodationchoice?.map((choice, index) => (
                            <label key={index}>
                              <Field
                                type='radio'
                                name='accommodation'
                                value={choice?.listchoice}
                              />
                              {choice?.listchoice}
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* type of trip */}
                    </div>
                  </div>
                  {/* trip,note,budget */}
                  <div className='md:mt-[3vw] mt-[6.4vw] md:grid grid-cols-3 md:gap-[5.31vw] items-start trip flex flex-col gap-[6.4vw]'>
                    <div className='flex flex-col md:gap-[0.5vw] gap-[3.2vw] max-md:w-full'>
                      <h4
                        className=''
                        dangerouslySetInnerHTML={{ __html: `${dataParticipant?.typeoftrip}` }}
                      ></h4>
                      <div
                        role='group'
                        aria-labelledby='my-radio-group'
                        className='grid grid-cols-2 md:gap-[1vw] gap-[4.27vw] typeOfTrip'
                      >
                        {data?.data?.allTourStyle?.nodes?.map((tour, index) => (
                          <label key={index}>
                            <Field
                              type='radio'
                              name='typeOfTrip'
                              value={tour?.slug}
                            />
                            {tour?.name}
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* note */}
                    <div className='flex flex-col md:gap-[0.5vw] gap-[3.2vw] message max-md:w-full'>
                      <h4 dangerouslySetInnerHTML={{ __html: `${dataParticipant?.message?.label}` }}></h4>
                      <TextFiledWrapper
                        name='message'
                        placeholder={dataParticipant?.message?.placeholdermessage}
                      />
                    </div>

                    {/* Budget */}
                    <div className='flex flex-col md:gap-[0.5vw] gap-[3.2vw] max-md:w-full budgetTour'>
                      <h4 dangerouslySetInnerHTML={{ __html: `${dataParticipant?.budget?.label}` }}></h4>
                      <TextFiledWrapper name='budget' />
                    </div>
                  </div>

                  <div className='md:mt-[2.5vw] mt-[6.4vw] md:w-[25.8vw] '>
                    <h4 className='md:mb-[1.03vw] mb-[3.2vw]'>{dataParticipant?.ready?.label}</h4>
                    <div
                      role='group'
                      aria-labelledby='my-radio-group'
                      className='confirm'
                    >
                      <label>
                        <Field
                          type='radio'
                          name='confirm'
                          value='true'
                          // parse={(value) => value === 'true'}
                        />{' '}
                        {dataParticipant?.ready?.confirm}
                      </label>
                      <label>
                        <Field
                          type='radio'
                          name='confirm'
                          value='false'
                          // parse={(value) => value === 'true'}
                        />{' '}
                        {dataParticipant?.ready?.refuse}
                      </label>
                    </div>
                    <ErrorMessage
                      name='confirm'
                      component='div'
                      className='md:text-[0.8vw] text-[3.2vw] text-[red]'
                    />
                  </div>
                </div>
                <Button className='justify-center btn-primary max-md:w-full max-md:flex'>
                  {data?.data?.page?.booktour?.buttontext}
                </Button>
              </Form>
            )
          }}
        </Formik>
      </div>
    </div>
  )
}

export default BookTour
