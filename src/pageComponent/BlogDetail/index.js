import HeaderBlog from './HeaderBlog'
import OtherArticle from './OtherArticle'
import TextBlogDetail from './TextBlogDetail'
import { DATA_BLOG_DETAIL, GET_ARTICLE_NEWS } from '@/graphql/detail/queries'
import getDataDetail from '@/data/getDataDetail'
import getDataPost from '@/data/getDataPost'
import { notFound } from 'next/navigation'

async function index({ lang, slug }) {
  const idFr = 'FR'
  const idEn = 'EN'
  const idIt = 'IT'
  let data
  let dataNews
  if (lang === 'en') {
    data = await getDataDetail(idEn, slug, DATA_BLOG_DETAIL)
    dataNews = await getDataPost(idEn, GET_ARTICLE_NEWS)
  }
  if (lang === 'fr') {
    data = await getDataDetail(idFr, slug, DATA_BLOG_DETAIL)
    dataNews = await getDataPost(idFr, GET_ARTICLE_NEWS)
  }
  if (lang === 'it') {
    data = await getDataDetail(idIt, slug, DATA_BLOG_DETAIL)
    dataNews = await getDataPost(idIt, GET_ARTICLE_NEWS)
  }

  if (!data) {
    return <p>Loading....</p>
  }
  const dataBlog = data?.data?.postBy

  if (!dataBlog || !data || !dataNews) {
    notFound()
  }

  return (
    <div>
      <HeaderBlog data={data} />
      <TextBlogDetail data={data} />
      <OtherArticle
        data={dataBlog}
        dataNews={dataNews}
        lang={lang}
        dataTitle={data}
      />
    </div>
  )
}

export default index
