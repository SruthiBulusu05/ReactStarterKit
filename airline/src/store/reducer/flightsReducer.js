import * as actionType from '../action/actionType'

const intialstate = {
    schedule: [{}],
    flights: [],
    date: '',
    flightId: ''
}

export default (state = intialstate, action) => {
    switch (action.type) {
        case actionType.SET_SCHEDULE_DATE:
            let payload = action.payload;
            return Object.assign({}, state, { date: payload })
        case actionType.GET_FLIGHTDETAILS:
            let flightsPayload = action.payload;
            return Object.assign({}, state, { flights: flightsPayload.flights })
        case actionType.CREATE_PASSENGER_FLIGHT:
            let flightId = action.payload;
            return Object.assign({}, state, { flightId: flightId })
        default:
            return state
    }
}