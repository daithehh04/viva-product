import SearchResult from './SearchResult'

function ListTour({ data,lang }) {
  return (
    <div>
      <SearchResult
      lang={lang}
        data={data}
        quantity={9}
        text={'You may also like:'}
      />
    </div>
  )
}

export default ListTour
