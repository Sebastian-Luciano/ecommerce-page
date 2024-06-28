import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: 'hsl(26, 100%, 55%)', // Orange
      light: 'hsl(25, 100%, 94%)', // Pale orange
    },
    secondary: {
      main: 'hsl(220, 13%, 13%)', // Very dark blue
    },
    text: {
      primary: 'hsl(220, 13%, 13%)', // Very dark blue
      secondary: 'hsl(219, 9%, 45%)', // Dark grayish blue
    },
    background: {
      default: 'hsl(0, 0%, 100%)', // White
      paper: 'hsl(223, 64%, 98%)', // Light grayish blue
    },
  },
  typography: {
    fontFamily: 'Kumbh Sans, sans-serif',
    fontSize: 16,
    fontWeightRegular: 400,
    fontWeightBold: 700,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 375, // Mobile
      md: 600,
      lg: 1440, // Desktop
      xl: 1920,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        html, body, #root {
          height: 100%;
          overflow: hidden;
        }
      `,
    },
  },
});

export default theme;