import BlogDetail from '@/pageComponent/BlogDetail'
function page({ params: { lang, slug } }) {
  return (
    <BlogDetail
      lang={lang}
      slug={slug}
    />
  )
}

export default page
