import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDasboardPage from '../../components/ExpenseDasboardPage';

test('should renturn ExpenseDasboardPage', () => {
    const wrapper = shallow(<ExpenseDasboardPage />);
    expect(wrapper).toMatchSnapshot();
});
