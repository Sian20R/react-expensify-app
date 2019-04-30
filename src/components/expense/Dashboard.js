import React from 'react';
import ExpenseList from './../expense/List';
import ExpenseListFilters from './../expense/ListFilters';

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);
export default ExpenseDashboardPage;