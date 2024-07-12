import React, { useEffect, useState } from 'react'
import Stack from '@mui/material/Stack';
import ExerciseItem from './../exerciseItem/ExerciseItem'

const ExerciseStack = props => {
    const [exercises, setExercises] = useState([])

    useEffect(() => {
        if (props.exercises) {
            setExercises(props.exercises)   
        } 
    })

    return (
        <Stack
            direction="column-reverse"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={-3}
        >
            {exercises.map((exercise, i) => {
                return <ExerciseItem text={exercise} onExerciseItemClick={props.onExerciseItemClick} key={i} />
            })
            }
        </Stack>
        )
}

export default ExerciseStack