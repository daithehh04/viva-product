import { getMeta } from '@/data/metaData/getMeta'
import getMetaDataTour from '@/data/metaData/getMetaData'
import BlogDetail from '@/pageComponent/BlogDetail'

const GET_META_DATA_BLOG_DETAIL = `
query ($language: LanguageCodeEnum!, $slug: String!) {
  postBy(slug: $slug) {
    translation(language: $language) {
      blogdetail {
        meta{
          title
        }
      }
      excerpt
    	featuredImage{
        node{
          sourceUrl
          altText
          title
        }
      }
    }
  }
}`

export async function generateMetadata({ params: { lang, slug } }) {
  const res = await getMetaDataTour(GET_META_DATA_BLOG_DETAIL, lang, slug)
  if (!res) return
  const { excerpt, blogdetail } = res?.data?.postBy?.translation || ''
  const featuredImage = res?.data?.postBy?.translation?.featuredImage
  const title = blogdetail?.meta?.title
  return getMeta(title, excerpt, featuredImage)
}

function page({ params: { lang, slug } }) {
  return (
    <BlogDetail
      lang={lang}
      slug={slug}
    />
  )
}

export default page
