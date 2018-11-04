import {createStore, combineReducers, applyMiddleware} from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

export default () => {
    //creating a new store
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer,
        }),
        devToolsEnhancer()
    );
    return store;
}
