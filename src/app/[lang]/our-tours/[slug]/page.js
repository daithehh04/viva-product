import Destination from '@/pageComponent/Destination'
function page({ params: { lang, slug } }) {
  return (
    <div>
      <Destination
        lang={lang}
        slug={slug}
      />
    </div>
  )
}

export default page
