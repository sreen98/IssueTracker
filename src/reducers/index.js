import {combineReducers} from 'redux';
import issues from './issueReducer';
import users from './userReducer';
import login from './loginReducer';
import profile from './myProfileReducer'


const rootReducer = combineReducers({
    issues,
    users,
    login,
    profile

});

export default rootReducer;
