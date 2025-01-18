import React from 'react'
import Box from '@mui/material/Box';

 const ExerciseTableAndCards = props => {

    return (
        <Box sx={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between',  width: '100%', maxWidth: '700px', margin: '0 auto',
        }}>
            <ExerciseSelectionTable exercises={props.exercises} sx={{ marginBottom: '20px' }}/>
            <Box sx={{
                width: '100%', // Ensure ExerciseStack takes full width of its parent
                marginTop: '150px',
            }}>
                <ExerciseSelectionTable  exercises={[...exercisesToDo].reverse()} onExerciseItemClick={onExerciseItemClick} />
            </Box>
        </Box>
    )
}

export default ExerciseTableAndCards 