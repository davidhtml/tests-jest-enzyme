import moment from 'moment';

const filtersReducerInitial = {
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('Month'),
    endDate: moment().endOf('Month')
};

export default (state = filtersReducerInitial, action) => {
    switch (action.type) {
        case 'SET__TEXT_FILTER':
            return {
                ...state,
                text: action.text,
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: action.sortBy,
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: action.sortBy,
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.date,
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.date,
            };
        default:
            return state
    }
}
