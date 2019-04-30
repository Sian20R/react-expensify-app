import React from 'react';
import { connect } from 'react-redux';
import ExpenseItem from './../expense/ListItem';
import selectExpenses from './../../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
    {
        props.expenses.length === 0 ? (
         <p>No expenses</p>
       ) : 
       (
         <h1>Expenses List</h1>,
         props.expenses.map((expense) => {
           return <ExpenseItem key={expense.id} {...expense}/>
         })
       )
    }
    </div>
);

const mapStateToProps = (state)  => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
};

export default connect(mapStateToProps)(ExpenseList);