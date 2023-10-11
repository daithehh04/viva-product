import { GET_LIST_PROMOTION_TOUR } from '@/graphql/hotDeal/queries'

export default async function getListPromotionTour(lang) {
  const res = await fetch(process.env.NEXT_PUBLIC_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: GET_LIST_PROMOTION_TOUR,
      variables: { language: lang?.toUpperCase() }

    }),
    next: { revalidate: process.env.NEXT_PUBLIC_REVALIDATE }
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
