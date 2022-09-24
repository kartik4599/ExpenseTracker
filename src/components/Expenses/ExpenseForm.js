import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm=()=>{
    // let title,amount,date;
    const[newtitle,changeTitle] =useState();
    const[newamount,changeamount] =useState();
    const[newdate,changedate] =useState();

    const titlehandler=(e)=>{
        let title = e.target.value;
        changeTitle(title);
    }

    const amountHandler=(e)=>{
        let amount = e.target.value;
        changeamount(amount);
    }

    const dateHandler=(e)=>{
        let date = e.target.value;
        changedate(date);
    }

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Add Expense Title </label>
                    <input type='text' onChange={titlehandler}/><br/>            
                </div>
                <div className="new-expense__control">
                    <label>Add Expense Amount </label>
                    <input type='number' min="1" step="1" onChange={amountHandler}/><br/>            
                </div>
                <div className="new-expense__control">
                    <label>Add Expense Date </label>
                    <input type='date' min="2010-01-01" onChange={dateHandler}/><br/>            
                </div>
                <div className="new-expense__control">
                    <button type="submit" >Add Expense</button>
                </div>
            </div>
            <div className="new-expense__control">
                Title = {newtitle}, Amount={newamount}, Date={newdate}  
            </div>
        </form>
    );
}

export default ExpenseForm;