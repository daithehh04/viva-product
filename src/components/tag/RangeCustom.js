'use client'
import * as React from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import theme from '../ThemeRegistry/theme'
import { useMediaQuery } from '@mui/material'
import { useEffect } from 'react'

function getValue(value) {
  return value
}

const minDistance = 1
export default function RangeCustom({ onDay,day, isOpenModal }) {
  const [value, setValue] = React.useState([1,50])
  React.useEffect(() => {
    if(day) {
      var rangeArray = day?.split('-').map(Number);
      setValue(rangeArray)
    }
  },[day])
  
  useEffect(() => {
    if(isOpenModal) {
      setValue([0, 50])
    }
  }, [isOpenModal]);
  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return
    }
    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]])
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)])
    }
    onDay(newValue)
  }
  const onlySmallScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box>
      <Slider
        sx={{
          '& .MuiSlider-thumb': {
            color: 'white',
            border: '2px solid #138140'
          },
          '& .MuiSlider-track': {
            color: '#138140'
          },
          '& .MuiSlider-rail': {
            color: '#138140'
          },
          '& .MuiSlider-active': {
            color: 'green'
          },
          height: onlySmallScreen ? '1.86vw' : '0.4375vw'
        }}
        getAriaLabel={() => 'Days range'}
        min={0}
        max={50}
        value={value}
        onChange={handleChange}
        valueLabelDisplay='auto'
        getAriaValueText={getValue}
        disableSwap
      />
    </Box>
  )
}
