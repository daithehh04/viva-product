import { TextField } from '@mui/material'
import { useField } from 'formik'

const TextFiledWrapper = ({ name, placeholder }) => {
  const [field, meta] = useField(name)

  const configTextfield = {
    ...field,
    placeholder: placeholder,
    fullWidth: true
    // variant: 'outlined'
  }

  if (meta && meta.touched && meta.error) {
    configTextfield.error = true
    configTextfield.helperText = meta.error
  }

  return (
    <TextField
      sx={{
        '& .MuiOutlinedInput-root': {
          '& > fieldset': {
            border: 'none'
          }
        }
      }}
      {...configTextfield}
    />
  )
}
export default TextFiledWrapper
