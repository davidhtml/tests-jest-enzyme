import {createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';

const middlewares = composeWithDevTools(applyMiddleware(thunk));
const reducers = combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
    auth: authReducer
})

export default () => {
    //creating a new store
    const store = createStore(reducers, middlewares);
    return store;
}
