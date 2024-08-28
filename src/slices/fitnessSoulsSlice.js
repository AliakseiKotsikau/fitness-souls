import { createSlice } from '@reduxjs/toolkit'

export const fitnessSoulsSlice = createSlice({
    name: 'deathButtonClicked',
    initialState: {
        deathButtonClicked: false,
        wheelSpins: false,
        limitOfExercisesReached: false,
    },
    reducers: {
        deathButtonClick: state => {
            state.deathButtonClicked = true
        },
        wheelSpinned: state => {
            state.deathButtonClicked = false
        },
        limitOfExercisesReached: state => {
            state.limitOfExercisesReached = true
        }
    }
})

// Action creators are generated for each case reducer function
export const {deathButtonClick, wheelSpinned} = fitnessSoulsSlice.actions

export default fitnessSoulsSlice.reducer