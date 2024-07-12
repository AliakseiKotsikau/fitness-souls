import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import './deathButton.css'

// NOT WORKING
const DeathButton = props => {

    return (
        <div>
            <Select
                className="basic-single"
                classNamePrefix="select"
                name="Fighter"
                options={props.bosses.map(boss => ({ label: boss.enemy, value: boss.enemy }))}
            />
        </div>
    )
}

export default DeathButton 