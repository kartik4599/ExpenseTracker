import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm=(props)=>{
    // let title,amount,date;
    const[newtitle,changeTitle] =useState();
    const[newamount,changeamount] =useState();
    const[newdate,changedate] =useState();

    const titlehandler=(e)=>{
        changeTitle(e.target.value);
    }

    const amountHandler=(e)=>{
        changeamount(e.target.value);
    }

    const dateHandler=(e)=>{
        changedate(e.target.value);
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        const obj={
            title:newtitle,
            amount:newamount,
            date:new Date(newdate)
        }
        console.log(obj);
        props.onimportData(obj);
        changeTitle('');
        changeamount('');
        changedate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Add Expense Title </label>
                    <input type='text' onChange={titlehandler} value={newtitle}/><br/>            
                </div>
                <div className="new-expense__control">
                    <label>Add Expense Amount </label>
                    <input type='number' min="1" step="1" value={newamount} onChange={amountHandler}/><br/>            
                </div>
                <div className="new-expense__control">
                    <label>Add Expense Date </label>
                    <input type='date' min="2010-01-01" value={newdate} onChange={dateHandler}/><br/>            
                </div>
                <div className="new-expense__control">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
            <div className="new-expense__control">
                Title = {newtitle}, Amount={newamount}, Date={newdate}  
            </div>
        </form>
    );
}

export default ExpenseForm;