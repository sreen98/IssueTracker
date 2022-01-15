import * as actionTypes from '../actions/actionTypes';
import initialState from '../reducers/initialState';
import myProfileReducer from '../reducers/myProfileReducer';

describe('My Profile reducer', () => {
    it('should return user id', () => {
        let userid = 4;
        let newState = myProfileReducer(initialState.profile, {
            type: actionTypes.LOGIN_PROFILE, userid
        });

        expect(newState).toEqual(4);
    })
    it('should return empty profle id array intially', () => {
        let newState = myProfileReducer(initialState.profile, {
            type: actionTypes.LOAD_PROFILE
        });

        expect(newState).toEqual([]);
    })

})