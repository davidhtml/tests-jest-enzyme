import React from 'react';
import {BrowserRouter, Switch, Route, Link, NavLink} from 'react-router-dom';

import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDasboardPage from '../components/ExpenseDasboardPage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDasboardPage} exact />
                <Route path="/create" component={AddExpensePage} exact />
                <Route path="/edit/:id" component={EditExpensePage} exact />
                <Route path="/help" component={HelpPage} exact />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
