import { React, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import { useDispatch, useSelector } from 'react-redux';
import { changeCurrentBoss } from '../../slices/fitnessSoulsSlice';
import { updateCurrentBoss } from '../../FetchUtils';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        },
    },
};

const StyledSelect = styled(Select)(({ theme }) => ({
    color: theme.palette.primary.main,
    '.MuiSvgIcon-root ': {
        fill: theme.palette.primary.main,
    },
    '.MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.secondary.main,
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.secondary.main,
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.secondary.main,
    },
}
));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
}
));

const BossSelect = props => {
    const user = useSelector(state => state.fitnessSouls.user);
    const game = useSelector(state => state.fitnessSouls.game);
    const boss = useSelector(state => state.fitnessSouls.currentBoss);
    
    const dispatch = useDispatch();

    function onChangeSelect(event) {
        updateCurrentBoss(user, game, event.target.value);
        dispatch(changeCurrentBoss(event.target.value));
    }

    return (
        <FormControl variant='outlined' sx={{ width: 300 }}>
            <InputLabel sx={{ color: 'primary.main' }} id="boss-select-label">Boss</InputLabel>
            <StyledSelect
                labelId="boss-select-label"
                id="boss-select"
                value={boss}
                onChange={onChangeSelect}
                input={<OutlinedInput label="Boss" />}
                MenuProps={MenuProps}
            >
                {props.bosses.map((boss) => (
                    <StyledMenuItem
                        key={boss}
                        value={boss}
                    >
                        {boss}
                    </StyledMenuItem>
                ))}
            </StyledSelect>
        </FormControl>
    )
}

export default BossSelect 