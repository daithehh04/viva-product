'use client'

import Image from 'next/image'
import comma from '@/assets/images/comma.svg'
import commaRes from '@/assets/images/about/commaRes.svg'
import sloganBg from '@/assets/images/sloganBg.png'
import wave from '@/assets/images/wave.svg'
import waveWhite from '@/assets/images/waveWhite.svg'
import AOS from 'aos'
import waveNormalWhite from '@/assets/images/waveNormalWhite.svg'
import waveNormal from '@/assets/images/waveNormal.svg'
import waveShort from '@/assets/images/waveShort.svg'
import subIcon from '@/assets/images/about/subIcon.svg'
import { useEffect, useRef, useState } from 'react'
import CountDown from '@/components/Common/CountDown'

export default function Statistics({ data }) {
  useEffect(() => {
    AOS.init({
      disable: function () {
        var maxWidth = 769
        return window.innerWidth < maxWidth
      }
    })
    AOS.refresh()
  }, [])
  const imgRef = useRef([])
  const [scrollPositions, setScrollPositions] = useState([
    {
      id: 1,
      location: 0
    }
  ])

  const handleScroll = () => {
    const newScrollPositions = imgRef.current.map((item, index) => {
      const { top, bottom } = item.getBoundingClientRect()

      if (index < 5)
        return {
          id: index,
          location: top - (window?.innerHeight * 80) / 100 >= 0 ? (window?.innerHeight * 80) / 100 - top : 0
        }
      else {
        return {
          id: index,
          location: top - (window?.innerHeight * 80) / 100 >= 0 ? top - (window?.innerHeight * 80) / 100 : 0
        }
      }
    })

    setScrollPositions(newScrollPositions)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section
      className='about-statistic overflow-x-hidden md:mt-[6.125vw] rounded-2xl md:rounded-none mt-[-7.2vw] bg-white z-10 relative
      pt-[25.6vw] md:pt-0'
    >
      <Image
        src={subIcon}
        alt='subIcon'
        className='md:hidden w-[27.46vw] h-[15.73vw] absolute top-[8.53vw] right-[8.5%]'
      />

      {/* description about company */}
      <div className='content relative md:mb-[3.125vw] mb-[6.4vw] md:mt-[4.6vw]'>
        <Image
          data-aos-once='true'
          data-aos-disabled='true'
          data-aos='fade-up'
          data-aos-duration='1000'
          src={comma}
          alt='comma'
          className='md:flex hidden md:w-[11.8125vw] md:h-[12.1875vw] w-[18.13vw] h-[13.33vw] absolute top-[-4.625vw]  left-[-2.1875vw]'
        />

        <Image
          src={commaRes}
          alt='commaRes'
          className='md:hidden flex md:w-[11.8125vw] md:h-[12.1875vw] w-[18.13vw] h-[13.33vw] absolute top-[-4.625vw] left-[2.1875vw]'
        />

        <div
          data-aos-once='true'
          data-aos-disabled='true'
          data-aos='fade-up'
          data-aos-duration='1000'
          className='statistic-desc md:w-[56.4375vw] w-full text-[#414141] font-optima font-semibold xl:text-[2.5625vw] md:text-[3.5625vw] text-[6.4vw] leading-[150%] md:tracking-[-2.05px] tracking-[-1.2px]'
          dangerouslySetInnerHTML={{ __html: `${data?.description}` }}
        ></div>
      </div>

      {/* list stat*/}

      <div className='flex justify-between md:gap-[8.3125vw] gap-[4vw] overflow-hidden flex-wrap md:flex-nowrap px-[4.26vw]'>
        {data?.statistics?.map((item, index) => {
          return <CountDown key={index} data={item} time={2000} />
        })}
      </div>

      {/* slogan*/}
      <div className='slogan-container'>
        <div className='slogan relative mt-[9.3125vw]'>
          <div className='slogan-des down text-[2.7vw] absolute bottom-0 left-0 font-manrope font-extrabold tracking-[-0.96px] leading-[140%] max-md:hidden'>
            <div
              style={{
                transform: `translateX(${scrollPositions[0]?.location}px)`,
                transition: 'transform 0.6s ease-in-out'
              }}
              ref={(e) => (imgRef.current[0] = e)}
              className='text-[4.375vw] font-optima leading-[120%]'
            >
              {data?.slogan?.line1}
            </div>
            <div
              style={{
                transform: `translateX(${scrollPositions[6]?.location}px)`,
                transition: 'transform 0.6s ease-in-out'
              }}
              ref={(e) => (imgRef.current[6] = e)}
            >
              {data?.slogan?.line2}
            </div>
            <div
              style={{
                transform: `translateX(${scrollPositions[2]?.location}px)`,
                transition: 'transform 0.6s ease-in-out'
              }}
              ref={(e) => (imgRef.current[2] = e)}
            >
              {data?.slogan?.line3}
            </div>
            <div
              style={{
                transform: `translateX(${scrollPositions[7]?.location}px)`,
                transition: 'transform 0.6s ease-in-out'
              }}
              ref={(e) => (imgRef.current[7] = e)}
            >
              {data?.slogan?.line4}
            </div>
          </div>
          <Image
            style={{
              transform: `translateX(${scrollPositions[0]?.location}px)`,
              transition: 'transform 0.6s ease-in-out'
            }}
            ref={(e) => (imgRef.current[0] = e)}
            src={wave}
            alt='Wave'
            className='wave absolute bottom-[8.75vw] -left-[3.12vw] max-md:w-[32.658vw] max-md:h-[2.23vw] '
          />
          <Image
            style={{
              transform: `translateX(${scrollPositions[0]?.location}px)`,
              transition: 'transform 0.6s ease-in-out'
            }}
            ref={(e) => (imgRef.current[0] = e)}
            src={waveNormal}
            alt='Wave'
            className='wave absolute top-[9.69vw] right-[40%] max-md:w-[32.658vw] max-md:h-[2.23vw] max-md:right-0'
          />
          <div className='slogan-img'>
            <Image
              src={data?.slogan?.image?.sourceUrl || sloganBg}
              alt={data?.slogan?.image?.altText}
              width={1000}
              height={1000}
              className='slogan-img max-md:w-[73.32vw] max-md:h-[73.32vw]'
            />
            <div
              className='slogan-des up text-[2.7vw] absolute bottom-0 left-0 font-manrope font-extrabold tracking-[-0.96px] leading-[140%]
             max-md:mt-[10vw] max-md:hidden'
            >
              <div
                style={{
                  transform: `translateX(${scrollPositions[0]?.location}px)`,
                  transition: 'transform 0.6s ease-in-out'
                }}
                ref={(e) => (imgRef.current[0] = e)}
                className='text-[4.375vw] font-optima leading-[120%]'
              >
                {data?.slogan?.line1}
              </div>
              <div
                style={{
                  transform: `translateX(${scrollPositions[6]?.location}px)`,
                  transition: 'transform 0.6s ease-in-out'
                }}
                ref={(e) => (imgRef.current[6] = e)}
              >
                {data?.slogan?.line2}
              </div>
              <div
                style={{
                  transform: `translateX(${scrollPositions[2]?.location}px)`,
                  transition: 'transform 0.6s ease-in-out'
                }}
                ref={(e) => (imgRef.current[2] = e)}
              >
                {data?.slogan?.line3}
              </div>
              <div
                style={{
                  transform: `translateX(${scrollPositions[7]?.location}px)`,
                  transition: 'transform 0.6s ease-in-out'
                }}
                ref={(e) => (imgRef.current[7] = e)}
              >
                {data?.slogan?.line4}
              </div>
            </div>
            <Image
              style={{
                transform: `translateX(${scrollPositions[0]?.location}px)`,
                transition: 'transform 0.6s ease-in-out'
              }}
              ref={(e) => (imgRef.current[0] = e)}
              src={waveWhite}
              alt='Wave'
              className='wave absolute bottom-[8.75vw] -left-[3.12vw] max-md:w-[32.658vw] max-md:h-[2.23vw]'
            />
            <Image
              style={{
                transform: `translateX(${scrollPositions[0]?.location}px)`,
                transition: 'transform 0.6s ease-in-out'
              }}
              ref={(e) => (imgRef.current[0] = e)}
              src={waveNormalWhite}
              alt='Wave'
              className='wave absolute top-[9.69vw] right-[40%] max-md:w-[32.658vw] max-md:h-[2.23vw] max-md:right-0'
            />
            <Image
              style={{
                transform: `translateX(${scrollPositions[0]?.location}px)`,
                transition: 'transform 0.6s ease-in-out'
              }}
              ref={(e) => (imgRef.current[0] = e)}
              src={waveShort}
              alt='Wave'
              className='wave absolute top-[50%] -translate-y-1/2 left-[30%] max-md:w-[14.64vw] max-md:h-[2.22vw]'
            />
          </div>
        </div>
        <div className='hidden max-md:flex max-md:flex-col text-center mt-[6.1vw]'>
          <h2 className='text-[7.26vw] leading-[8.96vw] mb-[2.1vw] whitespace-nowrap font-semibold font-optima uppercase'>
            {data?.slogan?.line1}
          </h2>
          <p className='text-[4.26vw] leading-[6.4vw]'>
            {`${data?.slogan?.line2} ${data?.slogan?.line3} ${data?.slogan?.line4}`}
          </p>
        </div>
      </div>
    </section>
  )
}
