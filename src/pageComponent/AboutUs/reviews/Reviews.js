'use client'
import ReviewItem from '@/components/Common/ReviewItem'
import { GET_All_CUSTOMERS_REVIEW } from '@/graphql/customersReview/queries'
import { useQuery } from '@apollo/client'
import { useRef, useState } from 'react'

const Reviews = ({ lang, data }) => {
  let totalPage = useRef(0)
  const [activePage, setActivePage] = useState(1)
  // get review list
  const { data: reviewList, refetch } = useQuery(GET_All_CUSTOMERS_REVIEW, {
    variables: {
      offset: activePage,
      size: 7,
      language: lang?.toUpperCase()
    }
  })
  // calculate total page of reviews
  if (reviewList) {
    totalPage.current = Math.ceil(reviewList?.allCustomerReview?.pageInfo?.offsetPagination?.total / 7)
  }
  const paginations = new Array(totalPage.current).fill(0)

  const reviewData = reviewList?.allCustomerReview?.nodes?.filter((item) => item.translation !== null)
  // console.log(reviewData)
  return (
    <section className='content py-[10vw] relative z-10'>
      <div className='md:w-[33.4375vw] w-full text-textColor md:mb-[2vw] mb-[13.07vw]'>
        <h2 className='md:text-[4vw] text-[4.8vw] font-semibold capitalize md:leading-[110%] leading-[120%] font-optima md:mb-[1vw] mb-[2.13vw]'>
          {data?.heading}
        </h2>
        <p className='md:text-[1.125vw] text-[3.73vw] leading-[150%] md:opacity-80 opacity-70'>{data?.desc}</p>
      </div>

      {/* reviews */}
      <div className='md:grid md:grid-cols-2 w-full md:gap-[2.5vw] gap-[4.8vw] flex flex-col '>
        {reviewData?.map((item, index) => {
          if (index === 0) {
            return (
              <div
                key={index}
                className='md:col-span-2'
              >
                <ReviewItem
                  data={item?.translation}
                  className='md:flex hidden big-item md:p-[1.87vw] md:gap-[2.5vw]'
                />
                <ReviewItem
                  data={item?.translation}
                  className='block md:hidden'
                />
              </div>
            )
          } else {
            return (
              <ReviewItem
                key={index}
                data={item?.translation}
              />
            )
          }
        })}
      </div>

      <div className='w-fit m-auto flex md:gap-[0.75vw] gap-[3.2vw] md:mt-[4.538vw] mt-[6.4vw]'>
        {paginations?.map((pagination, index) => {
          return (
            <span
              key={index}
              className={`${
                index + 1 === activePage ? 'bg-textColor text-white' : 'bg-primaryColor text-textColor opacity-10 '
              }   rounded-full md:w-[2.125vw] w-[9.07vw] md:h-[2.125vw] h-[9.07vw] text-center md:text-[1.125vw] text-[4.27vw] font-manrope leading-[150%] font-semibold flex justify-center items-center cursor-pointer`}
              onClick={() => {
                setActivePage(index + 1)
                refetch({
                  offset: index + 1,
                  size: 7
                })
              }}
            >
              {index + 1}
            </span>
          )
        })}
      </div>
    </section>
  )
}

export default Reviews
