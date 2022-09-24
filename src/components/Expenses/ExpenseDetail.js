import './ExpenseItem.css';

const ExpenseDetail = (props)=>{
    return(
        <div className='expense-item__description'>
        <h2>{props.detail.title}</h2>
        <div className='expense-item__price'>${props.detail.amount}</div>
      </div>
    );
}

export default ExpenseDetail;