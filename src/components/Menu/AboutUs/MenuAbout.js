import AboutItem from './AboutItem'

function MenuAbout({ dataAboutUs,onCloseMenu }) {
  return (
    <div className='content flex gap-[2.5vw] pt-[2.81vw]'>
      <AboutItem
        data={dataAboutUs?.wwrRes?.who_we_are?.banner}
        slug='/about-us/who-we-are'
        onCloseMenu={onCloseMenu}
      />
      <AboutItem
        data={dataAboutUs?.rtRes?.responsibleTravel?.banner}
        slug='/about-us/responsible-travel'
        onCloseMenu={onCloseMenu}
      />
      <AboutItem
        data={dataAboutUs?.rvRes?.aboutUsReviews?.banner}
        slug='/about-us/reviews'
        onCloseMenu={onCloseMenu}
      />
    </div>
  )
}

export default MenuAbout
