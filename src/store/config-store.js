import {createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';


const middlewares = composeWithDevTools(applyMiddleware(thunk));
const reducers = combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
})

export default () => {
    //creating a new store
    const store = createStore(reducers, middlewares);
    return store;
}
