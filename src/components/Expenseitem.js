import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2021, 4, 25);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 2500;
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>

        <div className="expense-item__price">{expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
/**Because the code we are writing is not real html code. class is used to assign class name to JSX. */
