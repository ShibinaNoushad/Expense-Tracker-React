import react from "react";
import "./Expenses.css";
import ExpenseItem from "./Expenseitem";
import Card from "../UI/card";
import ExpensesFilter from "./ExpenseFilter";
import React, { useState } from "react";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.expenses.map((ele, index) => {
        return (
          <ExpenseItem
            title={ele.title}
            amount={ele.amount}
            date={ele.date}
            key={ele.id}
            id={ele.id}
          ></ExpenseItem>
        );
      })}
    </Card>
  );
};

export default Expenses;
