import {addExpense, startAddExpense, removeExpense, editExpense} from '../../actions/expenses';
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase';

const createMockStore = configureStore([thunk])

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
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
// test('should setup addExpense action object with default values', () => {
//     const defaultExpenseData = {
//         description: '',
//         note: '',
//         amount: 0,
//         createdAt: 0
//     }
//     const action = addExpense();
//
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             ...defaultExpenseData,
//             id: expect.any(String)
//         }
//     })
//
// })
