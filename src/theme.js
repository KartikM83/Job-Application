// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',

    // 🌞 Primary Brand Color – bright-sun
    primary: {
      main: '#ffbd20',      // 200
      light: '#ffd149',     // 300
      dark: '#ffbd20',      // 400s // ffe588
      contrastText: '#fff',
    },

    // 🖤 Secondary / Neutral – mine-shaft
    secondary: {
      main: '#e7e7e7',      // 100
      light: '#d1d1d1',     // 200
      dark: '#b0b0b0',      // 300
      contrastText: '#fff',
    },

    third:{
      main:'#ffbd20',
    },

    // Backgrounds using mine-shaft
    background: {
      default: '#2d2d2d',   // mine-shaft 950
      paper: '#3d3d3d', //900
    },

    text: {
      primary: '#e7e7e7',   // mine-shaft 150
      secondary: '#b0b0b0', // mine-shaft 300
    },
  },

  typography: {
    fontFamily: 'poppins, sans-serif',
    fontSize: 14,
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 10,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px 16px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

export default theme;
