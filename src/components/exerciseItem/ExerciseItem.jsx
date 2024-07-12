import React from 'react'
import { Button } from '@mui/material'
import './exerciseItem.css'

const ExerciseItem = props => {

    return (
        <Button className='exerciseItem' variant="contained" color="inherit" onClick={props.onExerciseItemClick}>
          {props.text}
        </Button>
    )
}

export default ExerciseItem 