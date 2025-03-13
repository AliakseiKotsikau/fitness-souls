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
        exerciseSelected: state => {
            state.deathButtonClicked = false
        },
        limitOfExercisesReached: state => {
            state.limitOfExercisesReached = true
        },
        changeCurrentBoss: (state, action) => {
            state.currentBoss = action.payload
        },
        bossBeaten: (state, action) => {
            state.bosses[action.payload].beaten = true;
        },
        addRepsToExercise: (state, action) => {
            if (state.exerciseStats[action.payload.exercise] === undefined) {
                state.exerciseStats[action.payload.exercise] = { quantity: +action.payload.quantity }
            } else {
                state.exerciseStats[action.payload.exercise].quantity = +state.exerciseStats[action.payload.exercise].quantity + +action.payload.quantity;
            }
        },
        gameChanged: (state, action) => {
            state.game = action.payload;
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
export const { worldDeathButtonClick, bossDeathButtonClick, exerciseSelected, limitOfExercisesReached, changeCurrentBoss, addRepsToExercise, setInitialData, bossBeaten, gameChanged } = fitnessSoulsSlice.actions

export const Games = { DarkSouls1: "DarkSouls1", DarkSouls2: "DarkSouls2", DarkSouls3: "DarkSouls3", Sekiro: "Sekiro", EldenRing: "EldenRing" }

export default fitnessSoulsSlice.reducer