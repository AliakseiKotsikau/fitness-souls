import React from 'react'
import Box from '@mui/material/Box';
import BossSelect from '../bossSelect/BossSelect';
import { SmallColorButton } from '../colorButton/ColorButton'

const SingleBossInfo = props => {

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '11rem', }}>
            <BossSelect bosses={props.bosses} />
            <Box sx={{ width: '20rem', textAlign: 'center', marginTop: '1.5rem', fontSize: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'space-between' }}>
                Deaths: {props.deathCount}
                <SmallColorButton variant="contained" onClick={props.onHandleBossKill}>
                    Victory
                </SmallColorButton>
            </Box>
        </Box>
    )
}

export default SingleBossInfo 