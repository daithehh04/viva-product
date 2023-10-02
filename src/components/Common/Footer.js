import logo from '@/assets/images/logoF.png'
import location from '@/assets/images/route-squareB.svg'
import Image from 'next/image'
import SlidePartners from './SlidePartners'
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
      <div className='pointer-events-none select-none'>
        <SlidePartners data={logoPartner} />
        <SlidePartners data={logoPartner} reverse={true} />
      </div>
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
            <div className='w-[2.67vw] h-[2.67vw] max-md:w-[9.6vw] max-md:h-[9.6vw] rounded-full flex items-center justify-center border  fb'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='md:w-[2.67vw] md:h-[2.67vw]'
                width='43'
                height='43'
                viewBox='0 0 43 43'
                fill='none'
              >
                <circle cx='21.4091' cy='21.4091' r='21.0523' stroke='#171717' stroke-width='0.713636' />
                <path
                  d='M23.2026 18.7315V16.5928C23.2026 16.2962 23.3054 16.0424 23.5109 15.8314C23.7165 15.6203 23.9677 15.5148 24.2645 15.5148H25.3435V12.8456H23.2026C22.6203 12.8456 22.0837 12.9882 21.5927 13.2734C21.1017 13.5585 20.7106 13.9464 20.4195 14.4369C20.1283 14.9274 19.9827 15.4635 19.9827 16.0452V18.7315H17.8418V21.4007H19.9827V29.9729H23.2026V21.4007H25.3435L26.4054 18.7315H23.2026Z'
                  fill='#171717'
                />
              </svg>
            </div>
            <div className='w-[2.67vw] h-[2.67vw] max-md:w-[9.6vw] max-md:h-[9.6vw] rounded-full flex items-center justify-center border border-solid border-[#000] linked'>
              <svg
                className='w-[0.9375vw] h-[0.9375vw] max-md:w-[3.36vw] max-md:h-[3.36vw] object-cover'
                xmlns='http://www.w3.org/2000/svg'
                width='15'
                height='16'
                viewBox='0 0 15 16'
                fill='none'
              >
                <g clip-path='url(#clip0_3137_132)'>
                  <path
                    d='M12.9545 0.5H2.04545C1.50297 0.5 0.982697 0.715503 0.5991 1.0991C0.215503 1.4827 0 2.00297 0 2.54545L0 13.4545C0 13.997 0.215503 14.5173 0.5991 14.9009C0.982697 15.2845 1.50297 15.5 2.04545 15.5H12.9545C13.497 15.5 14.0173 15.2845 14.4009 14.9009C14.7845 14.5173 15 13.997 15 13.4545V2.54545C15 2.00297 14.7845 1.4827 14.4009 1.0991C14.0173 0.715503 13.497 0.5 12.9545 0.5ZM5.11364 12.3705C5.11375 12.412 5.10565 12.4533 5.08981 12.4917C5.07397 12.5302 5.0507 12.5651 5.02133 12.5946C4.99195 12.624 4.95706 12.6474 4.91864 12.6634C4.88022 12.6793 4.83904 12.6875 4.79744 12.6875H3.45C3.40833 12.6876 3.36706 12.6795 3.32854 12.6636C3.29002 12.6477 3.25503 12.6244 3.22556 12.5949C3.1961 12.5654 3.17275 12.5304 3.15686 12.4919C3.14097 12.4534 3.13284 12.4121 3.13295 12.3705V6.72159C3.13295 6.63751 3.16636 6.55686 3.22582 6.49741C3.28527 6.43795 3.36591 6.40455 3.45 6.40455H4.79744C4.88138 6.40477 4.9618 6.43827 5.02108 6.49771C5.08035 6.55714 5.11364 6.63765 5.11364 6.72159V12.3705ZM4.1233 5.86932C3.87045 5.86932 3.62328 5.79434 3.41305 5.65387C3.20282 5.51339 3.03896 5.31373 2.9422 5.08013C2.84544 4.84654 2.82012 4.58949 2.86945 4.3415C2.91878 4.09352 3.04054 3.86573 3.21932 3.68694C3.39811 3.50815 3.6259 3.38639 3.87389 3.33706C4.12188 3.28774 4.37892 3.31305 4.61252 3.40981C4.84612 3.50657 5.04578 3.67043 5.18625 3.88066C5.32673 4.0909 5.4017 4.33806 5.4017 4.59091C5.4017 4.92996 5.26702 5.25513 5.02727 5.49488C4.78752 5.73463 4.46235 5.86932 4.1233 5.86932ZM12.1568 12.3926C12.1569 12.4309 12.1495 12.4689 12.1349 12.5043C12.1203 12.5397 12.0988 12.5719 12.0717 12.599C12.0446 12.6261 12.0124 12.6475 11.977 12.6621C11.9416 12.6767 11.9037 12.6842 11.8653 12.6841H10.4165C10.3782 12.6842 10.3402 12.6767 10.3048 12.6621C10.2694 12.6475 10.2372 12.6261 10.2101 12.599C10.183 12.5719 10.1616 12.5397 10.147 12.5043C10.1323 12.4689 10.1249 12.4309 10.125 12.3926V9.74631C10.125 9.35085 10.2409 8.01449 9.09119 8.01449C8.20057 8.01449 8.01903 8.92898 7.98324 9.33977V12.396C7.98325 12.4726 7.95312 12.5461 7.89938 12.6006C7.84563 12.6552 7.77259 12.6864 7.69602 12.6875H6.29659C6.25835 12.6875 6.22049 12.68 6.18518 12.6653C6.14986 12.6506 6.11778 12.6292 6.09079 12.6021C6.06379 12.575 6.0424 12.5429 6.02784 12.5075C6.01329 12.4721 6.00585 12.4343 6.00597 12.396V6.69688C6.00585 6.65864 6.01329 6.62075 6.02784 6.5854C6.0424 6.55004 6.06379 6.5179 6.09079 6.49082C6.11778 6.46374 6.14986 6.44226 6.18518 6.4276C6.22049 6.41294 6.25835 6.4054 6.29659 6.4054H7.69602C7.77333 6.4054 7.84747 6.43611 7.90213 6.49077C7.95679 6.54543 7.9875 6.61957 7.9875 6.69688V7.18949C8.31818 6.69261 8.80824 6.3108 9.85398 6.3108C12.1705 6.3108 12.1551 8.47386 12.1551 9.66193L12.1568 12.3926Z'
                    fill='#171717'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_3137_132'>
                    <rect width='15' height='15' fill='white' transform='translate(0 0.5)' />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className='w-[2.67vw] h-[2.67vw] max-md:w-[9.6vw] max-md:h-[9.6vw] rounded-full flex items-center justify-center border border-solid border-[#000] instar'>
              <svg
                className='w-[1.07vw] h-[1.07vw] max-md:w-[3.84vw] max-md:h-[3.84vw] object-cover'
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                viewBox='0 0 18 18'
                fill='none'
              >
                <path
                  d='M5.50778 1.87305C3.05173 1.87305 1.05469 3.87009 1.05469 6.32614V12.492C1.05469 14.948 3.05173 16.945 5.50778 16.945H11.6736C14.1296 16.945 16.1267 14.948 16.1267 12.492V6.32614C16.1267 3.87009 14.1296 1.87305 11.6736 1.87305H5.50778ZM12.7012 4.61341C13.078 4.61341 13.3863 4.9217 13.3863 5.2985C13.3863 5.6753 13.078 5.98359 12.7012 5.98359C12.3244 5.98359 12.0161 5.6753 12.0161 5.2985C12.0161 4.9217 12.3244 4.61341 12.7012 4.61341ZM8.59069 5.64105C10.6699 5.64105 12.3587 7.3298 12.3587 9.40905C12.3587 11.4883 10.6699 13.177 8.59069 13.177C6.51144 13.177 4.82269 11.4883 4.82269 9.40905C4.82269 7.3298 6.51144 5.64105 8.59069 5.64105ZM8.59069 6.32614C6.89166 6.32614 5.50778 7.71002 5.50778 9.40905C5.50778 11.1081 6.89166 12.492 8.59069 12.492C10.2897 12.492 11.6736 11.1081 11.6736 9.40905C11.6736 7.71002 10.2897 6.32614 8.59069 6.32614Z'
                  fill='#171717'
                />
              </svg>
            </div>
            <div className='w-[2.67vw] h-[2.67vw] max-md:w-[9.6vw] max-md:h-[9.6vw] rounded-full flex items-center justify-center border border-solid border-[#000] ytb'>
              <svg
                className='w-[1.1vw] h-[0.86vw] object-contain max-md:w-[4.28vw] max-md:h-[3.5vw]'
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='19'
                viewBox='0 0 20 19'
                fill='none'
              >
                <path
                  d='M17.9844 4.89733C17.7927 4.2165 17.2277 3.67975 16.511 3.49766C15.211 3.16675 9.99935 3.16675 9.99935 3.16675C9.99935 3.16675 4.78768 3.16675 3.48768 3.49766C2.77102 3.67975 2.20602 4.2165 2.01435 4.89733C1.66602 6.13233 1.66602 9.50008 1.66602 9.50008C1.66602 9.50008 1.66602 12.8678 2.01435 14.1028C2.20602 14.7837 2.77102 15.3204 3.48768 15.5025C4.78768 15.8334 9.99935 15.8334 9.99935 15.8334C9.99935 15.8334 15.211 15.8334 16.511 15.5025C17.2285 15.3204 17.7927 14.7837 17.9844 14.1028C18.3327 12.8678 18.3327 9.50008 18.3327 9.50008C18.3327 9.50008 18.3327 6.13233 17.9844 4.89733ZM8.33268 11.5568V7.44333C8.33268 7.13854 8.68018 6.94854 8.95768 7.10054L12.7077 9.15729C12.9852 9.30929 12.9852 9.69087 12.7077 9.84287L8.95768 11.8996C8.68018 12.0524 8.33268 11.8616 8.33268 11.5568Z'
                  fill='black'
                />
              </svg>
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
