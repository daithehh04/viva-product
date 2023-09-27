'use client'
import { useEffect, useState } from 'react'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Box from '@mui/material/Box'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { i18n } from '../../../i18n-config'

function SelectLang({ lang }) {
  const pathName = usePathname()
  const [lng, setLng] = useState(lang)
  const redirectedPathName = (locale) => {
    if (!pathName) return `/${currentLang}`
    const segments = pathName.split('/')
    if (segments[1] !== 'it' && segments[1] !== 'en' && segments[1] !== 'fr') {
      segments.splice(1, 0, locale)
      return segments.join('/')
    }
    segments[1] = locale
    return segments.join('/')
  }

  const handleChange = (event) => {
    setLng(event.target.value)
  }
  return (
    <div className='select-lang'>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
        <span className='text-[0.75vw] text-[#2E2E2E] max-lg:hidden'>Choose language</span>
        <FormControl
          sx={{
            m: 1,
            '&.MuiFormControl-root': {
              margin: 0
            }
          }}
        >
          <Select
            value={lng}
            onChange={handleChange}
            displayEmpty
            inputprops={{ 'aria-label': 'Without label' }}
            sx={{
              height: '2.5rem',
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none'
              },
              '& .MuiSvgIcon-root': {
                color: 'black'
              },
              '& .MuiSelect-outlined': {
                padding: 0
              }
            }}
          >
            {i18n?.lo?.map((locale, index) => (
              <MenuItem
                value={locale.locale}
                key={index}
              >
                <Link
                  href={redirectedPathName(locale.locale)}
                  className='flex items-center w-full gap-x-[1vw]'
                >
                  <Image
                    src={locale.img}
                    width={50}
                    height={50}
                    alt='img'
                    className='w-[30px] object-cover rounded-[0.1875vw]'
                  />
                  <span className='uppercase text-[0.875vw] max-lg:text-[3.2vw]'>{locale.locale}</span>
                </Link>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  )
}

export default SelectLang
