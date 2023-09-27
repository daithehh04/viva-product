import FilterTour from '@/components/Common/FilterTour'
import FilterTourTravelStyle from '@/components/Common/FilterTourTravelStyle'

function FilterTourTravel({
  tourStyleName,
  setBudget,
  setDuration,
  setTravelStyle,
  setDestination,
  destination,
  travelStyle,
  duration,
  budget
}) {
  return (
    <div className='md:pt-[2.5vw] pt-[11.2vw] md:mb-[2vw] w-full md:px-[8.06vw] px-[4.27vw] md:rounded-t-none rounded-t-[4.27vw] relative z-[10] bg-white translate-y-[-16%] md:translate-y-0'>
      <h2 className='heading-1 md:mb-[2vw] mb-[4.27vw]'>{tourStyleName}</h2>
      <div className='bg-filterTour'>
        <FilterTourTravelStyle
          setBudget={setBudget}
          setDuration={setDuration}
          setTravelStyle={setTravelStyle}
          setDestination={setDestination}
          destination={destination}
          travelStyle={travelStyle}
          duration={duration}
          budget={budget}
        />
      </div>
    </div>
  )
}

export default FilterTourTravel
