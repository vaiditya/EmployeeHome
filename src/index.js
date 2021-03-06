import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import allReducers from './allReducers';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from './App'

const store=createStore(allReducers);


ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
