import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseAmountTitle from "./ExpenseAmount_title";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <h4>{props.location}</h4>
      <ExpenseAmountTitle amount={props.amount} />
      </div>

    </div>
  );
}

export default ExpenseItem;
/**Because the code we are writing is not real html code. class is used to assign class name to JSX. */
