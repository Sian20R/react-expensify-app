import React from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../../actions/expenses';
import ExpenseForm from '../expense/Form';

export class NewExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.newExpense(expense);
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <h1>New Expense</h1>
                <ExpenseForm 
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    } 
};

const mapDispatchToProps = (dispatch) => ({
    newExpense: (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(NewExpensePage);