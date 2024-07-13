import React from 'react'
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles';
import './exerciseItem.css'


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

const ExerciseItem = props => {

  return (
    <ColorButton className='exerciseItem' variant="contained" onClick={props.onExerciseItemClick}>
      {props.text}
    </ColorButton>
  )
}

export default ExerciseItem 