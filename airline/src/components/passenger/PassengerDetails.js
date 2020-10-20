import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as action from '../../store/action/passengerAction'
import * as service from '../../services/passengerService'

class PassengerDetails extends Component {
    componentWillMount() {
        this.props.getPassengerDetails();
    }

    _onClickDelete = (email) => {
        this.props.deletePassenger(email);
    }

    render() {
        console.log(this.props.passengers, "my render method")
        return (
            <div>
                <h5>Passengers list</h5>
                <div class="divider"></div>
                <br></br>
                <div class="row">
                    <div class="col s1"><b>Passenger Name</b></div>
                    <div class="col s2"><b>Email</b></div>
                    <div class="col s1"><b>Age</b></div>
                    <div class="col s1"><b>Gender</b></div>
                    <div class="col s1"><b>Seat number</b></div>
                </div>
                <div class="divider"></div>
                <br></br>
                {this.props.passengers.map((item, index) => (
                    <div class="row">
                        <div class="col s1">{item.passengerName}</div>
                        <div class="col s2">{item.email}</div>
                        <div class="col s1">{item.age}</div>
                        <div class="col s1">{item.gender}</div>
                        <div class="col s1">{item.SeatDetails}</div>
                        {this.props.user.role === 'Admin' &&
                        <div class="col s1"><a href='' >Edit</a></div>}
                        {this.props.user.role === 'Admin' &&
                        <div class="col s1"><a href='' onClick={() => this.props.deletePassenger(item.email)} >Delete</a></div>}
                    </div>
                    // <p key={index}>{item.passengerName}</p>
                )
                )}
                {/* <button className="btn pink lighten-1 z-depth-0" onClick={this.props.getUpdateDetails}>Click me....</button> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    debugger;
    return {
        passengers: state.passenger.passengerList,
        user: state.auth.token
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPassengerDetails: () => dispatch(service.getPassengerDetails()),
        getUpdateDetails: () => dispatch(action.getUpdateDetails()),
        deletePassenger: (email) => dispatch(service.deletePassenger(email))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PassengerDetails)