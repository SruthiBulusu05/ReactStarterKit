import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as flightsAction from '../../store/action/flightsAction'

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setDate: (date) => dispatch(flightsAction.setScheduleDate(date))
    }
}

class home extends Component {
    constructor() {
        super();
        this.state = { eamil: '', password: '' }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.setDate(this.state.date);
        this.props.history.replace({ pathname: '/flights' });
    }

    render() {
        return (
            <div id="booking" class="section">
                <div class="section-center">
                    <div class="container">
                        <div class="booking-form">
                            <form onSubmit={this.handleSubmit}>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <span class="form-label">Flying from</span>
                                            <input class="form-control" type="text" placeholder="City or airport" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <span class="form-label">Flyning to</span>
                                            <input class="form-control" type="text" placeholder="City or airport" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <span class="form-label">Departing</span>
                                            <input class="form-control" id="date" onChange={this.handleChange} type="date" required />
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                        <div class="form-group">
                                            <span class="form-label">Passengers</span>
                                            <select class="form-control">
                                                <option>1</option>
                                            </select>
                                            <span class="select-arrow"></span>
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                        <div class="form-group">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="form-btn">
                                            <button class="submit-btn">Show flights</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(home);