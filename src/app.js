import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, { history } from './routers/AppRouter';

import {Provider} from 'react-redux';

import configStore from './store/config-store';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import LoadingPage from './components/LoadingPage';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import '../public/images/bg.jpg'
import '../public/images/favicon.png'
import '../public/images/loader.gif'
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';

const store = configStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.querySelector('#root'));
        hasRendered = true;
    }
};


ReactDOM.render(<LoadingPage />, document.querySelector('#root'));

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        console.log('if user is true=>',  user)
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses())
        .then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
        })
    } else {
        console.log('else close')
        store.dispatch(logout());
        renderApp();
        history.push('/')
    }
});
