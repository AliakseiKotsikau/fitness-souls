import React from 'react'
import Box from '@mui/material/Box';
import BossSelect from '../bossSelect/BossSelect';

const SingleBossInfo = props => {

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '11rem', }}>
            <BossSelect bosses={props.bosses} />
            <Box sx={{ width: '20rem', height: '3rem', textAlign: 'center', marginTop: '1.5rem', fontSize: '40px' }}>
                Deaths: {props.deathCount}
            </Box>
        </Box>
    )
}

export default SingleBossInfo 