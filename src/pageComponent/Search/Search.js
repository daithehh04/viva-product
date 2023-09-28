'use client'
import { DATA_BEST_TOUR } from '@/graphql/filter/queries'
import { useQuery } from '@apollo/client'
import { useState } from 'react'
import ListTour from './ListTour'
import Sidebar from './Sidebar'
import OtherTours from './OtherTours'
import NewRelease from './NewRelease'

const Search = ({ lang, travelStylesList, dataMenuCountry, dataTaxonomiesBudget, listBlog }) => {
  const currentUrl = window.location.href;
  const urlParams = new URLSearchParams(currentUrl);
  const durationParams = urlParams.get('duration');
  const budgetParams = urlParams.get('budget');
  const styleParams = urlParams.get('style');
  const destinationParams = urlParams.get('country');
  function handleTaxonomiesSlug(data) {
    const newArrDataTaxonomies = []
    data?.map((item) => {
      newArrDataTaxonomies.push(item?.slug)
    })
    return newArrDataTaxonomies
  }
  const newArrDataTaxonomiesCountry = handleTaxonomiesSlug(dataMenuCountry?.data?.allCountries?.nodes)
  const newArrDataTaxonomiesStyleTravel = handleTaxonomiesSlug(travelStylesList?.data?.allTourStyle?.nodes)
  const [destination, setDestination] = useState(destinationParams || newArrDataTaxonomiesCountry)
  const [initTravelStyle, setInitTravelStyle] = useState(newArrDataTaxonomiesStyleTravel)
  const [travelStyle, setTravelStyle] = useState(styleParams || [])
  const [day, setDay] = useState(durationParams)
  const [budget, setBudget] = useState(budgetParams)
  const dataAllTours = useQuery(DATA_BEST_TOUR, {
    variables: {
      language: lang?.toUpperCase(),
      countrySlug: destination[0] === '' ? newArrDataTaxonomiesCountry : destination,
      styleTourSlug: travelStyle.length === 0 ? initTravelStyle : travelStyle
    }
  })
  var allTours = dataAllTours?.data?.allTours?.nodes
  if (budget) {
    allTours = allTours?.filter((tour) => {
      let priceTour = tour?.translation?.tourDetail?.priceTour
      if (!priceTour) priceTour = 1000
      const arrBudget = budget?.split('-')
      const minBudget = arrBudget[0]
      const maxBudget = arrBudget[1]
      return priceTour >= +minBudget && priceTour <= +maxBudget
    })
  }
  if (day) {
    allTours = allTours?.filter((tour) => {
      let numTour = tour?.translation?.tourDetail?.numberDay
      if (!numTour) numTour = 3
      const minDay = day[0]
      const maxDay = day[1]
      return numTour >= +minDay && numTour <= +maxDay
    })
  }

  return (
    <div className='content mt-[6vw]'>
      <h1 className='text-[4vw] font-optima leading-[4.4vw] capitalize font-semibold mb-[3.44vw]'>our packages</h1>
      <div className='search flex gap-[3.56vw]'>
        <Sidebar
          lang={lang}
          travelStylesList={travelStylesList}
          dataMenuCountry={dataMenuCountry}
          dataTaxonomiesBudget={dataTaxonomiesBudget}
          onDay={(data) => setDay(data)}
          onDestination={(data) => setDestination([data])}
          onTravelStyle={(data) => setTravelStyle(data)}
          onBudget={(data) => setBudget(data)}
        />
        <div className='flex-1'>
          {allTours?.length !== 0 ? <ListTour data={allTours} /> : <OtherTours lang={lang} />}
        </div>
      </div>
      {allTours?.length !== 0 && <NewRelease data={listBlog} />}
    </div>
  )
}

export default Search
