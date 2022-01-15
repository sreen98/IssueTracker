import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function myProfileReducer(state = initialState.profile, action) {
    switch (action.type) {
        case actionTypes.LOAD_PROFILE:{
            
            return state;
        }
        case actionTypes.LOGIN_PROFILE: {
        
            return  action.userid
            
        }
        default:
            return state;

    }
}
