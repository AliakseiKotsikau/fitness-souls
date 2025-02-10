import React, { useEffect, useState } from 'react'
import Stack from '@mui/material/Stack';
import ExerciseItem from './../exerciseItem/ExerciseItem'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const ExerciseStack = props => {
    // const [exercises, setExercises] = useState([])

    // useEffect(() => {
    //     if (props.exercises) {
    //         setExercises(props.exercises)
    //     }
    // })

    return (
        <Box sx={{ width: '100%' }}>
            <Grid  container spacing={2}>
                {props.exerciseCards.map((exerciseCard, i) =>
                (<Grid item key={i}>
                    <ExerciseItem exerciseInfo={exerciseCard} onExerciseItemClick={props.onExerciseItemClick} key={i}>exercise</ExerciseItem>
                </Grid>)
                )}
            </Grid>
        </Box>
        // <Stack
        //     direction="column-reverse"
        //     justifyContent="flex-start"
        //     alignItems="center"
        //     spacing={-3}
        // >
        //     {exercises.map((exercise, i) => {
        //         return <ExerciseItem text={exercise} onExerciseItemClick={props.onExerciseItemClick} key={i} />
        //     })
        //     }
        // </Stack>
    )
}

export default ExerciseStack