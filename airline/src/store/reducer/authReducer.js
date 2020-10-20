import * as actionType from '../action/actionType'

const intialstate = {
    token: {
        name: '',
        email: '',
        role: ''
    }
}

export default (state = intialstate, action) => {
    switch (action.type) {
        case actionType.SIGN_IN:
            var token = action.payload;
            return Object.assign({}, state, { token: token == null || token ==undefined || token == '' ? state.token : token })
            default:
                return state
    }
}