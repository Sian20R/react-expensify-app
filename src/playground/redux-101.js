import { createStore } from 'redux'; 

// Actions generators - functions that return functions objects
const incrementCount = ({ incrementBy = 1 }) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 }) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ set }) => ({
    type: 'SET',
    set
});

const resetCount = ({ }) => ({
    type: 'RESET',
});


// Reducers
// 1. Reducers are pure functions.
// 2. Never change state or action.
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':;
            return { count: state.count + action.incrementBy };

        case 'DECREMENT':
            return { count: state.count - action.decrementBy };

        case 'SET':
            return { count: action.set };

        case 'RESET':
            return { count: 0 };

        default:
            return state;
    }
}




const store = createStore(countReducer);
store.subscribe(() => {
    console.log(store.getState());
});

// Actions - then an object tat gets send to the store.

// Increment the count
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount({}));

store.dispatch(resetCount({}));

store.dispatch(decrementCount({}));
store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ set: 101 }));

