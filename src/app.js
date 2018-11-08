import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';

import {Provider} from 'react-redux';

import configStore from './store/config-store';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

const store = configStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

//irrelevant

// ReactDOM.render(<AppRouter />, document.querySelector('#root'));
ReactDOM.render(jsx, document.querySelector('#root'));
