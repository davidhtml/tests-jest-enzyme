import moment from 'moment';
import filtersReducer from '../../reducers/filters';


test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual({
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

///sortBy amount test
test('should set sortBy amount', () => {
    const sortBy = 'amount';
    const state = filtersReducer(undefined, {type: "SORT_BY_AMOUNT", sortBy});

    expect(state.sortBy).toBe('amount')
});

///test sort by date
test('should set sortBy date', () => {
    const sortBy = 'date';

    const currentState = {
        text: '',
        startDate: null,
        endDate: null,
        sortBy: 'amount'
    }
    const action = {
        type: "SORT_BY_DATE",
        sortBy
    }
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

//should set text filer
test('should set text filter', () => {
    const text = 'search text e.g. rent';
    const action = {
        type: 'SET__TEXT_FILTER',
        text
    }

    const state = filtersReducer(undefined, action);

    expect(state.text).toBe(text);
});
// should set startDate filter
test('should set startDate filter', () => {
    const date = moment();
    const action = {
        type: 'SET_START_DATE',
        date
    }
    const state = filtersReducer(undefined, action);

    expect(state.startDate).toEqual(date);
});

//should set endDate filter
test('should set endDate filter', () => {
    const date = moment();
    const action = {
        type: 'SET_END_DATE',
        date
    }
    const state = filtersReducer(undefined, action);

    expect(state.endDate).toEqual(date);
})
