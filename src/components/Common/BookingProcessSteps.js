'use client'
import Image from 'next/image'
import { styled } from '@mui/material/styles'
import Stack from '@mui/material/Stack'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector'
import stepIcon from '@/assets/images/about/step.png'
import stepIcon1 from '@/assets/images/about/stepIcon1.svg'
import stepIcon2 from '@/assets/images/about/stepIcon2.svg'
import stepIcon3 from '@/assets/images/about/stepIcon3.svg'
import stepIcon4 from '@/assets/images/about/stepIcon4.svg'
import stepIcon5 from '@/assets/images/about/stepIcon5.svg'
import AOS from 'aos'
import { useEffect, useState } from 'react'

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`& .${stepConnectorClasses.line}`]: {
    height: '1px'
  }
}))

const ColorlibStepIconRoot = styled('div')(() => ({
  zIndex: 1,
  width: 24,
  height: 24
}))

function ColorlibStepIcon(props) {
  const { className } = props

  const icons = {
    1: (
      <Image
        src={stepIcon}
        alt='stepIcon'
      />
    ),
    2: (
      <Image
        src={stepIcon}
        alt='stepIcon'
      />
    ),
    3: (
      <Image
        src={stepIcon}
        alt='stepIcon'
      />
    ),
    4: (
      <Image
        src={stepIcon}
        alt='stepIcon'
      />
    ),
    5: (
      <Image
        src={stepIcon}
        alt='stepIcon'
      />
    )
  }

  return <ColorlibStepIconRoot className={className}>{icons[String(props.icon)]}</ColorlibStepIconRoot>
}

const stepsAbove = [
  {
    icon: stepIcon1
  },
  {
    icon: stepIcon2
  },
  {
    icon: stepIcon3
  },
  {
    icon: stepIcon4
  },
  {
    icon: stepIcon5
  }
]
const stepsBelow = ['01', '02', '03', '04', '05']

export default function BookingProcessSteps({ data = {} }) {
  const [activeIndex, setActiveIndex] = useState(-1)
  const handleHover = (index) => {
    setActiveIndex(index)
  }
  useEffect(() => {
    AOS.init({
      disable: function () {
        var maxWidth = 768
        return window.innerWidth < maxWidth
      }
    })
    AOS.refresh()
  }, [])
  return (
    <section className='relative z-10 about-step-container'>
      <h3 className='content md:text-[4vw] text-[4.8vw] font-semibold capitalize font-optima md:leading-[110%] leading-[120%] md:text-center w-fit md:mb-[3.375vw]'>
        {data?.heading}
      </h3>
      <div className='overflow-x-auto overflow-y-hidden hidden-scroll md:overflow-hidden'>
        <div className='w-[185vw] md:w-full h-full'>
          <Stack
            sx={{ width: '100%' }}
            spacing={4}
          >
            <Stepper
              alternativeLabel
              activeStep={5}
            >
              {stepsAbove?.map((label, index) => (
                <Step
                  onMouseOut={() => handleHover(-1)}
                  onMouseOver={() => handleHover(index)}
                  key={index}
                >
                  <StepLabel
                    StepIconProps={{ className: 'about-step-icon' }}
                    className='cursor-pointer about-step-above'
                  >
                    <Image
                      src={label.icon}
                      alt='stepIcon'
                    />
                    <div className='md:text-[1.2vw] lg:text-[1.125vw] text-[2.67vw]'>
                      {data?.step ? data?.step[index]?.title : ''}
                    </div>
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
            <Stepper
              alternativeLabel
              activeStep={5}
              connector={<ColorlibConnector />}
            >
              {stepsBelow?.map((label, index) => (
                <Step
                  onMouseOut={() => handleHover(-1)}
                  onMouseOver={() => handleHover(index)}
                  key={index}
                  sx={{ WebkitTextFillColor: index === activeIndex ? 'unset' : '' }}
                  id={index === activeIndex ? 'active-step' : ''}
                >
                  <StepLabel
                    StepIconComponent={ColorlibStepIcon}
                    className='about-step-below'
                  >
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Stack>
        </div>
      </div>
    </section>
  )
}
