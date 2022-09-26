import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem"; 
const ExpenseList = (props)=>{
    //If There are no items
    if(props.items.length<1){
        return <h2 className="expenses-list__fallback " >Found No Item</h2>
    }
    //If there is only one item
    if(props.items.length===1){
      return props.items.map((element)=>{
          return (
            <ul className="expenses-list">
            <ExpenseItem
                key={element.id}
                title={element.title}
                amount={element.amount}
                date={element.date}
            />
            <h3 className="expenses-list__fallback ">Only single Expense here. Please add more... </h3>
            </ul>);
       }); 
    }
    //it There are more than one item
    return props.items.map((element)=>{
      return( 
      <ul className="expenses-list">
        <ExpenseItem
            key={1}
            title={element.title}
            amount={element.amount}
            date={element.date}
        />
      </ul>);
    }); 
  
}

export default ExpenseList;