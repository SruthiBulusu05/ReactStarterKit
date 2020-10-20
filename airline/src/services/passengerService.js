import * as passengerAction from '../store/action/passengerAction'

export const getSeats = (flightId) => (dispatch) => {
    let allFlights = localStorage.getItem('flights'); //consider this as a sync API call
    var filteredFlights = JSON.parse(allFlights).filter(function (el) { return (el.number == flightId); });
    let rows = filteredFlights[0].seats;
    debugger;
    let updatedSeatRows = localStorage.getItem('flights');
    let payload = {
        rowsPayload: rows,
        updatedRowsPayload: JSON.parse(updatedSeatRows)[0].seats
    }
    dispatch(passengerAction.getseat(payload))
}

export const savePassengerDetails = (passenger, updatedRows) => (dispatch) => {
    // Update seats 
    var strUpdate = JSON.stringify(updatedRows);
    localStorage.setItem('seatrows', strUpdate);

    // Update passenger info
    var strPassenger = localStorage.getItem('passengerList');
    let list = [];
    if (strPassenger !== null && strPassenger !== undefined && strPassenger !== '') {
        list = JSON.parse(strPassenger);
        list.push(passenger);
    } else {
        list = [passenger];
    }
    
    var passengersList = JSON.stringify(list);
    localStorage.setItem('passengerList', passengersList);

    // Dispatch to reducer
    dispatch(passengerAction.SavePassenger())
}

export const getPassengerDetails = () => (dispatch) => {
    
    var passDataString = localStorage.getItem('passengerList');
    var passData = JSON.parse(passDataString);

    dispatch(passengerAction.getPassengerDetail(passData))
}

export const deletePassenger = (email) => (dispatch) => {
    var passDataString = localStorage.getItem('passengerList');
    var passData = JSON.parse(passDataString);
    var newData = passData?.filter(function (el) { return (el.email !== email); });
    localStorage.setItem('passengerList', JSON.stringify(newData));

    dispatch(passengerAction.getPassengerDetail(newData))
}

export const getSchedule = (date) => (dispatch) => {
    var strSchedule = localStorage.getItem('schedule');
    var schedule = [];
    if (strSchedule !== null && strSchedule !== undefined && strSchedule !== '') {
        schedule = JSON.parse(strSchedule);
    }else{
        schedule = [
            {
                date: '07/25/2020',
                flightNumber: 'A101'
            },
            {
                date: '08/02/2020',
                flightNumber: 'B201'
            }
        ];

        var strScheduleUpdate = JSON.stringify(schedule);
        localStorage.setItem('schedule', strScheduleUpdate);
    }
    debugger;
    let newSchedule = schedule.filter(function (el) { return (el.date === date); });
    dispatch(passengerAction.getFlightSchedule(newSchedule));
}
