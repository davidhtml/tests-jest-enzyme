import moment from 'moment';

const expenses = [
    {
        id: '1',
        description: 'rent',
        note: 'first note',
        amount: 195,
        createdAt: 0
    },
    {
        id: '2',
        description: 'gym',
        note: 'second note',
        amount: 330,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    },
    {
        id: '3',
        description: 'credit card',
        note: 'third note',
        amount: 100,
        createdAt: moment(0).add(4, 'days').valueOf()
    }
];

export default expenses;
