import React from 'react';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../../actions/expenses';
import ExpenseForm from '../expense/Form';
import ConfirmationModal from '../ConfirmationModal';

export class EditExpensePage extends React.Component {
    state = { 
        modalIsOpen: false,
    };

    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };
    onRemoveExpense = () => {
        this.props.startRemoveExpense(this.props.expense.id);
        this.props.history.push('/');
    };

    openModal = () => {
        this.setState({modalIsOpen: true});
    }
    
    
    closeModal = () => {
        this.setState({modalIsOpen: false});
    }

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>

                <div className="content-container">
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />

                    <button
                        className="button button--secondary" 
                        onClick={this.openModal}
                    > Remove </button>

                    <ConfirmationModal 
                        modalIsOpen={this.state.modalIsOpen}
                        handleCloseModal={this.closeModal}
                        handleOnRemoveSelectedOption={this.onRemoveExpense}
                    />
                </div>                  
            </div>

        );
    } 
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);