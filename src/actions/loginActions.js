import * as actionTypes from './actionTypes';

//Intialising Login Token
export function loadLogin() {
    return { type: actionTypes.LOAD_LOGIN_SUCCESS };
}
//Setting Login Token when user Sign In
export function loginUserSuccess(loginToken) {
    return { type: actionTypes.LOGIN_USER, loginToken }
}
