import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {
  const [Year,changeYear]=useState('2020');
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

    const filterChangeHandler = selectYear=> {
      console.log(selectYear);
      changeYear(selectYear);
    }

  return (
    <Card className="expenses">
      <ExpenseFilter selected={Year} onChangeFilter={filterChangeHandler}/>
      {list}
    </Card>
  );
}

export default Expenses;