import { GET_HOT_DEAL_DATA } from '@/graphql/hotDeal/queries'

export default async function getHotDealHeader(lang) {
  const res = await fetch(process.env.NEXT_PUBLIC_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: GET_HOT_DEAL_DATA,
      variables: { language: lang?.toUpperCase() }
    }),
    next: { revalidate: 60 }
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
