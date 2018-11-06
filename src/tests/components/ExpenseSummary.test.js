import React from 'react';
import { shallow } from 'enzyme'
import {ExpenseSummary} from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';

test('should not render any expense if expenses are not provides', () => {
    const wrapper = shallow(<ExpenseSummary expenses={[]}/>);
    expect(wrapper).toMatchSnapshot();
})


test('should render expenses correcntly', () => {
    const wrapper = shallow(<ExpenseSummary expenses={[expenses[0]]}/>);
    expect(wrapper).toMatchSnapshot();
})
