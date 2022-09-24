import { useState } from 'react';
import './ExpenseItem.css';

const ExpenseDetail = (props)=>{

  const [title,changeTitle]= useState(props.detail.title);
  const [amount,changeAmount]= useState(props.detail.amount);

    return(
        <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
        <button  className='expense-item__title' onClick={()=>changeTitle("Updated")}>Change Title</button>
        <button className='expense-item__title' onClick={()=>changeAmount(100)}>Change Amount</button>
      </div>
    );
}

export default ExpenseDetail;