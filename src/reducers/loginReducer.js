import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function loginReducer(state = initialState.login, action) {
  switch (action.type) {
    case actionTypes.LOAD_LOGIN_SUCCESS: {
      return state;
    }
    case actionTypes.LOGIN_USER: {
      return action.loginToken;
    }
    default:
      return state;
  }
}
