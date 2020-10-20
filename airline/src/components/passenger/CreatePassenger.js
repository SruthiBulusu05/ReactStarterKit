import React, { Component } from 'react'
import { connect } from 'react-redux'
// import M, { Modal, Button } from 'materialize-css'
import { history } from '../../App'
import * as action from '../../store/action/passengerAction'
import { Redirect } from 'react-router-dom'
import * as service from '../../services/passengerService'
import SeatPicker from "react-seat-picker";
import { Modal, Button } from 'react-bootstrap'
// import { DatePicker } from 'materialize-css';

class CreatePassenger extends Component {

    constructor(props) {
        super(props);
        this.state = {
            passenger: {
                passengerName: '', firstName: '', lastName: '', address: '', age: '', gender: '', passportNo: '',
                specialPrivilage: '', foodFee: '', baggageFee: '', servicesFee: '', seatNo: '', SeatDetails: ''
            },
            loading: false,
            modal: false,
            scheduleddate: ''
        };
    }
    componentWillMount() {
        debugger;
        this.props.getSeats(this.props.flightId);
    }

    handleChange = (e) => {
        let newPassenger = this.state.passenger;
        newPassenger[e.target.id] = e.target.value;
        newPassenger.passengerName = newPassenger.firstName.concat(" ").concat(newPassenger.lastName);
        this.setState({ passenger: newPassenger });
    }

    handleDate = () => {
        this.setState({
            scheduleddate: this.scheduleddate.current.value
        });
        this.props.getSchedule(this.state.scheduleddate);
    }

    handleClose = () => {
        this.setState({ modal: false });
    }
    handleOpen = (e) => {
        debugger;
        e.preventDefault();
        this.setState({ modal: true });
    }

    handleSubmit = (e) => {
        debugger;
        e.preventDefault();
        let update = this.props.updatedFlightSeats;
        this.props.savePassengerDetails(this.state.passenger, update);
        this.props.history.replace({ pathname: '/passengerdetails' });
    }

    addSeatCallback = ({ row, number, id }, addCb1) => {
        this.setState(
            {
                loading: true
            },
            async () => {
                await new Promise(resolve => setTimeout(resolve, 1500));
                const newTooltip = `Booked by ${this.state.passenger.passengerName}`;
                addCb1(row, number, id, newTooltip);
                let seat = {
                    row: row,
                    number: number,
                    id: id,
                    newTooltip: newTooltip
                };
                this.props.updateSeatAllocation(seat);
                let newPassenger = this.state.passenger;
                newPassenger.seatNo = id;
                newPassenger.SeatDetails = row + ' ' + number;
                this.setState({ loading: false, passenger: newPassenger });
            }
        );
    };

    removeSeatCallback = ({ row, number, id }, removeCb) => {
        this.setState(
            {
                loading: true
            },
            async () => {
                await new Promise(resolve => setTimeout(resolve, 1500));
                // A value of null will reset the tooltip to the original while '' will hide the tooltip
                const newTooltip = ["A", "B", "C"].includes(row) ? null : "";
                removeCb(row, number, newTooltip);
                this.seats = this.tempSeats.filter(function (el) { return (el.row != row && el.seatnum != number); });
                this.setState({ loading: false });
            }
        );
    };

    render() {
        if (this.props.redirect) {
            return <Redirect to='/passengerDetails' />
        }
        return (
            <div id="booking" class="section">
                <div class="section-center">
                    <div class="container">
                        <div class="booking-form-flights">
                            <br></br>
                            <form onSubmit={this.handleSubmit}>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <span class="form-label">First Name</span>
                                            <input class="form-control" type="text" id="firstName" onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <span class="form-label">Last Name</span>
                                            <input class="form-control" type="text" id="lastName" onChange={this.handleChange} />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <span class="form-label">Email</span>
                                            <input class="form-control" type="text" id="email" onChange={this.handleChange} placeholder="xxxx@xxxxx.com" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <span class="form-label">Passport number</span>
                                            <input class="form-control" type="text" id="passportNo" onChange={this.handleChange} placeholder="ML5XX2X1" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <span class="form-label">Seat</span>
                                            <input class="form-control" type="text" id="seat" value={this.state.passenger.SeatDetails} disabled />
                                            <Modal show={this.state.modal} onHide={this.handleClose} centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Please select a seat</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    {this.props.flightSeats.length > 1 &&
                                                        <div className="container">
                                                            <center>
                                                                <h5 className="grey-text text-darken-3">Please choose a seat</h5>

                                                                <div style={{ marginTop: "50px" }}>
                                                                    <SeatPicker
                                                                        addSeatCallback={this.addSeatCallback}
                                                                        removeSeatCallback={this.removeSeatCallback}
                                                                        rows={this.props.flightSeats}
                                                                        maxReservableSeats={3}
                                                                        alpha
                                                                        visible
                                                                        selectedByDefault
                                                                        loading={this.state.loading}
                                                                        tooltipProps={{ multiline: true }}
                                                                    />
                                                                </div>
                                                            </center>
                                                        </div>}
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button variant="primary" onClick={this.handleClose}>
                                                        Done
                                                    </Button>
                                                </Modal.Footer>
                                            </Modal>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <span class="form-label"></span>
                                            <button class="btn btn-secondary" onClick={this.handleOpen}>Select Seat</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <span class="form-label">Age</span>
                                            <input class="form-control" type="text" id="age" onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <span class="form-label">Address</span>
                                            <input class="form-control" type="text" id="address" onChange={this.handleChange} />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <span class="form-label">Gender</span>
                                            <select class="form-control" defaultValue="" id="gender" onChange={this.handleChange}>
                                                <option value=" disabled">Choose your gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="none">None</option>
                                            </select>
                                            <span class="select-arrow"></span>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <span class="form-label">Special Privilage</span>
                                            <select class="form-control" defaultValue="" id="specialPrivilage" onChange={this.handleChange}>
                                                <option value=" disabled">Choose your specialPrivilage</option>
                                                <option value="wheel-chair">WheelChair</option>
                                                <option value="infant">Infant</option>
                                                <option value="none">None</option>
                                            </select>
                                            <span class="select-arrow"></span>
                                        </div>
                                    </div>
                                </div>
                                <br></br>
                                <br></br>
                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="form-btn">
                                            <button class="submit-btn">Save</button>
                                        </div>
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
        flightId: state.flights.flightId,
        passengers: state.passenger.passengers,
        redirect: state.passenger.redirect,
        passengerView: state.passenger.passengerView,
        seatView: state.passenger.seatView,
        flightSeats: state.passenger.flightSeats,
        updatedFlightSeats: state.passenger.updatedFlightSeats,
        schedule: state.passenger.schedule
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSeats: (flightId) => dispatch(service.getSeats(flightId)),
        updateSeatAllocation: seat => dispatch(action.updateSeatAllocation(seat)),
        savePassengerDetails: (passenger, updatedRows) => dispatch(service.savePassengerDetails(passenger, updatedRows))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePassenger);