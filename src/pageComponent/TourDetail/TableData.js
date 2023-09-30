'use client'

export default function TableData({ data, header = [] }) {
  const headerData = Object.values(header)

  return (
    <div className='mb-10 overflow-auto w-full hidden-scroll'>
      <table className='tour-detail-table table-auto md:w-full w-[150vw] border-separate border border-[#EBEBEB] rounded-2xl border-solid bg-white'>
        <thead className='md:h-[3vw] h-[12.8vw] bg-[#FFECA2] text-center '>
          <tr>
            {headerData?.map((item, index) => {
              return (
                <th
                  key={index}
                  className={`${
                    index === 0 ? 'rounded-tl-2xl' : index === headerData?.length - 1 ? 'rounded-tr-2xl' : ''
                  } md:text-[1vw] text-[3.73vw] font-bold leading-normal border border-[#EBEBEB] border-solid align-middle`}
                >
                  {item}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => {
            const values = Object.values(item)
            return (
              <tr
                key={index}
                className='md:h-[3vw] h-[8vw]'
              >
                {values?.map((rowItem, rowIndex) => {
                  return (
                    <td
                      className={`break-all max-w-[18.75vw] min-w-[5vw] px-[1vw] md:text-[1vw] text-[2.93vw] leading-normal opacity-80 text-textColor border border-[#EBEBEB] border-solid text-center align-middle ${
                        index === data?.length - 1 && rowIndex === 0 && 'rounded-bl-2xl'
                      } ${index === data?.length - 1 && rowIndex === values?.length - 1 && 'rounded-br-2xl'}`}
                      key={rowIndex}
                    >
                      {rowItem}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
