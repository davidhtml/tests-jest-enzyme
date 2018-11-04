//SET__TEXT_FILTER

const setTextFilter = (text = '') => ({
    type: 'SET__TEXT_FILTER',
    text
})
//SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
})
//SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
})
//SET_START_DATE
const setStartDate = (date = null) => ({
    type: 'SET_START_DATE',
    date,
})
//SET_END_DATE
const setEndDate = (date = null) => ({
    type: 'SET_END_DATE',
    date,
})

export {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate};
