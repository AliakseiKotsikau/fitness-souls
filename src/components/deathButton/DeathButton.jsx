import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import './deathButton.css'

// NOT WORKING
const DeathButton = props => {
    const [bosses, setBosses] = useState([])

    useEffect(() => {
        if (props.bosses) {
            setBosses(props.bosses)   
        } 
    })

    const onBossSelect = () => {
        return(
            <div>
                will be done later...
            </div>
        )
    }

    const onButtonClick = () => {
        if (bosses) {
            return (
                <div>
                    CHOOSE YOUR FIGHTER
                    <select onChange={onBossSelect}>
                        {bosses.map(boss => {
                            <option key={boss.enemy} value={boss.enemy}>{boss.enemy}</option>
                        })}
                    </select>
                </div>
            )
        }
    }

    return (
        <Button variant="contained" color="inherit" onClick={onButtonClick}>
          I AS KILLED ONE MORE TIME :/
        </Button>
    )
}

export default DeathButton 