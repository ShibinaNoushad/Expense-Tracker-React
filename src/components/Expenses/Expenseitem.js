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

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <h4>{props.location}</h4>
        <ExpenseAmountTitle amount={props.amount} />
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button>Delete Expense</button>
    </Card>
  );
};

export default ExpenseItem;
