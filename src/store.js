import { configureStore } from '@reduxjs/toolkit'
import fitnessSoulsReducer from './slices/fitnessSoulsSlice'

export default configureStore({
    reducer: {
        fitnessSouls: fitnessSoulsReducer
    }
})