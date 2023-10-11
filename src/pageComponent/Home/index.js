'use client'
import { useEffect, useState } from 'react'
import Banner from './Banner'
import Surveys from './Surveys'
import InspectionTrip from './InspectionTrip'
import BestTour from './BestTour'
import TravelStyle from './TravelStyle/TravelStyle'
import TouristRepresentative from './Representative/TouristRepresentative'
import Review from './Reviews/Review'
import BookingProcessSteps from '@/components/Common/BookingProcessSteps'
import TravelStyleMb from './TravelStyle/TravelStyleMb'
import AboutVideo from '@/components/Common/Video'
import OurBlogHomePage from '@/components/Common/OurBlogHomePage'
import AOS from 'aos'

import { useQuery } from '@apollo/client'
import { DATA_BEST_TOUR, DATA_BEST_TOUR_HOME_PAGE } from '@/graphql/filter/queries'
export default function Home({
  data,
  lang,
  dataTaxonomiesCountry,
  dataTaxonomiesStyleTour,
  nextStep,
  dataTaxonomiesBudget,
  dataTaxonomiesDuration,
  dataBookTour
}) {
  const arrDataTaxonomiesBudget = dataTaxonomiesBudget?.data?.allBudget?.nodes
  const arrDataTaxonomiesDuration = dataTaxonomiesDuration?.data?.allDuration?.nodes
  const arrDataTaxonomiesCountry = dataTaxonomiesCountry?.data?.allCountries?.nodes
  const arrDataTaxonomiesStyleTour = dataTaxonomiesStyleTour?.data?.allTourStyle?.nodes
  const arrSlugTaxonomiesCountry = handleTaxonomiesName(arrDataTaxonomiesCountry)
  const arrSlugTaxonomiesStyleTravel = handleTaxonomiesSlug(arrDataTaxonomiesStyleTour)
  const [destination, setDestination] = useState(arrSlugTaxonomiesCountry)
  const [travelStyle, setTravelStyle] = useState(arrSlugTaxonomiesStyleTravel)
  const [budget, setBudget] = useState(null)
  const [duration, setDuration] = useState(null)
  const lng = lang?.toUpperCase()

  const dataBestToursHomePage = useQuery(DATA_BEST_TOUR_HOME_PAGE, {
    variables: {
      language: lng,
      countrySlug: !destination ? arrSlugTaxonomiesCountry : destination,
      styleTourSlug: !travelStyle || travelStyle.length === 0 ? arrSlugTaxonomiesStyleTravel : travelStyle,
      bestSellerSlug: ['BestSeller']
    }
  })

  const loading = dataBestToursHomePage?.loading
  var allTours = dataBestToursHomePage?.data?.allTours?.nodes
  if (budget) {
    allTours = allTours?.filter((tour) => {
      let priceTour = tour?.translation?.tourDetail?.priceTour
      if (!priceTour) priceTour = 1000
      const arrBudget = budget.split('-')
      const minBudget = arrBudget[0]
      const maxBudget = arrBudget[1]
      return priceTour >= +minBudget && priceTour <= +maxBudget
    })
  }
  if (duration) {
    allTours = allTours?.filter((tour) => {
      let numTour = tour?.translation?.tourDetail?.numberDay
      if (!numTour) numTour = 3
      const arrDuration = duration.split('-')
      const minDay = arrDuration[0]
      const maxDay = arrDuration[1]
      return numTour >= +minDay && numTour <= +maxDay
    })
  }
  useEffect(() => {
    AOS.init({ disable: 'mobile' })
    AOS.refresh()
  }, [])
  if (!data) {
    return <p>Loading....</p>
  }
  const finalData = data?.data?.page?.home

  const banner = finalData?.banner
  const survey = finalData?.survey
  const inspection = finalData?.inspectionTrip
  const representative = finalData?.representative
  const customerReview = finalData?.customerReview
  const aboutVideo = finalData?.video
  const travelStyleList = finalData?.travelStyle
  const blog = finalData?.blogs
  const nextStepBookTour = nextStep?.data?.page?.translation?.aboutUsReviews?.steps
  const button = finalData?.groupbutton

  function handleTaxonomies(data) {
    const newArrDataTaxonomies = []
    data?.map((item) => {
      newArrDataTaxonomies.push(item)
    })
    return newArrDataTaxonomies
  }
  function handleTaxonomiesSlug(data) {
    const newArrDataTaxonomies = []
    data?.map((item) => {
      newArrDataTaxonomies.push(item?.slug)
    })
    return newArrDataTaxonomies
  }
  function handleTaxonomiesName(data) {
    const newArrDataTaxonomies = []
    data?.map((item) => {
      newArrDataTaxonomies.push(item?.name)
    })
    return newArrDataTaxonomies
  }
  const newArrDataTaxonomiesCountry = handleTaxonomies(arrDataTaxonomiesCountry)
  const newArrDataTaxonomiesStyleTravel = handleTaxonomies(arrDataTaxonomiesStyleTour)
  const newArrDataTaxonomiesBudget = handleTaxonomies(arrDataTaxonomiesBudget)
  const newArrDataTaxonomiesDuration = handleTaxonomies(arrDataTaxonomiesDuration)
  // =================================================================

  const dataFilter = {
    countries: newArrDataTaxonomiesCountry,
    style: newArrDataTaxonomiesStyleTravel,
    budget: newArrDataTaxonomiesBudget,
    duration: newArrDataTaxonomiesDuration
  }
  return (
    <div>
      <Banner
        lang={lang}
        data={banner}
        dataFilter={dataFilter}
      />
      <div className='body-wrapper'>
        <div className='style-mb'>
          <TravelStyleMb
            lang={lang}
            data={travelStyleList}
            title={travelStyleList?.title}
          />
        </div>
        <div className='survey-wrapper'>
          <Surveys
            data={survey}
            lang={lang}
            button={button}
            dataBookTour={dataBookTour}
          />
        </div>
        <div className='trip-wrapper'>
          <InspectionTrip
            data={inspection}
            lang={lang}
          />
        </div>
        <div className='bg-home34'>
          <BestTour
            loading={loading}
            dataFilter={dataFilter}
            finalData={finalData}
            onDestination={(data) => setDestination(data)}
            onTravelStyle={(data) => setTravelStyle(data)}
            onBudget={(data) => setBudget(data)}
            onDuration={(data) => setDuration(data)}
            allTours={allTours}
            lang={lang}
            button={button}
          />
          <TravelStyle
            data={travelStyleList?.travelStyleList}
            title={travelStyleList?.title}
            desc={travelStyleList?.desc}
            lang={lang}
          />
        </div>
        <div className='represent-wrapper'>
          <TouristRepresentative data={representative} />
        </div>
        <AboutVideo data={aboutVideo} />
        <div className='review-wrapper'>
          <Review
            data={customerReview}
            button={button}
            lang={lang}
          />
        </div>
        <div className='relative bg-home67'>
          <div className='max-md:mt-[15.12vw] mt-[8.62vw]'>
            <BookingProcessSteps data={nextStepBookTour} />
          </div>
          <div 
          className='pt-[7.31vw]'>
            <OurBlogHomePage
              data={blog}
              button={button}
              lang={lang}
            />
          </div>
          <div className='absolute bottom-0 left-0 right-0 bg-overlayBanner2 h-[6.62vw] max-md:hidden'></div>
        </div>
      </div>
    </div>
  )
}
