import React from 'react';
import ExpenseList from './../expense/List';
import ExpenseListFilters from './../expense/ListFilters';
import ExepensesSummary from './Summary';

const ExpenseDashboardPage = () => (
    <div>
        <ExepensesSummary />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);
export default ExpenseDashboardPage;