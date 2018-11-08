import React from 'react';
import { Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'

import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDasboardPage from '../components/ExpenseDasboardPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact />
                <PrivateRoute path="/dashboard" component={ExpenseDasboardPage} exact />
                <PrivateRoute path="/create" component={AddExpensePage} exact />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} exact />
                <Route path="/help" component={HelpPage} exact />
                <Route component={NotFoundPage} />
            </Switch>
    </Router>
);

export { history }
export default AppRouter;
