import * as authAction from '../store/action/userAction'

export const signIn = (email, password) => (dispatch) => {
    let users;
    let strUsers = localStorage.getItem('users');
    if(strUsers == null || strUsers == "" || strUsers == undefined){
        users = [
            {
                name: 'Admin',
                email: 'admin@mail.com',
                password: 'Password',
                role: 'Admin'
            },
            {
                name: 'Check In Staff',
                email: 'checkinstaff@mail.com',
                password: 'Password',
                role: 'CheckInStaff'
            },
            {
                name: 'In Flight Staff',
                email: 'inflightstaff@mail.com',
                password: 'Password',
                role: 'InFlightStaff'
            }
        ];
        localStorage.setItem('users', JSON.stringify(users))
    }else{
        users = JSON.parse(strUsers);
    }
    debugger;
    let newuser = users.filter(function (el) { return (el.email === email && el.password === password); });
    localStorage.setItem('token', JSON.stringify(newuser[0]));
    dispatch(authAction.getToken(newuser[0]));
}

export const refreshToken = () => (dispatch) => {
    var token = localStorage.getItem('token');
    dispatch(authAction.getToken(JSON.parse(token)));
}