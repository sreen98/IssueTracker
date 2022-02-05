import * as actionTypes from "./actionTypes";
import IssueApi from "../data/IssueApi";

export function loadIssuesSuccess(issues) {
  return {
    type: actionTypes.LOAD_ISSUES,
    issues,
  };
}

export function addIssueSuccess(issue) {
  return {
    type: actionTypes.ADD_ISSUE,
    issue,
  };
}
export function deleteIssueSuccess(id) {
  return { type: actionTypes.DELETE_ISSUE, id };
}

export function editIssueSuccess(issue, id) {
  return { type: actionTypes.EDIT_ISSUE, issue, id };
}
export function addViewSuccess(id, issue) {
  return { type: actionTypes.ADD_VIEW, id, issue };
}
//Server Calls
export function loadIssues() {
  return function (dispatch) {
    return IssueApi.getAllIssues()
      .then((issues) => {
        dispatch(loadIssuesSuccess(issues));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function addIssue(issue) {
  return function (dispatch, getState) {
    return IssueApi.addIssue(issue)
      .then((issue) => {
        dispatch(addIssueSuccess(issue));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function deleteIssue(id) {
  return function (dispatch, getState) {
    return IssueApi.deleteIssue(id)
      .then(() => {
        dispatch(deleteIssueSuccess(id));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function editIssue(id, issue) {
  return function (dispatch, getState) {
    return IssueApi.editIssue(id, issue)
      .then(() => {
        dispatch(editIssueSuccess(id, issue));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function addView(id, issue) {
  return function (dispatch, getState) {
    return IssueApi.addView(id, issue)
      .then((issue) => {
        dispatch(addViewSuccess(id, issue));
      })
      .catch((error) => {
        throw error;
      });
  };
}
