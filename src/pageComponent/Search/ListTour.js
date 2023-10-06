import SearchResult from './SearchResult'

function ListTour({ data,lang,loading }) {
  return (
    <div>
      <SearchResult
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
