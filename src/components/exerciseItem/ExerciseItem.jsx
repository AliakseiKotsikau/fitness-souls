import React from 'react'
import './exerciseItem.css'
import ColorButton from '../colorButton/ColorButton'

const ExerciseItem = props => {

  return (
    <ColorButton className='exerciseItem' variant="contained" onClick={() => props.onExerciseItemClick(props.text)}>
      {props.text}
    </ColorButton>
  )
}

export default ExerciseItem 