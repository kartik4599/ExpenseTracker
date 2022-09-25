import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {
  const [Year,changeYear]=useState('2019');

  const filterChangeHandler = selectYear=> {
    changeYear(selectYear);
  }

  const FilterExpenses = props.items.filter((element=>{
    return element.date.getFullYear().toString()===Year;
  }));

  return (
    <Card className="expenses">
      <ExpenseFilter selected={Year} onChangeFilter={filterChangeHandler}/>
      {
      FilterExpenses.map((element)=>{
        return(
          <ExpenseItem
            key={element.id}
            title={element.title}
            amount={element.amount}
            date={element.date}
          />
         );
       })}
    </Card>
  );
}

export default Expenses;