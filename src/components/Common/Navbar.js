'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import logo from '@/assets/images/logo.svg'
// import Button from '@mui/material/Button'
import star from '@/assets/images/star.svg'
import SelectLang from '../Language/SelectLang'
import MenuDestinations from '@/components/Menu/Destinations'
import MenuStyle from '@/components/Menu/TravelStyle'
import MenuRcmService from '@/components/Menu/RecomendServices'
import bars from '@/assets/images/bars.svg'
import InputSearchMb from './InputSearchMb'
import MenuAbout from '../Menu/AboutUs/MenuAbout'
import MenuMb from '../Menu/MenuMb'
import planeF from '@/assets/images/planeF.svg'
import starF from '@/assets/images/starF.svg'
import HotDeal from './HotDeal'
import BookTour from './BookTour'
import ModalCustom from './ModalCustom'
import Button from './Button'

export default function Navbar({
  params,
  dataHome,
  dataMenuCountry,
  travelStylesList,
  rcmServicesList,
  hotDeals,
  listVoucher,
  dataAboutUs,
  dataBookTour
}) {
  const refMb = useRef()
  const refMenu = useRef()
  const refBtnBookTour = useRef()
  // const refFormPopup = useRef()
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    const nav = document.querySelector('.navbar')

    window.addEventListener('scroll', function () {
      var scrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (scrollPosition >= 200) {
        nav.classList.add('nav-active')
      } else {
        nav.classList.remove('nav-active')
      }
    })
    // ===========================
    window.addEventListener('scroll', headerSticky)
    let lastScrolledPos = 0
    function headerSticky() {
      if (lastScrolledPos >= window.scrollY) {
        nav.classList.remove('header-hide')
      } else {
        nav.classList.add('header-hide')
      }
      lastScrolledPos = window.scrollY
    }
    const menuItems = refMenu?.current?.querySelectorAll('.menu-item')
    const menuNavs = refMenu?.current?.querySelectorAll('.nav-link:has(.menu-item)')
    menuItems?.forEach((item, index) => {
      var distance = menuNavs[index].getBoundingClientRect().left + menuNavs[index].clientWidth / 2
      item.style.transformOrigin = `${distance}px top`
    })
    menuNavs?.forEach((item, index) => {
      item.addEventListener('mouseover', function () {
        item.classList.add('show')
        menuItems[index].style.transition = 'all 0.5s'
      })
      item.addEventListener('mouseout', function () {
        item.classList.remove('show')
        // menuItems[index].style.display = 'none'
      })
    })
  }, [])

  const handleCloseMenu = () => {
    const menuLink = refMenu?.current?.querySelector('.nav-link.show')
    const menuItem = refMenu?.current?.querySelector('.nav-link.show .menu-item')
    if (menuItem && menuLink) {
      menuLink.classList.remove('show')
      menuItem.style.transition = 'none'
    }
  }
  const handleClickBars = () => {
    refMb.current.classList.add('active')
  }
  const handleClickClose = () => {
    refMb.current.classList.remove('active')
  }
  // const handleOpenPopup = () => {
  //   refFormPopup.current.classList.add('active')
  // }
  // const handleClosePopup = () => {
  //   refFormPopup.current.classList.remove('active')
  // }

  return (
    <div className=''>
      <nav className='bg-white w-full navbar h-[5.375vw] max-lg:h-[14.93vw]'>
        <div className='flex items-center h-full content '>
          <div className='flex items-center gap-x-[2vw]'>
            <Link href={`/${params}`}>
              <Image
                src={logo}
                width={100}
                height={100}
                alt='viva-travel'
                className='w-[3.5625vw] object-cover max-lg:w-[10.4vw]'
              />
            </Link>
            <div
              className='max-lg:hidden flex items-center gap-x-[2vw] mr-[6vw]'
              ref={refMenu}
            >
              <div className='relative flex-shrink-0'>
                <div className='capitalize text-[1vw] nav-link'>
                  {dataHome?.nav1}
                  <div className='menu-item'>
                    <MenuDestinations
                      data={dataMenuCountry}
                      lang={params}
                      onCloseMenu={handleCloseMenu}
                    />
                  </div>
                </div>
                <span className='absolute top-[-12px] right-[-6px] px-[10px] rounded-[99px] bg-primaryColor text-[12px]'>
                  Hot
                </span>
              </div>
              <div className='capitalize text-[1vw] nav-link'>
                {dataHome?.nav2}
                <div className='menu-item'>
                  <MenuStyle
                    travelStylesList={travelStylesList}
                    lang={params}
                    onCloseMenu={handleCloseMenu}
                  />
                </div>
              </div>
              <Link
                href={`/${params}/hot-deals`}
                className='capitalize text-[1vw] nav-link'
              >
                {dataHome?.nav3}
                <div className='hidden menu-item'>
                  <HotDeal
                    hotDeals={hotDeals}
                    menu
                  />
                </div>
              </Link>
              <Link
                href={`/${params}/check-visa`}
                className='capitalize text-[1vw] nav-link'
              >
                {dataHome?.nav4}
              </Link>
              <div className='capitalize text-[1vw] nav-link'>
                {dataHome?.nav5}
                <div className='menu-item'>
                  <MenuAbout
                    dataAboutUs={dataAboutUs}
                    onCloseMenu={handleCloseMenu}
                  />
                </div>
              </div>
              <div className='capitalize text-[1vw] nav-link'>
                {dataHome?.nav6}
                <div className='menu-item'>
                  <MenuRcmService
                    rcmServicesList={rcmServicesList}
                    lang={params}
                    onCloseMenu={handleCloseMenu}
                  />
                </div>
              </div>
              <Link
                href={`/${params}/blog`}
                className='capitalize text-[1vw] nav-link'
              >
                {dataHome?.nav7}
              </Link>
            </div>
          </div>
          <div
            className='flex ml-auto max-lg:hidden'
            ref={refBtnBookTour}
            // onClick={handleOpenPopup}
            onClick={() => setOpenModal(true)}
          >
            <Button className='flex-shrink-0 btn-primary mr-[3.25vw]'>
              <Image
                src={star}
                width={50}
                height={50}
                alt='img'
                className='w-[1.25vw] object-cover mr-[0.75vw]'
              />
              Book tour
            </Button>
          </div>
          <div className='flex-shrink-0 max-lg:hidden'>
            <SelectLang lang={params} />
          </div>
          <div className='flex-1 hidden max-lg:block'>
            <InputSearchMb />
          </div>
          <Image
            src={bars}
            width={50}
            height={50}
            alt='bars'
            className='w-[4.8vw] h-[2.93vw] ml-auto object-cover cursor-pointer hidden max-lg:block'
            onClick={handleClickBars}
          />
        </div>
      </nav>
      <div
        className='fixed inset-0 hidden overflow-y-auto w-full h-full bg-white nav-mobile max-lg:block !z-[199] nav-mobile'
        ref={refMb}
      >
        <MenuMb
          onCloseMenu={handleClickClose}
          lang={params}
          hotDeals={hotDeals}
          listVoucher={listVoucher}
          menu
        />
      </div>
      <div className='books-footer h-[15.2vw] fixed bottom-0 left-0 right-0 z-[99] hidden max-md:flex'>
        <Link
          href='#'
          className='flex items-center gap-[1.6vw] w-[50%] bg-[#fff] justify-center'
        >
          <Image
            src={planeF}
            width={50}
            height={50}
            alt='img'
            className='w-[4.26vw] h-[4.26vw]'
          />
          <span className='text-[3.46vw] font-[500]'>Tours List</span>
        </Link>
        <Link
          href='#'
          className='flex items-center gap-[1.6vw] w-[50%] bg-[#FFD220] justify-center'
        >
          <Image
            src={starF}
            width={50}
            height={50}
            alt='img'
            className='w-[4.26vw] h-[4.26vw]'
          />
          <span className='text-[3.46vw] font-[500]'>Book tour</span>
        </Link>
      </div>
      {/* <div
        className='absolute top-0 z-[999] w-full flex justify-center form-popup h-[100vh] overflow-auto'
        ref={refFormPopup}
      >
        <BookTour
          data={dataBookTour}
          onClose={handleClosePopup}
          refFormPopup={refFormPopup}
        />
      </div> */}

      {openModal && (
        <ModalCustom
          openModal={openModal}
          setOpenModal={setOpenModal}
          className='w-[91.46vw] md:w-[82.93vw] md:h-[90vh] h-[80vh]'
        >
          <div className='w-full h-full overflow-y-auto md:rounded-[16px] overflow-x-hidden'>
            <BookTour
              data={dataBookTour}
              setOpenModal={setOpenModal}
            />
          </div>
        </ModalCustom>
      )}
    </div>
  )
}
