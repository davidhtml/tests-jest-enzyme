import moment from 'moment';

const altFilters = {
    text: 'rent',
    sortBy: 'date',
    startDate: moment(0),
    endDate: moment(0).add(3, 'days')
}

const filters = {
    text: '',
    sortBy: 'date',
    startDate: null,
    endDate: null
}

export  { filters, altFilters };
