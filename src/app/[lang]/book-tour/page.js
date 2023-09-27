import BookTour from '@/components/Common/BookTour'

import getDataFormBookTour from '@/data/formBookTour/getDataFormBookTour'
import { GET_DATA_FORM_BOOKTOUR } from '@/graphql/formBookTour/queries'
async function page({ params: { lang } }) {
  const idEn = 'cG9zdDoxNDIy'
  const idFr = 'cG9zdDoxNDIy'
  const idIt = 'cG9zdDoxNDIy'

  let data
  if (lang === 'en') {
    data = await getDataFormBookTour(GET_DATA_FORM_BOOKTOUR, idEn, lang)
  }
  if (lang === 'it') {
    data = await getDataFormBookTour(GET_DATA_FORM_BOOKTOUR, idIt, lang)
  }
  if (lang === 'en') {
    data = await getDataFormBookTour(GET_DATA_FORM_BOOKTOUR, idFr, lang)
  }

  return <BookTour data={data} />
}

export default page
