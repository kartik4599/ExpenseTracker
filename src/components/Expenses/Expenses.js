import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

const Expenses = (props) => {
  const [Year,changeYear]=useState('2021');

  const filterChangeHandler = selectYear=> {
    changeYear(selectYear);
  }

  const FilterExpenses = props.items.filter((element=>{
    return element.date.getFullYear().toString()===Year;
  }));
  return (
    <Card className="expenses">
      <ExpenseFilter selected={Year} onChangeFilter={filterChangeHandler}/>
      <ExpenseChart expenses={FilterExpenses}/>
      <ExpenseList items={FilterExpenses} />
    </Card>
  );
}

export default Expenses;