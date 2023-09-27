'use client'
import { Box } from '@mui/material'
import Image from 'next/image'

export default function Listimg({ data }) {
  return (
    <Box
      sx={{ border: 'none' }}
      className='hidden-scroll px-[5vw] md:py-[2vw] py-[8vw] w-full h-full grid md:grid-cols-3 grid-cols-1 md:gap-[3vw] gap-[5vw] overflow-y-scroll bg-white border-none rounded-xl'
    >
      {data?.map((item, index) => (
        <Image
          key={index}
          src={item?.sourceUrl}
          alt={item?.altText}
          width={1000}
          height={1000}
          className='md:min-h-[20vw] h-[40vw] object-cover rounded-lg'
        />
      ))}
    </Box>
  )
}
