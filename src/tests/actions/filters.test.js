import moment from 'moment';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../../actions/filters';

test('should generate setStartDate action object', () => {
    const action = setStartDate(moment(0));

    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    })
});

test('should generate setEndDate action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)
    })
});

////----------------------------

test('should generate sortByDate action object', () => {
    const action = sortByDate();

    expect(action).toEqual({
        type: 'SORT_BY_DATE',
        sortBy: 'date'
    })
});

test('should generate sortByAmount action object', () => {
    const action = sortByAmount();

    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
        sortBy: 'amount'
    })
});

test('should generate setTextFilter action object when input is provided', () => {
    const action = setTextFilter('rent');

    expect(action).toEqual({
        type: 'SET__TEXT_FILTER',
        text: 'rent'
    })
})

test('should generate setTextFilter action object when input is NOT provided', () => {
    const action = setTextFilter();

    expect(action).toEqual({
        type: 'SET__TEXT_FILTER',
        text: ''
    })
})
