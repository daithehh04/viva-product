import AboutItem from './AboutItem'

function MenuAbout({ dataAboutUs,onCloseMenu,lang }) {
  return (
    <div className='content flex gap-[2.5vw] py-[2.81vw]'>
      <AboutItem
        data={dataAboutUs?.wwrRes?.who_we_are?.banner}
        slug='about-us/who-we-are'
        onCloseMenu={onCloseMenu}
        lang={lang}
      />
      <AboutItem
        data={dataAboutUs?.rtRes?.responsibleTravel?.banner}
        slug='about-us/responsible-travel'
        onCloseMenu={onCloseMenu}
        lang={lang}
      />
      <AboutItem
        data={dataAboutUs?.rvRes?.aboutUsReviews?.banner}
        slug='about-us/reviews'
        onCloseMenu={onCloseMenu}
        lang={lang}
      />
    </div>
  )
}

export default MenuAbout
