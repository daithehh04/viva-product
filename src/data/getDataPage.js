export const idIt = 'cG9zdDoyOTk='
export const idEn = 'cG9zdDoxOQ=='
export const idFr = 'cG9zdDozMDE='

export default async function getDataPage(slug, query) {
  const res = await fetch(process.env.NEXT_PUBLIC_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: query,
      variables: { id: slug }
    }),
    next: { revalidate: 10 }
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
