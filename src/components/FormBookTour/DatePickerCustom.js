import { TextField } from '@mui/material'
import { useField } from 'formik'

const DatePickerCustom = ({ name }) => {
  const [field, meta] = useField(name)

  const configDatePicker = {
    ...field,
    type: 'date',
    variant: 'outlined',
    fullWidth: true,
    InputLabelProps: {
      shrink: true
    }
  }

  const color = '#fff'
  return (
    <TextField
      sx={{
        svg: { color },
        input: { color },
        label: { color }
      }}
      {...configDatePicker}
    />
  )
}

export default DatePickerCustom
