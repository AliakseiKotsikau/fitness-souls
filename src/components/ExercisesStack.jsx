import React, { useState } from 'react'
import Stack from '@mui/material/Stack';
import ExerciseItem from './ExerciseItem'

export default function ExerciseStack({exercises}) {
    function CreateItems({exercises}) {
        return {exercises}.map( (exercise) => <ExerciseItem text={exercise}/>);
    }

    return (
        <Stack
            direction="column-reverse"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={-3}
        >
        {exercises.map( (exercise, i) => {return <ExerciseItem text={exercise} key={i}/>})}
        </Stack>
    )
}