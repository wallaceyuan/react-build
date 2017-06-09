/**
 * Created by Yuan on 2017/5/7.
 */
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import todoApp from './reducers';

//import {StateDemo,CardComponent,CardComponentTwo} from './components'

let store = createStore(todoApp)

let rootElement = document.getElementById('application')
render(
    <Provider store={store}>
        <App />
    </Provider>
,rootElement)

