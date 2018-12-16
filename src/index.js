import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as serviceWorker from './serviceWorker';
import CounterReducer from './reducers/CounterReducer';
import ReactDOM from 'react-dom';
//import {combineReducers} from 'redux';
import App from './App';
import './index.css';

const store = createStore(
  CounterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
