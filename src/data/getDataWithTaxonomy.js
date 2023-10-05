export default async function getDataWithTaxonomy(data, query) {
  const res = await fetch(process.env.NEXT_PUBLIC_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: query,
      variables: {
        language: data?.lang?.toUpperCase(),
        taxonomyValue: data?.taxonomyValue,
        taxonomyName: data?.taxonomyName
      }
    }),
    next: { revalidate: 60 }
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
