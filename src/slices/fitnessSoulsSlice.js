import { createSlice } from '@reduxjs/toolkit'

export const fitnessSoulsSlice = createSlice({
    name: 'deathButtonClicked',
    initialState: {
        user: 'kotsial',
        game: 'DarkSouls1',
        deathButtonClicked: false,
        wheelSpins: false,
        limitOfExercisesReached: false,
        currentBoss: null,
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
        },
        changeCurrentBoss: (state, action) => {
            state.currentBoss = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const {deathButtonClick, wheelSpinned, limitOfExercisesReached, changeCurrentBoss} = fitnessSoulsSlice.actions

export default fitnessSoulsSlice.reducer