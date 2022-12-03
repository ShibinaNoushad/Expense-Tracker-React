import React from "react";

import "./ExpenseForm.css";

{
  /*import React from "react";
function ExpenseForm() {

  function formAction(e) {
    e.preventDefault();
    const title = document.getElementById("expense_title").value;
    const amount = document.getElementById("amount").value;
    const date = document.getElementById("date").value;
    console.log(title, amount, date);
  }

  return (
    <div>
      <form onSubmit={formAction}>
        <label>Expense Title</label>
        <input type="text" id="expense_title" name="expense_title" />
        <label >Expense Amount</label>
        <input type="text" id="amount" name="amount" />
        <label>Date</label>
        <input type="date" id="date" name="date" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
export default ExpenseForm;*/
}

const ExpenseForm = () => {
  const titleChangeHandler = (event) => {
    console.log(event.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
