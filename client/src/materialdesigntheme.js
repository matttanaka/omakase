import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#B9E4C9',
      main: '#37966F',
      dark: '#356859',
    },
    secondary: {
      main: '#FD5523',
    },
    background: {
      main: '#FFFBE6',
    },
  },
  typography: {
    fontFamily: 'Montserrat',
    h6: {
      fontFamily: 'Lekton',
      fontWeight: 700,
    },
    subtitle1: {
      fontFamily: 'Lekton',
      fontWeight: 700,
    },
    subtitle2: {
      fontFamily: 'Lekton',
      fontWeight: 700,
    },
  },
});

export default theme;
