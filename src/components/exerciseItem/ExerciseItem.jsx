import React from 'react'
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles';
import './exerciseItem.css'


const ColorButton = styled(Button)(({ theme }) => ({
  color: '#white',
  backgroundColor: '#a28354',

  '&:hover': {
    backgroundColor: '#cab28d',
  },
  width: '250px',
  height: '50px',
  fontSize: '20px'
}));

const ExerciseItem = props => {

    return (
        <ColorButton className='exerciseItem' variant="contained" onClick={props.onExerciseItemClick}>
          {props.text}
        </ColorButton>
    )
}

export default ExerciseItem 