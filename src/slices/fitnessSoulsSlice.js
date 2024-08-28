import { createSlice } from '@reduxjs/toolkit'

export const fitnessSoulsSlice = createSlice({
    name: 'deathButtonClicked',
    initialState: {
        deathButtonClicked: false,
        wheelSpins: false
    },
    reducers: {
        deathButtonClick: state => {
            state.deathButtonClicked = true
        },
        wheelSpinned: state => {
            state.deathButtonClicked = false
        }
    }
})

// Action creators are generated for each case reducer function
export const {deathButtonClick, wheelSpinned} = fitnessSoulsSlice.actions

export default fitnessSoulsSlice.reducer