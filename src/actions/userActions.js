import * as actionTypes from "./actionTypes";
import UserApi from "../data/UserApi";

export function loadUsersSuccess(users) {
  return {
    type: actionTypes.LOAD_USERS,
    users,
  };
}

export function addUserSuccess(user) {
  return {
    type: actionTypes.ADD_USER,
    user,
  };
}

//Server Calls
export function loadUsers() {
  return function (dispatch) {
    return UserApi.getAllUsers()
      .then((users) => {
        dispatch(loadUsersSuccess(users));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function addUser(user) {
  return function (dispatch, getState) {
    return UserApi.addUser(user)
      .then((user) => {
        dispatch(addUserSuccess(user));
      })
      .catch((error) => {
        throw error;
      });
  };
}
