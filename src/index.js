import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { loadIssues } from './actions/issueActions';
import {loadUsers} from './actions/userActions';
import {loadLogin} from './actions/loginActions';
import { loadIntialProfile} from './actions/myProfileActions';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';



const store = configureStore();
store.dispatch(loadIssues());
store.dispatch(loadUsers());
store.dispatch(loadLogin());
store.dispatch(loadIntialProfile());

ReactDOM.render(
 
    <Provider store={store}>

      <App />
    </Provider>

 
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
