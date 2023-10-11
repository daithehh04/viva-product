export default async function getDataFormBookTour(query, id, lang) {
  const res = await fetch(process.env.NEXT_PUBLIC_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: query,
      variables: { id: id, language: lang?.toUpperCase() }

    }),
    next: { revalidate: process.env.NEXT_PUBLIC_REVALIDATE }
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
