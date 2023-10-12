import BlogItem from '@/components/Common/BlogItem'
import Button from '@/components/Common/Button'

import Link from 'next/link'

function OtherArticle({ data, dataNews, lang, dataTitle }) {
  const otherArticle = data?.blogdetail?.otherarticle
  const otherArticleNew = dataNews?.data?.posts?.nodes
  return (
    <div className={`md:mt-[7vw] mt-[15.47vw] md:px-[8.13vw] w-full articles`}>
      <h2 className='heading-1 md:mb-[3vw] mb-[6.4vw] md:px-0 pl-[4.27vw]'>
        {dataTitle?.data?.postBy?.translation?.blogdetail?.transtitle?.heading}
      </h2>
      <div className='flex md:gap-[2.5vw] article-webkit  max-md:overflow-x-auto md:mb-[3.5vw] mb-[9.87vw]'>
        {otherArticle
          ? otherArticle
              ?.slice(0, 4)
              ?.map((data, index) => (
                <BlogItem
                  key={index}
                  lang={lang}
                  data={data}
                  className={`${otherArticle.length - 1 === index ? 'mr-[4.27vw]' : ''}`}
                />
              ))
          : otherArticleNew?.map((item, index) => (
              <BlogItem
                key={index}
                lang={lang}
                data={item}
                className={`${otherArticleNew.length - 1 === index ? 'mr-[4.27vw]' : ''}`}
              />
            ))}
      </div>

      <div className='flex justify-center md:mb-[1vw]'>
        <Link href={`/${lang}/blog`}>
          <Button className='btn-secondary'>
            {' '}
            {dataTitle?.data?.postBy?.translation?.blogdetail?.transtitle?.button}
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default OtherArticle
