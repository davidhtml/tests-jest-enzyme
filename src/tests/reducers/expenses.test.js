import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

//testis if nothing is passed ti reducer
test('should set default state', () => {
    const state = expensesReducer(undefined, {type:"@@INIT"});
    expect(state).toEqual([]);
});


// should we remove expense by ID
test('should removeExpense by id', () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([
        expenses[0],
        expenses[2]
    ])
});

//should NOT remove expense if an id is not found
test('should NOT remove expense if an id is not found', () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: -1
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});

//should add an expense
test('should add an expense', () => {
    const expense = {
        id: 199,
        description: 'for BMW',
        note: '',
        createdAt: 30500,
        amount: 295000
    }
    const action = {
        type: "ADD_EXPENSE",
        expense
    }

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([
        ...expenses,
        expense
    ]);
})

//should edit an expense
test('should edit an expense', () => {
    const id = expenses[1].id;
    const action = {
        type: "EDIT_EXPENSE",
        id,
        updates: {
            description: 'GYM PLUS PLUS'
        }
    }

    const state = expensesReducer(expenses, action);

    expect(state[1].description).toBe('GYM PLUS PLUS');
})
//should NOT edit expense if an id of the expense is not found
test('should NOT edit expense if an id of the expense is not found', () => {
    const id = -1;
    const action = {
        type: "EDIT_EXPENSE",
        id,
        updates: {
            description: 'GYM PLUS PLUS'
        }
    }

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
})
