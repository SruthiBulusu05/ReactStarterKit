import * as actionType from './actionType'

export const getToken=(token)=>{
    return{
        type:actionType.SIGN_IN,
        payload: token
    }
}