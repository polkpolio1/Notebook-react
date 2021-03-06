import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

import App from './containers/App';

import './assets/css/index.css';
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.min.js'

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);