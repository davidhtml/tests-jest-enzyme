import {addExpense, startAddExpense, removeExpense, editExpense, startEditExpense, setExpenses, startSetExpenses, startRemoveExpense} from '../../actions/expenses';
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase';

const createMockStore = configureStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({id, description, note, amount, createdAt}) => {
        expensesData[id] = {
            description,
            note,
            amount,
            createdAt
        }
    })
    database.ref('expenses').set(expensesData).
    then(() => done());
})

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should remove expense from firebase', (done) => {
    const store = createMockStore({});
    const id = expenses[0].id;
    store.dispatch(startRemoveExpense({id: id}))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: "REMOVE_EXPENSE",
                id
            });

            return database.ref(`expenses/${id}`).once('value')
                .then((snapshot) => {
                    expect(snapshot.val()).toBeFalsy();
                    done();
                })
        })
});

//setup test for editExpense function
test('test if editExpense action returns correct object', () => {
    //call the function
    const action = editExpense('randomID', { note: 'JUST A SIMPLE NOTE' })

    // make an assertion
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'randomID',
        updates: {
            note: 'JUST A SIMPLE NOTE'
        }
    })
});




test('should setup addExpense action object', () => {
    const expenseData = {
        description: 'Rent',
        note: 'this was last month rent',
        amount: 10950,
        createdAt: 1000
    }
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expenses[2]
        }
    })
})

test('should add expense to firebase and store', (done) => {
    const store = createMockStore({});

    const expenseData =  {
        description: 'mouse',
        amount: 3000,
        note: '',
        createdAt: ''
    }
    store.dispatch(startAddExpense(expenseData))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'ADD_EXPENSE',
                expense: {
                    id: expect.any(String),
                    ...expenseData
                }
            })

            return database.ref(`expenses/${actions[0].expense.id}`).once('value')
        })
        .then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseData);
            done();
        })
})

test('should add expense with default to firebase and store', (done) => {
    const store = createMockStore({});

    const expenseData = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    }

    store.dispatch(startAddExpense(expenseData))
        .then(() => {
            const actions = store.getActions();

            expect(actions[0]).toEqual({
                type: 'ADD_EXPENSE',
                expense: {
                    id: expect.any(String),
                    ...expenseData
                }
            })

            return database.ref(`expenses/${actions[0].expense.id}`).once('value')
        })
        .then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseData);
            done();
        })
})

test('should setup set expense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
})

test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore({});
    store.dispatch(startSetExpenses())
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type:"SET_EXPENSES",
                expenses
            });
            done();
        });
});

test('should edit expense from firebase', (done) => {
    const store = createMockStore({});
    const newArr = {
        note: 'note has been drastically updated',
    };
    const id = expenses[2].id;

    store.dispatch(startEditExpense(id, newArr))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'EDIT_EXPENSE',
                id,
                updates: newArr
            });
            return database.ref(`expenses/${id}`).once('value')
                .then((snapshot) => {
                    expect(snapshot.val().note).toBe(newArr.note);
                    done();
                });
        });
})
