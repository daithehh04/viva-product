import Travel from '@/pageComponent/TravelStyle'
function page({ params: { lang, slug } }) {
  return (
    <div>
      <Travel
        lang={lang}
        slug={slug}
      />
    </div>
  )
}

export default page
