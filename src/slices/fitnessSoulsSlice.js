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
        bosses: [],
        exercises: [],
        exerciseStats: [],
        worldDeathCount: 0,
    },
    reducers: {
        worldDeathButtonClick: state => {
            state.deathButtonClicked = true
        },
        bossDeathButtonClick: (state, action) => {
            state.deathButtonClicked = true;
            state.bosses[action.payload].deathCount = +state.bosses[action.payload].deathCount + 1;
        },
        wheelSpinned: state => {
            state.deathButtonClicked = false
        },
        limitOfExercisesReached: state => {
            state.limitOfExercisesReached = true
        },
        changeCurrentBoss: (state, action) => {
            state.currentBoss = action.payload
        },
        setBosses: (state, action) => {
            state.bosses = action.payload
        },
        setInitialData: (state, action) => {
            state.bosses = action.payload.bosses;
            state.exercises = action.payload.exercises;
            state.exerciseStats = action.payload.exerciseStats;
            state.worldDeathCount = action.payload.worldDeathCount;
            state.currentBoss = action.payload.currentBoss;
        },
    }
})

// Action creators are generated for each case reducer function
export const {worldDeathButtonClick, bossDeathButtonClick, wheelSpinned, limitOfExercisesReached, changeCurrentBoss, setBosses, setInitialData} = fitnessSoulsSlice.actions

export default fitnessSoulsSlice.reducer