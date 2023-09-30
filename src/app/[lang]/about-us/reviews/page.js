import getAboutUsData from '@/data/aboutUs/getAboutUsData'
import { getMeta } from '@/data/metaData/getMeta'
import getMetaDataPages from '@/data/metaData/getMetaDataPages'
import { GET_META_DATA, GET_REVIEWS_DATA } from '@/graphql/aboutUs/reviews/queries'
import IndexAboutUs from '@/pageComponent/AboutUs'

export async function generateMetadata({ params: { lang } }) {
  const res = await getMetaDataPages(GET_META_DATA, lang)

  const { featuredImage, aboutUsReviews } = res?.data?.page?.translation
  const title = aboutUsReviews?.meta?.title
  const excerpt = aboutUsReviews?.meta?.description
  return getMeta(title, excerpt, featuredImage)
}

export default async function page({ params: { lang } }) {
  const res = await getAboutUsData(GET_REVIEWS_DATA, lang)

  return (
    <IndexAboutUs
      res={res}
      lang={lang}
    />
  )
}
