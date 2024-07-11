import React from 'react'
import Stack from '@mui/material/Stack';
import ExerciseItem from './ExerciseItem'

export default function ExerciseStack({ exercises, onExerciseItemClick }) {
    function CreateItems({ exercises }) {
        return { exercises }.map((exercise) => <ExerciseItem text={exercise} />);
    }

    return (
        <Stack
            direction="column-reverse"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={-3}
        >
            {exercises.map((exercise, i) => {
                return <ExerciseItem onExerciseItemClick={onExerciseItemClick} text={exercise} key={i} />
            })
            }
        </Stack>
    )
}