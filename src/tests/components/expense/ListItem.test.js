import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseItem } from '../../../components/expense/ListItem'; 
import expenses from '../../fixtures/expenses';

test('should render ExpenseListItem with fixture data', () => {
    const wrapper = shallow(<ExpenseItem {...expenses[1]} />);
    expect(wrapper).toMatchSnapshot();
});
 