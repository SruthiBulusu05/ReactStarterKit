import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as service from '../../services/AuthService'

const mapStateToProps = (state) => {
    return {
        token: state.auth.token
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (email, password) => dispatch(service.signIn(email, password))
    }
}

class SignIn extends Component {
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
        debugger;
        this.props.signIn(this.state.email, this.state.password);
        this.props.history.replace({ pathname: '/' });
    }

    render() {
        return (
            <div>
                <div id="booking" class="section">
                    <div class="section-center">
                        <div class="container">

                            <div class="booking-form">
                                <form onSubmit={this.handleSubmit}>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <span class="form-label">User name</span>
                                                <input class="form-control" type="text" placeholder="email" id="email" onChange={this.handleChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <span class="form-label">Password</span>
                                                <input class="form-control" type="password" placeholder="Password" id="password" onChange={this.handleChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                        <div class="form-btn">
                                                <button class="login-submit-btn">Sign In</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);