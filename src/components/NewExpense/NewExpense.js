import { useState } from "react";
import ExpenseForm from "../Expenses/ExpenseForm";
import "./NewExpense.css";

const NewExpense=(props)=>{

    const [addExpense,changeAddExpense] = useState(true);

    const addForm=()=>{
        changeAddExpense(!addExpense);
    }


    const importData=(data)=>{
        data={
            ...data,
            id:Math.random().toString()
        }
        props.onImportData(data);
    }

    

    if(addExpense){
        return(<div className="new-expense">
            <button onClick={addForm}>Add Expense</button>
            <button onClick={()=>{props.clear()}}>Clear All Data</button>
        </div>)
    }else{
        return(<div className="new-expense">
        <ExpenseForm onimportData={importData} reset={addForm} />
    </div>);
    }

    
    

}

export default NewExpense;