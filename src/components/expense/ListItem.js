import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral'; 

export const ExpenseItem = ({id, description, amount, createdAt}) => (
      <Link className="list-item" to={`/edit/${id}`}>
        <div>
          <h3 className="list-item__title">{description}</h3>
          <span className="list-item__sub-title">{moment(createdAt).format('Do MMMM YYYY')}</span>
        </div>
        <h3 className="list-item__content">{numeral(amount).format('$0,0.00')}</h3>
      </Link>    
);

const mapStateToProps = (state) => {
  return {
      expenses: state.expenses
  };
};

export default connect(mapStateToProps)(ExpenseItem);