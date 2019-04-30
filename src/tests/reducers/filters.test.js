import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter value', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY', sortBy: 'amount' });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type: 'SORT_BY', sortBy: 'date' };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'RENT' });
    expect(state.text).toBe('RENT');
});

test('should set startDate filter', () => {
    const startMonth = moment().startOf('month');
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate: startMonth });
    expect(state.startDate).toBe(startMonth);
});

test('should set endDate filter', () => {
    const endMonth = moment().endOf('month');
    const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate: endMonth });
    expect(state.endDate).toBe(endMonth);
});