import ColorButton from '../colorButton/ColorButton'
import './deathButton.css'

const DeathButton = props => {

    return (
        <ColorButton variant="contained" onClick={props.onClick}>
            {props.text}
        </ColorButton>
    )
}

export default DeathButton 