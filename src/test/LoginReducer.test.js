import * as actionTypes from '../actions/actionTypes';
import initialState from '../reducers/initialState';
import loginReducer from '../reducers/loginReducer';

describe('Login reducer', () => {
    
    it('should return false login token intially', () => {
        let newState = loginReducer(initialState.login, {
            type: actionTypes.LOAD_LOGIN_SUCCESS
        });

        expect(newState).toEqual(false);
    })

})