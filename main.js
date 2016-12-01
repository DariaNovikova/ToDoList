import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import mainReducer from './store/reducers.js';
import thunk from 'redux-thunk';
import {loadAll} from './store/actionCreators';

var store = createStore(mainReducer, applyMiddleware(thunk));

store.dispatch(loadAll())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('app')

);

