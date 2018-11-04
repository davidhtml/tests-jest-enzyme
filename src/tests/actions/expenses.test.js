import {addExpense, removeExpense, editExpense} from '../../actions/expenses';

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

    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expenseData
        }
    })
})

test('should setup addExpense action object with default values', () => {
    const defaultExpenseData = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    }
    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...defaultExpenseData,
            id: expect.any(String)
        }
    })

})
