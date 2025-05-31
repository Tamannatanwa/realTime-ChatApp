import { createTheme } from '@mui/material/styles';

// Example custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // blue
    },
    secondary: {
      main: '#9c27b0', // purple
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: '2rem',
    },
  },
});

export default theme;
