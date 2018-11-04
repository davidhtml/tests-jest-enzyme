import { createStore } from 'redux';

//action generators -> objects for actions

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

//TODO reducers
//1. Reducers are pure functions -> with given inputs we will always get same output
//2. Never change state or action
const countReducer = (state = { count: 0 }, action) => {
    console.log(action);
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// store.dispatch(incrementCount({ incrementBy: 5}));

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10}));

store.dispatch(setCount({count: -100}));
store.dispatch(resetCount());
//
// store.dispatch({
//     type: 'INCREMENT',
//     incrementByFive: 5,
// });
//
//
//
// store.dispatch({
//     type: 'INCREMENT',
// });
//
// store.dispatch({
//     type: 'RESET'
// });
//
// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10,
// });
//
// store.dispatch({
//     type: 'DECREMENT',
// });
//
// store.dispatch({
//     type: 'SET',
//     count: 101,
// })
