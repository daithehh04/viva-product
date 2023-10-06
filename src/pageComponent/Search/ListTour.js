import SearchResult from './SearchResult'

function ListTour({ data,lang,loading, results }) {
  return (
    <div>
      <SearchResult results={results}
        lang={lang}
        loading={loading}
        data={data}
        quantity={9}
        text={'You may also like:'}
      />
    </div>
  )
}

export default ListTour
