import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseAmountTitle from "./ExpenseAmount_title";
import Card from "../UI/card";
import { useState } from "react";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };

  const [amount, setAmount] = useState(props.amount);
  const changeAmountClickHandler = () => {
    setAmount("100$");
    console.log(amount);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <h4>{props.location}</h4>
        <ExpenseAmountTitle amount={amount} />
      </div>
      <button onClick={clickHandler}>Change Title</button>
      {/*<button>Delete Expense</button>
      <button onClick={changeAmountClickHandler}>Change amount</button>*/}
    </Card>
  );
};

export default ExpenseItem;
