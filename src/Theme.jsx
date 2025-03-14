
import { createTheme } from '@mui/material/styles';

const DEFAULT_THEME = createTheme({
  palette: {
    text: {
      primary: '#FFFFFFF', 
      secondary: '#A28354',
    },
    primary: {
        main: '#FFFFFF'
    },
    secondary: {
        main: '#A28354',
        light: '#cab28d'
    },
    info: {
      main: '#E0E0E0'
    }
  },
  typography: {
    fontSize: 16,
  },
});

export default DEFAULT_THEME;