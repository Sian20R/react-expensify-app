import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: '5',
        description: 'Just for testing purpose', 
        note: 'New note', 
        amount: 5000, 
        createdAt: 0 
    }
    const action = { type: 'ADD_EXPENSE', expense }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ ...expenses, expense ]);
});

test('should edit an expense', () => {
    const action = { type: 'EDIT_EXPENSE', id: '3', updates: { note: 'Please pay bill' } }
    const state = expensesReducer(expenses, action);
    expect(state[2].note).toBe('Please pay bill');
});

test('should not edit an expense if expense is not found', () => {
    const action = { type: 'EDIT_EXPENSE', id: '-1', updates: { note: 'Please do not edit' } }
    const state = expensesReducer(expenses, action);
    expect(state.length).toEqual(3);
});