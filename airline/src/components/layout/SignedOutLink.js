import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLink=()=>{
    return (
        <ul class="navbar-nav mr-auto">
            <li class="nav-link"><NavLink to='/signup'>SignUp</NavLink></li>
            <li class="nav-link"><NavLink to='/signin'>LogIn</NavLink></li>
        </ul>
    )
}

export default SignedOutLink