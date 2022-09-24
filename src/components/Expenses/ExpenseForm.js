import "./ExpenseForm.css";

const ExpenseForm=()=>{
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Add Expense Title </label>
                    <input type='text'/><br/>            
                </div>
                <div className="new-expense__control">
                    <label>Add Expense Amount </label>
                    <input type='number' min="1" step="1"/><br/>            
                </div>
                <div className="new-expense__control">
                    <label>Add Expense Date </label>
                    <input type='date' min="2010-01-01"/><br/>            
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;