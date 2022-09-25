import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {
  const [Year,changeYear]=useState('2020');

    const filterChangeHandler = selectYear=> {
      console.log(selectYear);
      changeYear(selectYear);
    }

  return (
    <Card className="expenses">
      <ExpenseFilter selected={Year} onChangeFilter={filterChangeHandler}/>
      {
      props.items.map((element)=>{
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