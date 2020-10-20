import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLink from './SignedInLink'
import SignedOutLink from './SignedOutLink'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import * as service from '../../services/AuthService'

const Navbar = () => {
    
    return (
        // <nav className="navbar fixed-top navbar-dark bg-dark">
        //     {/* <div className="container"> */}
        //     <Link to='/' class="navbar-brand">Airline Ticketing System</Link>
        //     {/* <SignedInLink /> */}
        //     <div class="collapse navbar-collapse" id="navbarSupportedContent">
        //     <ul class="navbar-nav mr-auto">
        //         <li class="nav-item active">
        //             <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        //         </li>
        //     </ul></div>
        //     <SignedOutLink />
        //     {/* </div> */}
        // </nav>
        // <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        //     <a class="navbar-brand" href="">Airline Ticketing System</a>

        //     <div class="collapse navbar-collapse" id="navbarSupportedContent">
        //         <ul class="navbar-nav mr-auto">
        //             <li class="nav-item">
        //                 <NavLink class="nav-link" to='/signin'>Sign In</NavLink>
        //             </li>
        //             <li class="nav-item">
        //                 <NavLink class="nav-link" to='/signin'>Sign Out</NavLink>
        //             </li>
        //         </ul>
        //         {/* <form class="form-inline my-2 my-lg-0">
        //         <NavLink to='/signup'>Sign Out</NavLink>
        //             <NavLink to='/signup'>Sign In</NavLink>
        //         </form> */}
        //         <span class="navbar-text">
        //             {this.props.token.name}</span>
        //     </div>
        // </nav>
        <SignedInLink/>
    )

}

export default Navbar;