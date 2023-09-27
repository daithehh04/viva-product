import { GET_DATA_CHECKVISA } from '@/graphql/page/queries'

import Banner from './Banner'
import BestSellerTour from './BestSellerTour'
import Infomation from './Infomation'
import getDataPost from '@/data/getDataPost'

async function index({ lang }) {
  let data = await getDataPost(lang, GET_DATA_CHECKVISA)
  const dataCheckVisa = data?.data?.page?.translation

  return (
    <div>
      <Banner data={dataCheckVisa} />
      <Infomation data={dataCheckVisa} />
      <BestSellerTour data={dataCheckVisa} />
    </div>
  )
}

export default index
