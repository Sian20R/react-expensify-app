import React from 'react';
import { shallow } from 'enzyme';
import { NewExpensePage } from '../../../components/expense/New';
import expenses from '../../fixtures/expenses';

let newExpense, history, wrapper;

beforeEach(() => {
    newExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<NewExpensePage newExpense={newExpense} history={history} />)
});

test('should render NewExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(newExpense).toHaveBeenLastCalledWith(expenses[1]);
});