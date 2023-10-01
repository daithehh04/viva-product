import { getMeta } from '@/data/metaData/getMeta'
import getMetaDataTour from '@/data/metaData/getMetaData'
import { GET_META_DATA } from '@/graphql/country/queries'
import Destination from '@/pageComponent/Destination'

export async function generateMetadata({ params: { lang, slug } }) {
  const res = await getMetaDataTour(GET_META_DATA, lang, slug)
  if (!res) return
  const { meta } = res?.data?.countries?.translation?.country || ''
  const title = meta?.title
  const excerpt = meta?.description
  return getMeta(title, excerpt)
}

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
