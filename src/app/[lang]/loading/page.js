'use client'

import React, { useEffect } from 'react'
import gsap from 'gsap'

export default function Load() {
  const list = new Array(10).fill(0)

  useEffect(() => {
    // gsap.to('.loading-title', 1, {
    //   delay: 0,
    //   x: 0,
    //   opacity: 1,
    //   ease: 'power4.inOut'
    // })

    gsap.to('.logo', 1, {
      delay: 0,
      y: -window.innerHeight,
      ease: 'power4.inOut'
    })
    gsap.to('.bar', 1, {
      delay: 1,
      height: 0,
      stagger: {
        amount: 0.5
      },
      ease: 'power4.inOut'
    })
  }, [])
  return (
    <div className='overlay fixed flex w-[100vw] h-[100vh] z-[100000]'>
      {list.map((item, index) => {
        return (
          <div
            key={index}
            className='bar w-[10vw] h-[105vh] bg-[#1a1a1a]'
          ></div>
        )
      }, [])}
      <div className='logo absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-[2vw]'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width={100}
          height={100}
          viewBox='0 0 57 42'
          fill='none'
          className='z-[20] w-[10vw] h-10vw'
        >
          <g clipPath='url(#clip0_3374_3786)'>
            <path
              d='M38.4255 4.66736C37.587 3.72968 35.8854 3.66117 34.7176 3.84386C33.2655 4.06936 31.9338 4.81151 30.7616 5.65213C30.5426 4.57459 30.222 3.5156 29.7418 2.52797C29.2456 1.50751 28.4463 0.270116 27.1987 0.0374807C25.9381 -0.198009 24.5585 0.766786 23.7592 1.60741C22.6799 2.74062 22.0996 4.26631 21.721 5.73634C21.2016 7.75299 21.0537 9.85813 21.1552 11.929C21.2597 14.0456 21.6165 16.2435 22.5551 18.1759C22.8888 18.8624 23.369 19.6502 24.0232 20.1597C23.7635 20.1712 23.4966 20.1883 23.2152 20.2183C22.7597 20.2682 21.2597 20.2611 20.8013 20.2696C20.5808 20.2739 20.3603 20.2711 20.1397 20.2668C20.0933 20.2668 20.0484 20.2639 20.0019 20.2639C20.0019 20.2625 19.6813 20.2482 19.6654 20.2468C19.5566 20.2397 19.4492 20.2325 19.3404 20.224C19.1228 20.2026 18.9067 20.1769 18.6905 20.1512C18.6528 20.1469 18.6296 20.144 18.6122 20.1426C18.528 20.1298 18.4439 20.1169 18.3612 20.1027C18.0841 20.057 17.8056 20.0085 17.5314 19.9514C16.9192 19.8244 16.0517 19.5889 15.3583 19.3491C12.1044 18.2273 9.18424 16.3205 6.86025 13.8557C5.52998 12.4457 4.41296 10.8643 3.5324 9.15879C3.51354 9.12311 3.48743 9.09171 3.45696 9.06174H0C1.72776 12.3557 4.30126 15.1945 7.50725 17.224C11.0977 19.4961 15.2698 20.6436 19.5334 20.9233C20.7708 21.0047 22.0126 21.0132 23.25 20.9461C25.5435 20.822 27.8095 20.4894 29.8636 19.4219C30.6557 19.0108 31.4014 18.5142 32.0788 17.9433C33.7471 16.5346 35.2021 14.9447 36.425 13.1593C37.471 11.6293 38.3864 9.93948 38.8216 8.14405C39.0885 7.04652 39.2553 5.5979 38.4255 4.66878V4.66736ZM23.3269 15.4742C23.1905 14.9947 23.0788 14.5094 22.986 14.0284C22.3245 10.6017 22.4347 6.74538 23.7287 3.45994C23.971 2.84338 24.264 2.23967 24.6586 1.69733C24.7065 1.63168 25.0662 1.22492 25.0662 1.22492L25.1301 1.17497C26.1455 1.08077 26.8796 1.62454 27.4657 2.39381C28.3245 3.51988 28.7916 4.91855 29.1093 6.26726C29.1644 6.49847 29.2137 6.73111 29.2587 6.96374C28.0459 8.0313 26.9666 9.243 26.015 10.5275C24.9009 12.0289 23.8985 13.6959 23.3254 15.4756L23.3269 15.4742ZM27.1001 19.596C25.838 20.1612 24.8022 19.0551 24.6978 17.9062C24.6223 17.0641 24.9038 16.2549 25.175 15.4671C25.4463 14.6764 25.8133 13.9157 26.2152 13.1778C27.0885 11.5765 28.2012 10.0094 29.5053 8.61931C29.6199 9.71113 29.6504 10.8129 29.6011 11.9062C29.5517 13.0322 29.4197 14.1555 29.1891 15.2601C28.9874 16.2235 28.7713 17.1997 28.3288 18.0917C28.0488 18.6555 27.7195 19.3191 27.1015 19.596H27.1001ZM37.2055 6.72397C37.1562 8.12121 36.6252 9.49847 36.0087 10.7459C35.1659 12.4514 34.0474 14.0342 32.7708 15.4642C31.6015 16.7744 30.2727 17.9932 28.7669 18.9423C28.7988 18.9038 28.8351 18.8667 28.8656 18.8282C29.8651 17.5751 30.3815 15.9637 30.7065 14.4366C31.1547 12.3386 31.2432 10.1664 31.0546 8.03415C31.03 7.76013 30.9995 7.48467 30.9647 7.20922C31.7843 6.49847 32.6591 5.86051 33.5846 5.3253C34.1721 4.98563 34.7887 4.68734 35.4473 4.49895C35.8129 4.39333 36.1538 4.37192 36.1538 4.37192C37.0111 4.9057 37.2389 5.77059 37.2041 6.72397H37.2055Z'
              fill='url(#paint0_radial_3374_3786)'
            />
            <path
              d='M7.12645 22.7441H9.49686C9.49686 22.7441 11.8818 36.3184 14.3726 36.3184C14.3726 36.3184 17.5974 35.5933 19.2164 22.7441H21.301C21.301 22.7441 20.3668 36.6809 14.3653 36.6809C14.3653 36.6809 8.88032 36.7422 7.125 22.7441H7.12645Z'
              fill='#FDD104'
            />
            <path
              d='M28.5405 22.7441H30.9109C30.9109 22.7441 33.2958 36.3184 35.7866 36.3184C35.7866 36.3184 39.0115 35.5933 40.6305 22.7441H42.7151C42.7151 22.7441 41.7808 36.6809 35.7794 36.6809C35.7794 36.6809 30.2944 36.7422 28.5391 22.7441H28.5405Z'
              fill='#FDD104'
            />
            <path
              d='M44.9244 36.7493C44.9244 36.6637 44.9244 36.1899 44.9244 36.1028C44.9244 29.1837 47.4688 23.1066 50.2135 23.1066C52.9582 23.1066 54.9036 29.1851 54.9036 36.1028C54.9036 36.1899 54.9036 36.6623 54.9036 36.7493H57.0012C57.0012 36.6466 57.0027 36.1556 57.0027 36.0514C57.0027 29.1038 54.2145 22.7427 50.215 22.7427C46.2155 22.7427 42.8281 29.1038 42.8281 36.0514C42.8281 36.1556 42.8281 36.6466 42.8296 36.7493H44.9273H44.9244Z'
              fill='#FDD104'
            />
            <path
              d='M54.5304 27.969C54.1837 28.0389 54.0357 27.7506 53.8935 27.969C53.1885 29.0523 51.8466 30.2854 50.5207 30.7378C49.8592 30.9633 49.144 31.1032 48.336 31.1588C47.3481 31.2273 46.0338 31.0175 45.0444 30.832C44.5483 30.7392 44.2074 31.0418 43.8607 31.3073C43.5314 31.5599 43.6735 31.8025 44.1087 31.8838C47.9226 32.5989 52.5023 31.7825 54.9177 29.3377C54.7741 28.881 54.6334 28.4314 54.5304 27.969Z'
              fill='#FDD104'
            />
            <path
              d='M26.011 22.7441H24.1367V36.7408H26.011V22.7441Z'
              fill='#FDD104'
            />
            <path
              d='M34.0352 20.9611L35.3843 17.5029H36.0385L37.392 20.9611H36.732L36.4027 20.0462H34.9999L34.6706 20.9611H34.0352ZM35.6991 18.0995L35.1681 19.5867H36.2416L35.715 18.0995H35.7005H35.6991Z'
              fill='#0C743B'
            />
            <path
              d='M39.8691 19.8081H40.4842C40.4842 20.0592 40.5669 20.2462 40.7308 20.3675C40.8948 20.4888 41.1095 20.5488 41.3764 20.5488C41.6433 20.5488 41.816 20.4974 41.9378 20.3961C42.0597 20.2947 42.1206 20.1706 42.1206 20.025C42.1206 19.8123 42.0234 19.6696 41.8305 19.5983C41.755 19.5697 41.6709 19.5412 41.5766 19.5155C41.4837 19.4898 41.3546 19.457 41.1922 19.4156C41.0297 19.3756 40.8933 19.3399 40.7816 19.3114C40.2637 19.1787 40.0041 18.8875 40.0041 18.4351C40.0041 18.1097 40.1317 17.8585 40.3856 17.6815C40.6395 17.506 40.9412 17.4175 41.2894 17.4175C41.6738 17.4175 41.9944 17.5145 42.2512 17.7101C42.5094 17.9056 42.637 18.1753 42.637 18.5207H42.0219C41.9886 18.114 41.7362 17.9099 41.2632 17.9099C41.0921 17.9099 40.9426 17.9455 40.8135 18.0169C40.6844 18.0883 40.6191 18.2024 40.6191 18.3609C40.6191 18.5778 40.7584 18.7262 41.0369 18.8062C41.0398 18.8062 41.1167 18.8261 41.2676 18.8647C41.4185 18.9032 41.5737 18.9432 41.7333 18.986C41.8928 19.0274 41.9987 19.0573 42.051 19.073C42.27 19.1416 42.4397 19.2557 42.5572 19.4199C42.6747 19.5826 42.7342 19.761 42.7342 19.9551C42.7342 20.1492 42.6951 20.3076 42.6167 20.4517C42.5384 20.5959 42.431 20.7086 42.2947 20.7914C42.1583 20.8742 42.0103 20.9356 41.8493 20.9784C41.6883 21.0198 41.5171 21.0412 41.3372 21.0412C40.9107 21.0412 40.5611 20.9384 40.2884 20.7315C40.0157 20.5245 39.8764 20.2162 39.8706 19.8066L39.8691 19.8081Z'
              fill='#0C743B'
            />
            <path
              d='M45.2871 20.9611V17.5029H45.9022V20.9611H45.2871Z'
              fill='#0C743B'
            />
            <path
              d='M48.541 20.9611L49.8901 17.5029H50.5444L51.8979 20.9611H51.2378L50.9085 20.0462H49.5057L49.1764 20.9611H48.541ZM50.2049 18.0995L49.674 19.5867H50.7475L50.2209 18.0995H50.2064H50.2049Z'
              fill='#0C743B'
            />
            <path
              d='M17.8047 38.9859V38.4492H20.7278V38.9859H19.5803V42.0016H18.9478V38.9859H17.8047Z'
              fill='#0C743B'
            />
            <path
              d='M23.125 42.0001V38.4478H24.8499C25.2415 38.4478 25.5375 38.532 25.7406 38.6989C25.9422 38.8659 26.0438 39.1028 26.0438 39.4083C26.0438 39.5681 26.0205 39.7066 25.9727 39.8264C25.9248 39.9463 25.8624 40.0377 25.7855 40.1019C25.7087 40.1661 25.6448 40.2118 25.5955 40.2389C25.5462 40.266 25.4969 40.2874 25.4461 40.3031V40.3131C25.5839 40.3302 25.7087 40.3973 25.8175 40.5144C25.9263 40.6314 25.9814 40.8155 25.9814 41.0638C25.9814 41.5477 26.0467 41.8602 26.1787 41.9987H25.5012C25.4374 41.8959 25.4055 41.7218 25.4055 41.4763C25.4055 41.1352 25.3561 40.8926 25.256 40.7498C25.1559 40.6071 24.9674 40.5358 24.6874 40.5358H23.7575V41.9987H23.125V42.0001ZM23.7575 38.9558V40.0648H24.7947C25.2067 40.0648 25.4113 39.8764 25.4113 39.4982C25.4113 39.2898 25.3547 39.1471 25.2415 39.07C25.1284 38.9944 24.9761 38.9558 24.7846 38.9558H23.7575Z'
              fill='#0C743B'
            />
            <path
              d='M28.1753 42.0001L29.5607 38.4478H30.2338L31.625 42.0001H30.9475L30.6081 41.0596H29.1661L28.8266 42.0001H28.1738H28.1753ZM29.8842 39.06L29.3387 40.5871H30.4412L29.9001 39.06H29.8856H29.8842Z'
              fill='#0C743B'
            />
            <path
              d='M34.2373 42.0001L33.0332 38.4478H33.6904L34.5956 41.2594H34.6057L35.5313 38.4478H36.1739L34.9394 42.0001H34.2358H34.2373Z'
              fill='#0C743B'
            />
            <path
              d='M38.5469 42.0001V38.4478H41.1465V38.9844H39.1794V39.9149H41V40.423H39.1794V41.4634H41.1813V42.0001H38.5469Z'
              fill='#0C743B'
            />
            <path
              d='M43.8555 42.0001V38.4478H44.488V41.4634H46.3231V42.0001H43.8555Z'
              fill='#0C743B'
            />
          </g>
          <defs>
            <radialGradient
              id='paint0_radial_3374_3786'
              cx={0}
              cy={0}
              r={1}
              gradientUnits='userSpaceOnUse'
              gradientTransform='translate(24.1116 22.2906) scale(27.7975 26.8116)'
            >
              <stop
                offset='0.34'
                stopColor='#F9D904'
              />
              <stop
                offset='0.37'
                stopColor='#EFD406'
              />
              <stop
                offset='0.42'
                stopColor='#D4C90C'
              />
              <stop
                offset='0.49'
                stopColor='#A9B716'
              />
              <stop
                offset='0.56'
                stopColor='#6D9D24'
              />
              <stop
                offset='0.65'
                stopColor='#217D35'
              />
              <stop
                offset='0.67'
                stopColor='#0C743B'
              />
            </radialGradient>
            <clipPath id='clip0_3374_3786'>
              <rect
                width={57}
                height={42}
                fill='white'
              />
            </clipPath>
          </defs>
        </svg>

        <div className='loading-title text-white relative z-0'>Asia Viva Travel</div>
      </div>
    </div>
  )
}
