import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import ExpenseDetail from './ExpenseDetail';

const ExpenseItem = (props) => {

  function deleteCard(e){
    e.target.parentElement.parentElement.removeChild(e.target.parentElement);
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <ExpenseDetail detail={props}></ExpenseDetail>
    </Card>
  );
}

export default ExpenseItem;