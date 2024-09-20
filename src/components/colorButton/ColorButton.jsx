import { Button } from '@mui/material'
import { styled } from '@mui/material/styles';


const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.secondary.main,

  '&:hover': {
    backgroundColor: theme.palette.secondary.light,
  },
  width: '20rem',
  height: '4rem',
  fontSize: '26px'
}));

const SmallColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.secondary.main,

  '&:hover': {
    backgroundColor: theme.palette.secondary.light,
  },
  width: '7rem',
  height: '3rem',
  fontSize: '20px'
}));

export {
  ColorButton,
  SmallColorButton
}

export default ColorButton 