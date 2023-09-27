import logo from '@/assets/images/logoF.png'
import location from '@/assets/images/route-squareB.svg'
import Image from 'next/image'
import SlidePartners from './SlidePartners'
import fbIcon from '@/assets/images/facebook.svg'
import linkedIcon from '@/assets/images/linkedin.svg'
import instarIcon from '@/assets/images/instar.svg'
import ytbIcon from '@/assets/images/youtube.svg'
import pay1 from '@/assets/images/pay-1.png'
import pay2 from '@/assets/images/pay-2.png'
import pay3 from '@/assets/images/pay-3.png'
import pay4 from '@/assets/images/pay-4.png'
import forum1 from '@/assets/images/forum-1.png'
import forum2 from '@/assets/images/forum-2.png'
import forum3 from '@/assets/images/forum-3.png'
import getDataPost from '@/data/getDataPost'
import { GET_FOOTER } from '@/graphql/home/queries'

async function Footer({ lang }) {
  const data = await getDataPost(lang?.toUpperCase(), GET_FOOTER)
  const footerData = data?.data?.page?.translation?.home?.footer
  const logoPartner = footerData?.logoPartner
  const col1 = footerData?.column1
  const col2 = footerData?.column2
  const col3 = footerData?.column3
  const col4 = footerData?.column4
  return (
    <footer className='footer max-md:pb-[24.5vw] pb-[4.75vw] pt-[2.62vw] max-md:pt-[16.27vw]'>
      <SlidePartners data={logoPartner} />
      <SlidePartners data={logoPartner} reverse={true} />
      <div className='flex max-md:flex-col max-md:items-center content gap-x-[2vw] items-start pt-[4.62vw] max-md:pt-[10.67vw]'>
        {/* column 1 */}
        <div className='pr-[2.37vw] max-md:flex max-md:flex-col max-md:items-center'>
          <Image
            src={logo}
            width={1000}
            height={1000}
            alt='logo'
            className='w-[12.1875vw] h-[9.625vw] object-cover max-md:w-[39.2vw] max-md:h-[30.7vw]'
          />
          <div className='mt-[1.25vw] max-md:mt-[6.63vw]'></div>
          {col1?.contact?.map((item, index) => (
            <div key={index} className='text-[1vw] max-md:text-[3.73vw] mt-[0.5vw] max-md:mt-[1.07vw]'>
              <strong>{item?.title}: </strong>
              {item?.content}
            </div>
          ))}
          <div className='flex items-center gap-[0.89vw] mt-[1.25vw] max-md:gap-[4.27vw] max-md:mt-[3.2vw]'>
            <div className='w-[2.67vw] h-[2.67vw] max-md:w-[9.6vw] max-md:h-[9.6vw] rounded-full flex items-center justify-center border border-solid border-[#000] fb'>
              <Image
                src={fbIcon}
                width={100}
                height={100}
                alt='img'
                className='w-[0.5vw] h-[1vw] object-cover max-md:w-[1.875vw] max-md:h-[3.5vw]'
              />
            </div>
            <div className='w-[2.67vw] h-[2.67vw] max-md:w-[9.6vw] max-md:h-[9.6vw] rounded-full flex items-center justify-center border border-solid border-[#000] linked'>
              <Image
                src={linkedIcon}
                width={100}
                height={100}
                alt='img'
                className='w-[0.9375vw] h-[0.9375vw] max-md:w-[3.36vw] max-md:h-[3.36vw] object-cover'
              />
            </div>
            <div className='w-[2.67vw] h-[2.67vw] max-md:w-[9.6vw] max-md:h-[9.6vw] rounded-full flex items-center justify-center border border-solid border-[#000] instar'>
              <Image
                src={instarIcon}
                width={100}
                height={100}
                alt='img'
                className='w-[1.07vw] h-[1.07vw] max-md:w-[3.84vw] max-md:h-[3.84vw] object-cover'
              />
            </div>
            <div className='w-[2.67vw] h-[2.67vw] max-md:w-[9.6vw] max-md:h-[9.6vw] rounded-full flex items-center justify-center border border-solid border-[#000] ytb'>
              <Image
                src={ytbIcon}
                width={100}
                height={100}
                alt='img'
                className='w-[1.1vw] h-[0.86vw] object-contain max-md:w-[4.28vw] max-md:h-[3.5vw]'
              />
            </div>
          </div>
        </div>
        {/* column 2 */}
        <div className='w-[20.9375vw] pr-[2.4vw] max-md:w-full max-md:text-center'>
          <h4 className='text-[1.375vw] max-md:text-[4.8vw] font-[700] leading-normal opacity-60 max-md:pb-[3.2vw] max-md:border-b max-md:border-solid max-md:border-[#171717] max-md:border-opacity-20 max-md:pt-[8.53vw]'>
            {col2?.title}
          </h4>
          <ul className='mt-[1.5vw] flex flex-col gap-y-[1.25vw] max-md:mt-[3.2vw] max-md:gap-y-[3.2vw]'>
            {col2?.officesVietnam?.map((item, index) => (
              <li key={index}>
                <div className='flex items-center gap-x-[0.5vw] max-md:justify-center'>
                  <Image
                    src={location}
                    width={100}
                    height={100}
                    alt='location'
                    className='w-[1vw] h-[1vw] object-cover max-md:w-[4.267vw] max-md:h-[4.267vw]'
                  />
                  <span className='text-[1vw] font-[700] max-md:text-[4.267vw]'>{item?.title}</span>
                </div>
                <p className='text-[0.9375vw] font-[400] max-md:text-[3.73vw] mt-[0.5vw] max-md:mt-[2.13vw]'>
                  {item?.content}
                </p>
              </li>
            ))}
          </ul>
        </div>
        {/* column 3 */}
        <div className='w-[20.5vw] max-md:w-full max-md:text-center'>
          <h4 className='text-[1.375vw] max-md:text-[4.8vw] font-[700] leading-normal opacity-60 max-md:pb-[3.2vw] max-md:border-b max-md:border-solid max-md:border-[#171717] max-md:border-opacity-20 max-md:pt-[8.53vw]'>
            {col3?.title}
          </h4>
          <ul className='mt-[1.5vw] flex flex-col gap-y-[1.25vw] max-md:mt-[3.2vw] max-md:gap-y-[3.2vw]'>
            {col3?.officesAboard?.map((item, index) => (
              <li key={index}>
                <div className='flex items-center gap-x-[0.5vw] max-md:justify-center'>
                  <Image
                    src={location}
                    width={100}
                    height={100}
                    alt='location'
                    className='w-[1vw] h-[1vw] object-cover max-md:w-[4.267vw] max-md:h-[4.267vw]'
                  />
                  <span className='text-[1vw] font-[700] max-md:text-[4.267vw]'>{item?.title}</span>
                </div>
                <p className='text-[0.9375vw] font-[400] max-md:text-[3.73vw] mt-[0.5vw] max-md:mt-[2.13vw]'>
                  {item?.content}
                </p>
              </li>
            ))}
          </ul>
        </div>
        {/* Column 4 */}
        <div className='w-[19.8vw] max-md:w-full max-md:text-center'>
          <h4 className='text-[1.375vw] max-md:text-[4.8vw] font-[700] leading-normal opacity-60 max-md:pb-[3.2vw] max-md:border-b max-md:border-solid max-md:border-[#171717] max-md:border-opacity-20 max-md:pt-[8.53vw]'>
            {col4?.titlePayment}
          </h4>
          <div className='flex items-center flex-wrap pay-method mt-[1.25vw] gap-[1.5vw] max-md:gap-[6.4vw] max-md:mt-[3.73vw] max-md:justify-center'>
            {col4?.imgsPayment?.map((item, index) => (
              <Image
                key={index}
                src={item?.sourceUrl}
                width={100}
                height={100}
                alt={item?.altText}
                className='h-[2.5vw] w-[3.3vw] object-contain max-md:w-[14.15vw] max-md:h-[10.25vw]'
              />
            ))}
          </div>
          <h4 className='text-[1.375vw] max-md:text-[4.8vw] font-[700] leading-normal opacity-60 max-md:pb-[3.2vw] max-md:border-b max-md:border-solid max-md:border-[#171717] max-md:border-opacity-20 mt-[4.25vw] max-md:pt-[8.53vw]'>
            {col4?.titleForum}
          </h4>
          <div className='flex items-center mt-[1.25vw] gap-[1.5vw] max-md:gap-[8.53vw] max-md:mt-[3.73vw] max-md:justify-center'>
            {col4?.imgsGallery?.map((item, index) => (
              <Image
                key={index}
                src={item?.sourceUrl}
                width={100}
                height={100}
                alt={item?.altText}
                className='h-[3.125vw] w-[3.125vw] object-contain max-md:w-[13.13vw] max-md:h-[13.13vw]'
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
