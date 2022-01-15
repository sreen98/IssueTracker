import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function issueReducer(state = initialState.issues, action) {
    switch (action.type) {
        case actionTypes.LOAD_ISSUES:
            {
                return action.issues;
            }
        case actionTypes.ADD_ISSUE: {
            return [
                ...state,
                action.issue
            ];
        }

        case actionTypes.DELETE_ISSUE: {
            let newState = state.filter(issue => issue.id != action.id);
            return newState;
        }

        case actionTypes.EDIT_ISSUE: {

            action.issue.id = action.id;
            return [
                // ...state.filter(issue => issue.id != action.id),
                //  action.issue
                ...state.map(issue=>{
                    if(issue.id==action.id)
                        return action.issue;
                    else    
                        return issue;
                })
                
            ]
        }
        case actionTypes.ADD_VIEW: {

            let array_copy = state.map((element) => {
                if (element.id === action.id) {
                    element.views = action.issue.views;
                }
                return element;
            });
            return array_copy;
        }

        default:
            return state;
    }
}