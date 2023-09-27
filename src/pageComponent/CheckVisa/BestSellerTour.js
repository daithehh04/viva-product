import Button from '@/components/Common/Button'
import SlideTour from '@/components/Common/SlideTour'
import TourItem from '@/components/Common/TourItem'
import Link from 'next/link'

function BestSellerTour({ data }) {
  const dataTour = data?.checkvisa?.bestseller?.bestsellertour
  return (
    <div className='w-full md:mt-[6.87vw]'>
      <h2 className='md:px-[8.13vw] md:mb-[3vw] mb-[7.73vw] heading-1 max-md:pl-[4.27vw]'>Best Seller Tours</h2>
      <div className='flex md:gap-[2.5vw] gap-[4.27vw] md:px-[8.13vw] px-0 max-md:overflow-x-auto bestSellerCheckVisa'>
        {dataTour?.slice(0, 4)?.map((tour, index) => (
          <div
            key={index}
            className={`${index === 0 && 'max-md:ml-[4.27vw]'} ${
              index === dataTour?.length - 1 && 'max-md:mr-[4.27vw]'
            }`}
          >
            <TourItem data={tour} />
          </div>
        ))}
      </div>
      <Button className='btn-secondary m-auto md:mt-[3.5vw] mt-[8.77vw]'>See More</Button>
    </div>
  )
}

export default BestSellerTour
