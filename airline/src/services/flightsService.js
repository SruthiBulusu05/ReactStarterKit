import * as flightsAction from '../store/action/flightsAction'

export const getScheduledFlightDetails = (date) => (dispatch) => {
    var strflights = localStorage.getItem('flights');
    var flights = [];
    if (strflights !== null && strflights !== undefined && strflights !== '') {
        flights = JSON.parse(strflights);
    } else {
        flights = [
            {
                scheduledDate: '2020-08-02',
                number: 'A101',
                name: 'Air India',
                seats: [
                    [
                        { id: 1, number: 1 },
                        { id: 2, number: 2 },
                        null,
                        {
                            id: 3,
                            number: "3",
                            isReserved: false,
                            orientation: "east"
                        },
                        { id: 4, number: "4", orientation: "west" }
                    ],
                    [
                        {
                            id: 7,
                            number: 1,
                            isReserved: false
                        },
                        { id: 8, number: 2, isReserved: false },
                        null,
                        { id: 9, number: "3", isReserved: false, orientation: "east" },
                        { id: 10, number: "4", orientation: "west" }
                    ],
                    [
                        { id: 13, number: 1 },
                        { id: 14, number: 2 },
                        null,
                        { id: 15, number: 3, isReserved: false, orientation: "east" },
                        { id: 16, number: "4", orientation: "west" }
                    ],
                    [
                        { id: 19, number: 1, tooltip: "Cost: 25$" },
                        { id: 20, number: 2 },
                        null,
                        { id: 21, number: 3, orientation: "east" },
                        { id: 22, number: "4", orientation: "west" }
                    ],
                    [
                        { id: 25, number: 1, isReserved: false },
                        { id: 26, number: 2, orientation: "east" },
                        null,
                        { id: 27, number: "3", isReserved: false },
                        { id: 28, number: "4", orientation: "west" }
                    ],
                    [
                        { id: 29, number: 1 },
                        { id: 30, number: 2 },
                        null,
                        {
                            id: 31,
                            number: "3",
                            isReserved: false,
                            orientation: "east"
        
                        },
                        { id: 32, number: "4", orientation: "west" }
                    ],
                    [
                        {
                            id: 33,
                            number: 1,
                            isReserved: false
        
                        },
                        { id: 34, number: 2, isReserved: false },
                        null,
                        { id: 35, number: "3", isReserved: true, orientation: "east" },
                        { id: 36, number: "4", orientation: "west" }
                    ],
                    [
                        { id: 37, number: 1 },
                        { id: 38, number: 2 },
                        null,
                        { id: 39, number: 3, isReserved: false, orientation: "east" },
                        { id: 40, number: "4", orientation: "west" }
                    ],
                    [
                        { id: 41, number: 1, tooltip: "Cost: 25$" },
                        { id: 42, number: 2 },
                        null,
                        { id: 43, number: 3, orientation: "east" },
                        { id: 44, number: "4", orientation: "west" }
                    ],
                    [
                        { id: 45, number: 1, isReserved: false },
                        { id: 46, number: 2, orientation: "east" },
                        null,
                        { id: 47, number: "3", isReserved: false },
                        { id: 48, number: "4", orientation: "west" }
                    ]
                ]
            },
            {
                scheduledDate: '2020-08-02',
                number: 'B201',
                name: 'Indigo',
                seats: [
                    [
                        { id: 1, number: 1 },
                        { id: 2, number: 2 },
                        null,
                        {
                            id: 3,
                            number: "3",
                            isReserved: false,
                            orientation: "east"
                        },
                        { id: 4, number: "4", orientation: "west" }
                    ],
                    [
                        {
                            id: 7,
                            number: 1,
                            isReserved: false
                        },
                        { id: 8, number: 2, isReserved: false },
                        null,
                        { id: 9, number: "3", isReserved: false, orientation: "east" },
                        { id: 10, number: "4", orientation: "west" }
                    ],
                    [
                        { id: 13, number: 1 },
                        { id: 14, number: 2 },
                        null,
                        { id: 15, number: 3, isReserved: false, orientation: "east" },
                        { id: 16, number: "4", orientation: "west" }
                    ],
                    [
                        { id: 19, number: 1, tooltip: "Cost: 25$" },
                        { id: 20, number: 2 },
                        null,
                        { id: 21, number: 3, orientation: "east" },
                        { id: 22, number: "4", orientation: "west" }
                    ],
                    [
                        { id: 25, number: 1, isReserved: false },
                        { id: 26, number: 2, orientation: "east" },
                        null,
                        { id: 27, number: "3", isReserved: false },
                        { id: 28, number: "4", orientation: "west" }
                    ],
                    [
                        { id: 29, number: 1 },
                        { id: 30, number: 2 },
                        null,
                        {
                            id: 31,
                            number: "3",
                            isReserved: false,
                            orientation: "east"
        
                        },
                        { id: 32, number: "4", orientation: "west" }
                    ],
                    [
                        {
                            id: 33,
                            number: 1,
                            isReserved: false
        
                        },
                        { id: 34, number: 2, isReserved: false },
                        null,
                        { id: 35, number: "3", isReserved: true, orientation: "east" },
                        { id: 36, number: "4", orientation: "west" }
                    ],
                    [
                        { id: 37, number: 1 },
                        { id: 38, number: 2 },
                        null,
                        { id: 39, number: 3, isReserved: false, orientation: "east" },
                        { id: 40, number: "4", orientation: "west" }
                    ],
                    [
                        { id: 41, number: 1, tooltip: "Cost: 25$" },
                        { id: 42, number: 2 },
                        null,
                        { id: 43, number: 3, orientation: "east" },
                        { id: 44, number: "4", orientation: "west" }
                    ],
                    [
                        { id: 45, number: 1, isReserved: false },
                        { id: 46, number: 2, orientation: "east" },
                        null,
                        { id: 47, number: "3", isReserved: false },
                        { id: 48, number: "4", orientation: "west" }
                    ]
                ]
            }
        ];
        let strflightDetails = JSON.stringify(flights);
        localStorage.setItem('flights', strflightDetails);
    }
    var filteredFlights = flights.filter(function (el) { return (el.scheduledDate == date); });
    let payload = {
        flights: filteredFlights
    };
    dispatch(flightsAction.getFlightDetails(payload));

}