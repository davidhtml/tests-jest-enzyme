import moment from 'moment';
import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';

test('should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: null,
        endDate: null
    }
    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([
        expenses[2],
        expenses[0]
    ])
});

test('should filter by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: null
    }

    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([
        expenses[2],
        expenses[0]
    ]);
})

//should filter by end endDate
test('should filter by endDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: null,
        endDate: moment(0).add(3, 'days')
    }

    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([
        expenses[0],
        expenses[1]
    ])

})

//should sort by date
test('should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: null,
        endDate: null
    };

    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([
        expenses[2],
        expenses[0],
        expenses[1]
    ]);
});


//should sor by amount
test('should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: '',
        endDate: ''
    };

    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([
        expenses[1],
        expenses[0],
        expenses[2]
    ]);
})
