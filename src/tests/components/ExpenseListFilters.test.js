import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { ExpenseListFilters } from '../../components/ExpenseListFilter';
import {filters, altFilters} from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
         />
     );
});

test('should render expense list filters correctly', () => {
    expect(wrapper).toMatchSnapshot();
})



test('should render expense list filters correctly with alternative filters', () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot();
});


///should hance text onChange
test('should handle text change', () => {
    const value = 'rent';

    wrapper.find('input').simulate('change', {
        target: { value }
    });

    // console.log(wrapper.state('text'))

    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});


//should sort by date
test('sort by date ', () => {
    const value = 'date';
    wrapper.setProps({
        filters: altFilters
    })
    wrapper.find('select').simulate('change', {
        target: { value }
    })

    expect(sortByDate).toHaveBeenLastCalledWith();
})

//should sort by amount
test('sort by amount ', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
        target: { value }
    })

    expect(sortByAmount).toHaveBeenLastCalledWith();
})

//should handle date changes
test('should handle on date change', () => {
    const startDate = moment(0).add(3, 'days');
    const endDate = moment(0).add(13, 'days');

    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({startDate, endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

//should handle date focus changes
test('should handle date foxus changes', () => {
    const startDate = 'startDate';
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(startDate);

    expect(wrapper.state('calendarFocused')).toBe(startDate);
})
