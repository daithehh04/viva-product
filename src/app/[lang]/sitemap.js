import getDataSiteMap from '@/data/getDataSiteMap'

const GET_POSTS = `{
  posts(first: 100){
    nodes{
      slug
      date
    }
  }
}`

const GET_TOURS = `
{
  allTours(first: 100){
    nodes{
      slug
      date
    }
  }
}
`
const GET_COUNTRIES = `
{
  allCountries(first:100,where:{language:EN}){
    nodes{
      slug
    }
  }
}`

const GET_TOUR_STYLE = `
{
  allTourStyle(first:100,where:{language:EN}){
    nodes{
      slug
    }
  }
}
`
const GET_CATEGORIES = `
{
  categories(where:{language:EN}){
    nodes{
      slug
    }
  }
}
`
const GET_HOT_DEAL = `
{
  page(id: "cG9zdDoxMTAy", idType: ID) {
    translation(language: EN) {
      hotDeals {
        promotionList {
          ... on Tours {
            slug
            date
          }
        }
      }
    }
  }
}
`

export default async function sitemap() {
  const posts = await getDataSiteMap(GET_POSTS)
  const tours = await getDataSiteMap(GET_TOURS)
  const countries = await getDataSiteMap(GET_COUNTRIES)
  const tourStyles = await getDataSiteMap(GET_TOUR_STYLE)
  const categories = await getDataSiteMap(GET_CATEGORIES)
  const hotDeals = await getDataSiteMap(GET_HOT_DEAL)

  const arrPosts = posts?.data?.posts?.nodes?.map((e) => {
    return {
      url: `${process.env.DOMAIN}/${e?.slug}`,
      lastModified: e?.date,
      priority: 0.8
    }
  })
  const arrTours = tours?.data?.allTours?.nodes?.map((e) => {
    return {
      url: `${process.env.DOMAIN}/tours/${e?.slug}`,
      lastModified: e?.date,
      priority: 0.8
    }
  })
  const arrCountries = countries?.data?.allCountries?.nodes?.map((e) => {
    return {
      url: `${process.env.DOMAIN}/our-tours/${e?.slug}`,
      lastModified: new Date(),
      priority: 0.8
    }
  })
  const arrTourStyles = tourStyles?.data?.allTourStyle?.nodes?.map((e) => {
    return {
      url: `${process.env.DOMAIN}/travel-style/${e?.slug}`,
      lastModified: new Date(),
      priority: 0.8
    }
  })
  const arrCategories = categories?.data?.categories?.nodes?.map((e) => {
    return {
      url: `${process.env.DOMAIN}/blog/${e?.slug}`,
      lastModified: new Date(),
      priority: 0.8
    }
  })
  const arrHotDeals = hotDeals?.data?.page?.translation?.hotDeals?.promotionList?.map((e) => {
    return {
      url: `${process.env.DOMAIN}/hot-deals/${e?.slug}`,
      lastModified: e?.date,
      priority: 0.8
    }
  })
  return [
    {
      url: process.env.DOMAIN,
      lastModified: new Date(),
      priority: 1
    },
    {
      url: `${process.env.DOMAIN}/hot-deals`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/check-visa`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/blog`,
      changeFrequency: 'weekly',
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/about-us/who-we-are`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/about-us/responsible-travel`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/about-us/reviews`,
      lastModified: new Date(),
      priority: 0.9
    },
    ...arrPosts,
    ...arrTours,
    ...arrCountries,
    ...arrTourStyles,
    ...arrCategories,
    ...arrHotDeals
  ]
}
