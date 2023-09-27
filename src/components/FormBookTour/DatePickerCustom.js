import { TextField } from '@mui/material'
import { useField } from 'formik'

const DatePickerCustom = ({ name }) => {
  const [field, meta] = useField(name)

  const configDatePicker = {
    ...field,
    type: 'date',
    variant: 'outlined',
    fullWidth: true
  }

  //   if (meta && meta.touched && meta.error) {
  //     configDatePicker.error = true
  //     configDatePicker.helperText = meta.error
  //   }
  return <TextField {...configDatePicker} />
}

export default DatePickerCustom
