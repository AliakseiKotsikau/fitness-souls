
import { createTheme } from '@mui/material/styles';

const DEFAULT_THEME = createTheme({
  palette: {
    text: {
      primary: '#FFFFFFF', 
      secondary: '#a28354',
    },
    primary: {
        main: '#FFFFFF'
    },
    secondary: {
        main: '#a28354'
    },
  },
});

export default DEFAULT_THEME;