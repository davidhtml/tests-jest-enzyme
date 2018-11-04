import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';

import {Provider} from 'react-redux';

import configStore from './store/configStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configStore();

store.dispatch(addExpense({description: 'water bill', amount: 4500}));
store.dispatch(addExpense({description: 'gas bill', createdAt: 1000}));
store.dispatch(addExpense({description: 'rent', amount: 109500}));



const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

// ReactDOM.render(<AppRouter />, document.querySelector('#root'));
ReactDOM.render(jsx, document.querySelector('#root'));
