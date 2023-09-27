import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFD220'
    }
  },
  typography: {
    fontFamily: 'Helvetica Neue'
  },
  components: {
    // MuiButton: {
    //   styleOverrides: {
    //     root: {
    //       textTransform: 'none',
    //       borderRadius: '12px',
    //       padding: '17px 32px',
    //       background: 'linear-gradient(180deg, #FFF8DC 13.18%, #FFD220 54.87%)'
    //     }
    //   }
    // }
  }
})

export default theme
