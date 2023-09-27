import getAboutUsData from '@/data/aboutUs/getAboutUsData'
import { GET_REVIEWS_DATA } from '@/graphql/aboutUs/reviews/queries'
import IndexAboutUs from '@/pageComponent/AboutUs'

export default async function page({ params: { lang } }) {
  const res = await getAboutUsData(GET_REVIEWS_DATA, lang)

  return (
    <IndexAboutUs
      res={res}
      lang={lang}
    />
  )
}
