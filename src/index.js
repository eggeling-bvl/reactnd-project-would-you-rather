import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import reducer from './reducers/index';
import middleware from './middleware/index';
import {Provider} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

const store=createStore(reducer,middleware);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);

