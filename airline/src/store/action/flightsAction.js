import * as actionType from './actionType'

export const setScheduleDate = (payload) => {
    return {
        type: actionType.SET_SCHEDULE_DATE,
        payload: payload
    }
}

export const getFlightDetails = (payload) => ({
    type: actionType.GET_FLIGHTDETAILS,
    payload: payload
});

export const createPassengerflight = (payload) => ({
    type: actionType.CREATE_PASSENGER_FLIGHT,
    payload: payload
});