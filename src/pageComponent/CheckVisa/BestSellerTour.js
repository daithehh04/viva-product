import Button from '@/components/Common/Button'
import TourItem from '@/components/Common/TourItem'
import Link from 'next/link'

function BestSellerTour({ data, lang, dataCheckVisa }) {
  const dataTour = data?.data?.bestSeller?.tours?.nodes
  return (
    <div className='w-full md:mt-[6.87vw]'>
      <h2 className='md:px-[8.13vw] md:mb-[3vw] mb-[7.73vw] heading-1 max-md:pl-[4.27vw]'>
        {dataCheckVisa?.checkvisa?.besttourtitle?.title}
      </h2>
      <div className='flex md:gap-[2.5vw] gap-[4.27vw] md:px-[8.13vw] px-0 max-md:overflow-x-auto bestSellerCheckVisa'>
        {dataTour?.slice(0, 4)?.map((tour, index) => (
          <div
            key={index}
            className={`max-md:w-[52.50533vw] max-md:h-[67.23253vw] max-md:flex max-md:flex-shrink-0 ${
              index === 0 && 'max-md:ml-[4.27vw]'
            } ${index === dataTour?.length - 1 && 'max-md:mr-[4.27vw]'}`}
          >
            <TourItem data={tour} lang={lang} />
          </div>
        ))}
      </div>
      <Link href={`/${lang}/search`}>
        <Button className='flex mb-[8.77vw] md:mb-[6.25vw] m-auto md:mt-[3.5vw] mt-[8.77vw]'>
          <Button className='btn-secondary' content={dataCheckVisa?.checkvisa?.button}><span>{dataCheckVisa?.checkvisa?.button}</span></Button>
        </Button>
      </Link>
    </div>
  )
}

export default BestSellerTour
