import React from 'react'
import Box from '@mui/material/Box';
import DeathButton from '../../deathButton/DeathButton';

const DeathStatsBox = props => {

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '11rem', }}>
            <Box sx={{ width: '25rem', height: '5rem', textAlign: 'center', fontSize: '40px' }}>
                {props.numberOfDeathsText}
            </Box>
            <DeathButton onClick={props.onClick} text='YOU DIED' />
        </Box>
    )
}

export default DeathStatsBox 