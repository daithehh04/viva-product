import BlogItem from '@/components/Common/BlogItem'
import Button from '@/components/Common/Button'

import Link from 'next/link'

function OtherArticle({ data, dataNews }) {
  const otherArticle = data?.blogdetail?.otherarticle
  const otherArticleNew = dataNews?.data?.posts?.nodes
  return (
    <div className={`md:mt-[7vw] mt-[15.47vw] md:px-[8.13vw] w-full articles`}>
      <h2 className='heading-1 md:mb-[3vw] mb-[6.4vw] md:px-0 pl-[4.27vw]'>Other Articles</h2>
      <div className='flex md:gap-[2.5vw] article-webkit  overflow-x-auto md:mb-[3.5vw] mb-[9.87vw]'>
        {otherArticle
          ? otherArticle?.slice(0, 4)?.map((data, index) => (
              <Link
                href={`/${data?.translation?.slug}`}
                key={index}
              >
                <BlogItem
                  data={data}
                  className={'articleMb'}
                />
              </Link>
            ))
          : otherArticleNew?.map((item, index) => (
              <Link
                href={`/${item?.slug}`}
                key={index}
                className='md:w-[19.0625vw] articleNews w-[52.26667vw]'
              >
                <BlogItem data={item} />
              </Link>
            ))}
      </div>

      <div className='flex justify-center md:mb-[1vw]'>
        <Link href='/blog'>
          <Button className='btn-secondary'>See More</Button>
        </Link>
      </div>
    </div>
  )
}

export default OtherArticle
