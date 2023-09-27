import AboutItem from './AboutItem'

function MenuAbout({ dataAboutUs }) {
  return (
    <div className='content flex gap-[2.5vw] pt-[2.81vw]'>
      <AboutItem
        data={dataAboutUs?.wwrRes?.who_we_are?.banner}
        slug='/about-us/who-we-are'
      />
      <AboutItem
        data={dataAboutUs?.rtRes?.responsibleTravel?.banner}
        slug='/about-us/responsible-travel'
      />
      <AboutItem
        data={dataAboutUs?.rvRes?.aboutUsReviews?.banner}
        slug='/about-us/reviews'
      />
    </div>
  )
}

export default MenuAbout
