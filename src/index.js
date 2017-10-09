import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers';
import {addCharacterById} from './actions';

const store = createStore(rootReducer);
store.subscribe(()=> console.log('store', store.getState()));
store.dispatch(addCharacterById(3));

console.log(store.getState());
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

