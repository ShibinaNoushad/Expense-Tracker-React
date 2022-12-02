import "./ExpenseItem.css";

function ExpenseAmountTitle(props) {
  return (
    <div>
          <div className="expense-item__description">
              <div className="expense-item__price">{props.amount}</div>
          </div>
      </div>
  );
}
export default ExpenseAmountTitle;
