import react from "react";
import { useState } from "react";

import "./ExpenseForm.css";
import ExpenseForm from "./ExpenseForm";

const AddExpense = (props) => {
  const [AddExpense, AddExpenseUpdate] = useState("Add Expense");
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.getDataFromAddExpense(expenseData);
  };

  const callExpenseForm = (e) => {
    e.preventDefault();
    AddExpenseUpdate( <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>);
  };

  return (
    <div className="new-expense__actions">
      <button type="submit" onClick={callExpenseForm}>{AddExpense}</button>
    </div>
  );
};
export default AddExpense;
