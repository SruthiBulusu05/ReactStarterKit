import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as service from '../../services/flightsService'
import * as flightAction from  '../../store/action/flightsAction'

class fligts extends Component {
    componentWillMount() {
        this.props.getSchedule(this.props.date);
    }

    onCheckIn(flightId) {
        this.props.checkinFlight(flightId);
        this.props.history.replace({ pathname: '/createpassenger' });
    }

    render() {
        return (
            <div class="section">
                <div class="section-center">
                    <div class="container">
                        <div class="booking-form-flights">
                            <form>
                                <br></br>
                                <h5 class="h5Font">List of flights available</h5>
                                <br />
                                <div class="grid">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-sm">
                                                <div class="grid-content"><b>Scheduled Date</b></div>
                                            </div>
                                            <div class="col-sm">
                                                <div class="grid-content"><b>Flight Number</b></div>
                                            </div>
                                            <div class="col-sm">
                                                <div class="grid-content"><b>Flight Name</b></div>
                                            </div>
                                            <div class="col-sm">
                                                <div class="grid-content"></div>
                                            </div>
                                            <div class="col-sm">
                                                <div class="grid-content"></div>
                                            </div>
                                        </div>
                                        {this.props.flights.map((item, index) => (
                                            <div class="row">
                                                <div class="col-sm">
                                                    <div class="grid-content">{item.scheduledDate}</div>
                                                </div>
                                                <div class="col-sm">
                                                    <div class="grid-content">{item.number}</div>
                                                </div>
                                                <div class="col-sm">
                                                    <div class="grid-content">{item.name}</div>
                                                </div>
                                                <div class="col-sm">
                                                    <div class="grid-content"><a href="#" onClick={()=>this.onCheckIn(item.number)}>Checkin-In</a></div>
                                                </div>
                                                <div class="col-sm">
                                                    <div class="grid-content"><a href="#">View all passengers</a></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        date: state.flights.date,
        flights: state.flights.flights
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSchedule: (date) => dispatch(service.getScheduledFlightDetails(date)),
        checkinFlight: (flightId) => dispatch(flightAction.createPassengerflight(flightId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(fligts);