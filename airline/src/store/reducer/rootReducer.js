import authReducer from './authReducer'
import passenger from '../reducer/passenger'
import flightsReducer from '../reducer/flightsReducer'
import {combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    passenger: passenger,
    flights: flightsReducer
})

export default rootReducer