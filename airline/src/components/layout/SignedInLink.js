import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import * as service from '../../services/AuthService'

const mapStateToProps = state => {
    return {
        token: state.auth.token
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        refreshToken: () => dispatch(service.refreshToken())
    }
};

class SignedInLink extends React.Component {
    componentWillMount() {
        this.props.refreshToken();
    }
    render() {
        return (
            // <ul class="navbar-nav mr-auto">
            //     {/* <li class="nav-item"><NavLink to='/createPassenger'>Check-In</NavLink></li>
            //     <li class="nav-item"><NavLink to='/passengerDetails'>Checkin Details</NavLink></li> */}
            //     {/* <li><NavLink to='/LogOut'>LogOut</NavLink></li> */}
            //     <li class="nav-item"><NavLink to='/' className='btn btn-floating pink lightem-1'>L</NavLink></li>
            //     <li>{this.props.token.name}</li>
            // </ul>

            // <form class="form-inline my-2 my-lg-0">
            //     <NavLink to='/createPassenger'>Check-In</NavLink>
            //     {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
            // </form>
            <div>
                <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand" href="/">Airline Ticket Booking System</a>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <NavLink class="nav-link" to='/signin'>Sign In</NavLink>
                            </li>
                            <li class="nav-item">

                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link" to='/signout'>Sign Out</NavLink>
                            </li>
                        </ul>
                        <span class="navbar-text">
                            {this.props.token.name}
                        </span>
                    </div>
                </nav>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLink);