import SearchResult from './SearchResult'

function ListTour({ data }) {
  return (
    <div>
      <SearchResult
        data={data}
        quantity={9}
        text={'You may also like:'}
      />
    </div>
  )
}

export default ListTour
