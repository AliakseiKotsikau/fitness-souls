import ExerciseItem from './../exerciseItem/ExerciseItem'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const ExerciseStack = props => {

    return (
        <Box sx={{ width: '100%' }}>
            <Grid  container spacing={2} sx ={{justifyContent: "center"}}>
                {props.exerciseCards.map((exerciseCard, i) =>
                (<Grid item key={i}>
                    <ExerciseItem exerciseInfo={exerciseCard} onExerciseItemClick={props.onExerciseItemClick} key={i}>exercise</ExerciseItem>
                </Grid>)
                )}
            </Grid>
        </Box>
    )
}

export default ExerciseStack