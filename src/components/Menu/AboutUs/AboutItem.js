import Image from 'next/image'
import icon from '@/assets/images/icon-style.svg'
import Link from 'next/link'
function AboutItem({ data, slug,onCloseMenu,lang }) {
  return (
    <Link
      href={`/${lang}/${slug}`}
      className='relative h-max'
      onClick={onCloseMenu}
    >
      <Image
        src={data?.backgroundImage?.sourceUrl}
        width={200}
        height={200}
        alt={data?.backgroundImage?.altText}
        className='h-[13.6875vw] w-full object-cover rounded-[0.625vw]'
      />
      <div className='absolute bottom-0 pb-[1.95vw] z-10 flex flex-col items-center justify-center w-full'>
        <Image
          src={icon}
          width={100}
          height={100}
          alt='img'
          className='w-[3.56vw] h-[2.625vw] object-contain'
        />
        <span className='text-[2vw] text-white uppercase font-optima mt-[0.68vw] block font-[600]'>{data?.title}</span>
      </div>
      <div
        className='absolute bottom-0 left-0 right-0 h-[10.9375vw] rounded-[0.625vw]'
        style={{
          background:
            'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.37) 41.89%, rgba(0, 0, 0, 0.81) 100%)'
        }}
      ></div>
    </Link>
  )
}

export default AboutItem
