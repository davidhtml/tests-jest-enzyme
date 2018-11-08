import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

    let startEditExpense, startRemoveExpense, history, wrapper;

    beforeEach(() => {
     startEditExpense = jest.fn();
     startRemoveExpense = jest.fn();
     history = { push: jest.fn()};
     wrapper = shallow(<EditExpensePage
         startEditExpense={startEditExpense}
         startRemoveExpense={startRemoveExpense}
         history={history}
        expense={expenses[0]}
     />);
    })

test('should render edit expense page correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle edit expense', () => {
    wrapper.find('ExpenseForm').prop('stateObjToParent')(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);

});


test('should handle remove expense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({id: expenses[0].id});

});

//
// wrapper.find('form').simulate('submit', {
//     preventDefault: () => {}
// });
