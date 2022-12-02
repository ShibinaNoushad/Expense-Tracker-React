import react from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseAmountTitle from "./ExpenseAmount_title";
import Card from "../UI/card";

const ExpenseItem=(props) =>{
  const clickHandler=()=>{console.log('clicked')}

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <h4>{props.location}</h4>
        <ExpenseAmountTitle amount={props.amount} />
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button>Delete Expense</button>

    </Card>
  );
}

export default ExpenseItem;
