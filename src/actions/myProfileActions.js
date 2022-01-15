import * as actionTypes from './actionTypes';

//Loading Empty Array intially
export function loadIntialProfile() {
    return { type: actionTypes.LOAD_PROFILE };
}

//Setting User details When Sign IN
export function loginProfile(userid) {
    return { type: actionTypes.LOGIN_PROFILE, userid }
}
