import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {

  const oldExpense=[
  ];
  
  for(let i=0;i<localStorage.length;i++){
    const add=JSON.parse(localStorage.getItem(localStorage.key(i)));
    add.date=new Date(add.date);
    console.log(add);
    oldExpense.push(add);
  }

  const [expenses,updateExpenses]=useState(oldExpense)
  

  const importData=(data)=>{
    expenses.unshift(data);
    localStorage.setItem(data.id,JSON.stringify(data));
    updateExpenses([...expenses]);
  }

  const clearData=()=>{
    localStorage.clear();
    updateExpenses();
  }

  return (
    <div>
      <NewExpense onImportData={importData} clear={clearData} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;