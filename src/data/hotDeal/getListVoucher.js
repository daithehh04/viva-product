import { GET_LIST_VOUCHER } from '@/graphql/hotDeal/queries'

export default async function getListVoucher(lang) {
  const res = await fetch(process.env.NEXT_PUBLIC_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: GET_LIST_VOUCHER,
      variables: { language: lang?.toUpperCase() }
    })
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
