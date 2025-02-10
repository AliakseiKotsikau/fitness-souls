import React from 'react'
import './exerciseItem.css'
import ColorButton from '../colorButton/ColorButton'
import { styled } from '@mui/material/styles';


const SingleExerciseToDo = styled(ColorButton)(({ theme }) => ({
  width: '10rem',
  height: '4rem',
  fontSize: '18px'
}));

const ExerciseItem = props => {

  return (
    <SingleExerciseToDo className='exerciseItem' variant="contained" onClick={() => props.onExerciseItemClick(props.exerciseInfo.exercise)}>
      {props.exerciseInfo.exercise + " " + props.exerciseInfo.reps}
    </SingleExerciseToDo>
  )
}

export default ExerciseItem 