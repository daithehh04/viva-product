import Image from 'next/image'
import Link from 'next/link'

function DestinationItem({ tour, lang }) {
  return (
    <Link
      href={`/${lang}/our-tours/${encodeURIComponent(tour?.slug)}`}
      className='h-[19vw] relative '
    >
      {tour?.country?.thumb?.sourceUrl ? (
        <Image
          src={tour?.country?.thumb?.sourceUrl}
          width={1000}
          height={1000}
          alt='img'
          className='object-cover w-full h-full rounded-[0.625vw]'
        />
      ) : (
        <div className='w-full h-full bg-slate-600 rounded-[0.625vw]'></div>
      )}

      <div className='absolute bottom-0 pb-[1.38vw] px-[2vw] z-10'>
        <div className='flex gap-x-[0.62vw] items-center'>
          <Image
            src={tour?.country?.flag?.sourceUrl}
            width={100}
            height={100}
            alt='img'
            className='w-[2vw] h-[2vw] rounded-full object-cover'
          />
          <h3 className='uppercase text-[#fff]'>{tour?.name}</h3>
        </div>
        <p className='text-white font-manrope text-[0.9375vw] font-[500] leading-normal mt-[0.31vw] line-clamp-2'>
          {tour?.description}
        </p>
      </div>
      <div className='absolute inset-0 bg-menuOverlayDes rounded-[0.625vw]'></div>
    </Link>
  )
}

export default DestinationItem
