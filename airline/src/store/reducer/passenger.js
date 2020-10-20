import * as actionType from '../action/actionType'

const intialstate = {
    passengerList: [
        {
            passengerName: '', firstName: '', lastName: '', address: '', age: '', gender: '', passportNo: '',
            specialPrivilage: '', foodFee: '', baggageFee: '', servicesFee: '', seatNo: '', SeatDetails: ''
        }
    ],
    schedule: [{}],
    flights: [],
    redirect: false,
    passengerView: true,
    seatView: false,
    flightSeats: [[]],
    updatedFlightSeats: [[]]
}

export default (state = intialstate, action) => {
    switch (action.type) {
        case actionType.CREATE_PASSENGERS:
            return Object.assign({}, state, { passengerView: false, seatView: true })
        case actionType.SAVE_PASSENGERS:
            return Object.assign({}, state, { redirect: true })
        case actionType.GET_ALL_PASSENGERS:
            var data = action.payload;
            return Object.assign({}, state, { passengerList: data == null || data == undefined ? state.passengerList : data })
        case actionType.UPDATE_PASSENGERS:
            return {
                ...state,
                testPassenger: [
                    { passengerName: "abc", age: "23" }, { passengerName: "fgh", age: "45" }
                ]
            }
        case actionType.CALL_SEATALLOCATION:
            debugger;
            var rows = action.payload.rowsPayload;
            var updatedRows = action.payload.updatedRowsPayload;
            return Object.assign({}, state, { flightSeats: rows, updatedFlightSeats: updatedRows, passengerView: true, seatView: false, redirect: false })
        case actionType.GET_FLIGHTSCHEDULE:
            var payload = action.payload;
            return Object.assign({}, state, { schedule: payload })
        // case actionType.GET_FLIGHTDETAILS:
        //     var payload = action.payload;
        //     var rows = action.payload.rowsPayload;
        //     var updatedRows = action.payload.updatedRowsPayload;
        //     return Object.assign({}, state, { rows: rows, updatedRows: updatedRows, passengerView: true, seatView: false, redirect: false })
        case actionType.CALL_SEATRESERVE:
            var seat = action.payload;
            var newrows = state.updatedFlightSeats;
            newrows.forEach(function (itemRow, index1) {
                itemRow.forEach(function (col, index2) {
                    if (col != null && col.id == seat.id && col.number == seat.number) {
                        newrows[index1][index2] = Object.assign({}, newrows[index1][index2], { isReserved: true, passenger: seat.passenger, tooltip: seat.newTooltip });
                        return false;
                    }
                });
            });
            return Object.assign({}, state, { updatedFlightSeats: newrows })
        default:
            return state;
    }
}