'use client'
import { DATA_BEST_TOUR } from '@/graphql/filter/queries'
import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import ListTour from './ListTour'
import Sidebar from './Sidebar'
import OtherTours from './OtherTours'
import NewRelease from './NewRelease'
import Loading from '@/components/Common/Loading'

const Search = ({ lang, travelStylesList, dataMenuCountry, dataTaxonomiesBudget, listBlog }) => {
  if (typeof window !== 'undefined') {
    const currentUrl = window?.location.href
    var urlParams = new URLSearchParams(currentUrl)
    var durationParams = urlParams.get('duration')
    var budgetParams = urlParams.get('budget')
    var styleParams = urlParams.get('style')
    var destinationParams = urlParams.get('country')
  }
  const params = {
    day: durationParams,
    budget: budgetParams,
    style: styleParams,
    country: destinationParams
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
  const newArrDataTaxonomiesCountry = handleTaxonomiesName(dataMenuCountry?.data?.allCountries?.nodes)
  const newArrDataTaxonomiesStyleTravel = handleTaxonomiesSlug(travelStylesList?.data?.allTourStyle?.nodes)
  const [destination, setDestination] = useState(null)
  const [travelStyle, setTravelStyle] = useState(null)
  const [day, setDay] = useState(null)
  const [budget, setBudget] = useState(null)

  useEffect(() => {
    const nameV = dataMenuCountry?.data?.allCountries?.nodes.filter((item) => item.slug === destinationParams)
    if (nameV) {
      var nameDef = nameV[0]?.name
      setDestination(nameDef)
    }
    if (durationParams) {
      var rangeArray = durationParams?.split('-').map(Number)
      setDay(rangeArray)
    }
    if (budgetParams) {
      setBudget(budgetParams)
    }
  }, [budgetParams, durationParams, dataMenuCountry, destinationParams])

  useEffect(() => {
    if (styleParams) {
      setTravelStyle(styleParams)
    }
  }, [styleParams])
  const dataAllTours = useQuery(DATA_BEST_TOUR, {
    variables: {
      language: lang?.toUpperCase(),
      countrySlug: !destination ? newArrDataTaxonomiesCountry : destination,
      styleTourSlug: !travelStyle || travelStyle.length === 0 ? newArrDataTaxonomiesStyleTravel : travelStyle
    }
  })
  var allTours = dataAllTours?.data?.allTours?.nodes
  const loading = dataAllTours?.loading
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
          params={params}
          lang={lang}
          travelStylesList={travelStylesList}
          dataMenuCountry={dataMenuCountry}
          dataTaxonomiesBudget={dataTaxonomiesBudget}
          onDay={(data) => setDay(data)}
          onDestination={(data) => setDestination([data])}
          onTravelStyle={(data) => setTravelStyle(data)}
          onBudget={(data) => setBudget(data)}
        />
        {!loading ? (
          <div className='flex-1'>
            {allTours?.length !== 0 ? (
              <ListTour
                data={allTours}
                lang={lang}
              />
            ) : (
              <OtherTours lang={lang} />
            )}
          </div>
        ) : (
          <div className='flex items-center justify-center flex-1 w-full text-center h-[80vh]'>
            <Loading />
          </div>
        )}
      </div>
      {allTours?.length !== 0 && (
        <NewRelease
          data={listBlog}
          lang={lang}
        />
      )}
    </div>
  )
}

export default Search
