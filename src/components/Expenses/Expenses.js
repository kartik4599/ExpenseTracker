import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
    const list=[]
    props.items.forEach(element => {
        list.push(
            <ExpenseItem
        title={element.title}
        amount={element.amount}
        date={element.date}
      />
        )
    });
  return (
    <Card className="expenses">
      {list}
    </Card>
  );
}

export default Expenses;