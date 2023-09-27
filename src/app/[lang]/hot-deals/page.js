import getHotDealHeader from '@/data/hotDeal'
import getListVoucher from '@/data/hotDeal/getListVoucher'
import HotDeal from '@/components/Common/HotDeal'

async function page({ params: { lang } }) {
  //get header of page
  const result = await getHotDealHeader(lang)
  const hotDeals = result?.data?.page?.translation?.hotDeals
  // get main data of page
  const res = await getListVoucher(lang)
  const listVoucher = res?.data?.allVouchers?.nodes || []

  return (
    <HotDeal
      hotDeals={hotDeals}
      listVoucher={listVoucher}
    />
  )
}

export default page
