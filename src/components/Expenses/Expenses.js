import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';

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
      <ExpenseList items={FilterExpenses}/>
    </Card>
  );
}

export default Expenses;