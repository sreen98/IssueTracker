import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.users, action) {
    switch (action.type) {

        case actionTypes.LOAD_USERS:
            {
                return action.users;

            }

        case actionTypes.ADD_USER: {
            return [
                ...state,
                action.user
            ];
        }
        default:
            return state;

    }
}