import ExpenseForm from "../Expenses/ExpenseForm";
import "./NewExpense.css";

const NewExpense=(props)=>{

    const importData=(data)=>{
        data={
            ...data,
            id:Math.random().toString()
        }
        props.onImportData(data);
    }

    return(<div className="new-expense">
        <ExpenseForm onimportData={importData} />
    </div>);
}

export default NewExpense;