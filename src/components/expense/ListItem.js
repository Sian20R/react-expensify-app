import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral'; 

export const ExpenseItem = ({id, description, amount, createdAt}) => (
    <div>
      <h3><Link to={`/edit/${id}`}>{description}</Link></h3>
      <p>
        {numeral(amount).format('$0,0.00')} 
          - 
        {moment(createdAt).format('Do MMMM YYYY')}
      </p>    
    </div>
);

const mapStateToProps = (state) => {
  return {
      expenses: state.expenses
  };
};

export default connect(mapStateToProps)(ExpenseItem);