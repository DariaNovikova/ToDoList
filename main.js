import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import mainReducer from './store/reducers.js';

var store = createStore(mainReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('app')

);

