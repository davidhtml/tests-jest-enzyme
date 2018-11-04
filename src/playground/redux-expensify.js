import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


//TODO Actions for expenses object
// ADD_EXPENSE
const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt,
    }
});
// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})
// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates,
})

//TODO Actions for filters object
//SET__TEXT_FILTER

const setTextFilter = (text = '') => ({
    type: 'SET__TEXT_FILTER',
    text
})
//SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
})
//SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
})
//SET_START_DATE
const setStartDate = (date = null) => ({
    type: 'SET_START_DATE',
    date,
})
//SET_END_DATE
const setEndDate = (date = null) => ({
    type: 'SET_END_DATE',
    date,
})

//Expenses reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return [
                ...state.filter(({ id }) => id !== action.id)
            ];
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense
                }
            })

        default:
            return state;
    }
};

//filters Reducer
// text => '', sortBy => 'Data', startDate: null, endDate: null,

const filtersReducerInitial = {
    text: '',
    sortBy: 'data',
    startDate: null,
    endDate: null,
};

const filtersReducer = (state = filtersReducerInitial, action) => {
    switch (action.type) {
        case 'SET__TEXT_FILTER':
            return {
                ...state,
                text: action.text,
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: action.sortBy,
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: action.sortBy,
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.date,
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.date,
            };
        default:
            return state
    }
}

//get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate, amount}) => {

    return  expenses.filter((expense) => {
            const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
            const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
            const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

            return startDateMatch && endDateMatch && textMatch;
        }).sort((a,b) => {
            if (sortBy === 'date') {
                return a.createdAt < b.createdAt ? 1 : -1;
            } else if (sortBy === 'amount') {
                return a.amount < b.amount ? 1 : -1;
            }
        });
}


//creating a new store
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer,
    })
);


store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

    console.log(visibleExpenses);

});

// for expense reducer
const expenseOne = store.dispatch(addExpense({description: 'rent', amount: 100, createdAt: 100}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300, createdAt: 1000}));
// const bybys = store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// const editing2 = store.dispatch(editExpense(expenseTwo.expense.id, { amount: 5 }));
//
// store.dispatch(setTextFilter('cof'));
store.dispatch(sortByAmount()); //amount
// store.dispatch(sortByDate()); //date
// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1001));

const demoState = {
    expenses: [
        {
            id: 'randomabc',
            description: 'January rent',
            note: 'This was the final payment for rent',
            amount: 55000,
            createdAt: 0,
        },
    ],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: null,
        endDate: null,
    }
};
