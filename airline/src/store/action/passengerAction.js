import * as actionType from './actionType'

export const createPassenger = () => {
    return {
        type: actionType.CREATE_PASSENGERS
    }
}

export const SavePassenger = () => {
    return {
        type: actionType.SAVE_PASSENGERS
    }
}

export const getPassengerDetail = (data) => {
    return {
        type: actionType.GET_ALL_PASSENGERS,
        payload: data
    }
}

export const getUpdateDetails = () => {
    return {
        type: actionType.UPDATE_PASSENGERS
    }
}

export const getseat = (payload) => ({
    type: actionType.CALL_SEATALLOCATION,
    payload: payload
});

export const updateSeatAllocation = (seat) => ({
    type: actionType.CALL_SEATRESERVE,
    payload: seat
});

export const getUpdatedSeat = (seats) => ({
    type: actionType.UPDATE_SEATALLOCATION,
    data: seats
}); 

export const getFlightSchedule = (payload) => ({
    type: actionType.GET_FLIGHTSCHEDULE,
    payload: payload
});