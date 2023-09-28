'use client'

import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Image from 'next/image'
import { useState } from 'react'
const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 6 + ITEM_PADDING_TOP
    }
  }
}

const Placeholder = ({ item, icon }) => (
  <div className='flex items-center w-full gap-[0.62vw] border-none outline-none'>
    <Image src={icon} alt='Money Image' />

    <span className='text-[0.875vw] font-normal'>{item}</span>
  </div>
)

export default function OptionCustomer({ icon, list, defaultValue, onSelect }) {
  const [personName, setPersonName] = useState(defaultValue)

  const [isSelectorOpen, setIsSelectorOpen] = useState(false)

  const handleChange = (event) => {
    const {
      target: { value }
    } = event
    setPersonName(value)
    onSelect(value)
  }
  return (
    <div>
      <FormControl className='mb-[0.94vw] bg-[#F0F0F0] rounded-[0.24913vw] flex justify-between items-center w-full outline-none'>
        <Select
          sx={{
            boxShadow: 'none',
            '.MuiOutlinedInput-notchedOutline': { border: 0 },
            '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
              border: 0
            },
            '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
              border: 0
            },
            width: '100%'
          }}
          displayEmpty
          value={personName}
          onChange={handleChange}
          // renderValue={(selected) => {
          //   return (
          //     <Placeholder
          //       icon={icon}
          //       item={selected}
          //     />
          //   )
          // }}
        >
          <MenuItem value=''>
            <div className='flex gap-[1vw] items-center'>
              <Image
                src={icon}
                alt='Money Image'
              />
              <span className='px-2 py-[0.25vw] text-[0.875vw] font-normal'>Destination</span>
            </div>
          </MenuItem>

          {list?.map((item) => (
            <MenuItem
              key={item?.name}
              value={item?.slug}
            >
              <div className='flex gap-[1vw] items-center'>
                <Image
                  src={icon}
                  alt='Money Image'
                />
                <span className='px-2 py-[0.25vw] text-[0.875vw] font-normal'>{item?.name}</span>
              </div>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}
