import React from 'react'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const ExerciseLimitAlert = props => {
    return (
        <Alert
            severity="error"
            onClose={props.onCloseAlert}
            variant='filled'
            sx={{ position: "absolute", top: 0, left: '35%', zIndex: 999, width: '30%'}}>
            <AlertTitle>Do exercises!</AlertTitle>
            No new exercises can be added until current is done.
        </Alert>
    )
}

export default ExerciseLimitAlert 