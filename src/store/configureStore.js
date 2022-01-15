import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(intialState){

    return createStore(rootReducer,
        intialState,
        applyMiddleware(thunk),
        // composeWithDevTools
        );
}


