// Theme.jsx
import { createTheme } from '@mui/material/styles';

const SeravekBasic = {
  fontFamily: 'SeravekBasic',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('SeravekBasic'),
    url('assets/fonts/SeravekBasic.ttf') format('truetype')
  `,
};

const rockwell = {
  fontFamily: 'rockwell',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('rockwell'),
    url('assets/fonts/rockwell.ttf') format('truetype')
  `,
};

const theme = createTheme({
  typography: {
    fontFamily: 'SeravekBasic, rockwell, sans-serif',
  },
  palette: {
    common: {
      black: '#030405',
      white: '#FFFFFF',
    },
    primary: {
      main: '#FFFFFF', // White for fonts
      contrastText: '#030405', // Black for contrast
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@global': {
          '@font-face': [SeravekBasic, rockwell],
        },
      },
    },
  },
});

export default theme;

