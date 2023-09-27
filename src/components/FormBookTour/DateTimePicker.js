// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
// import { TextField } from '@mui/material'
// import { DatePicker } from '@mui/x-date-pickers/DatePicker'
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { Field, useField } from 'formik'

import { LocalizationProvider, DatePicker, TextField } from '@mui/lab'
import { AdapterDateFns, format } from '@mui/lab/AdapterDateFns'
const DateTimePicker = ({ name, formik }) => {
  const [field, meta] = useField(name)
  const configDatePicker = {
    ...field
  }

  if (meta && meta.touched && meta.error) (configDatePicker.error = true), (configDatePicker.helperText = meta.error)

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        variant='outlined'
        fullWidth={true}
        {...field}
        name='date'
        sx={{
          '& .MuiOutlinedInput-root': {
            '& > fieldset': {
              border: 'none'
            }
          }
        }}
        value={formik?.values?.date ? new Date(formik.values.date) : null}
        onChange={(date) => formik.setFieldValue('date', date ? date.getTime() : null)}
        renderInput={(params) => (
          <Field
            {...params}
            as={TextField}
          />
        )}
      />
    </LocalizationProvider>
  )
}

export default DateTimePicker
