import react from "react";
import "./Expenses.css";
import ExpenseItem from "./Expenseitem";
import Card from "../UI/card";
import ExpensesFilter from "./ExpenseFilter";
import React, { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      ></ExpensesFilter>
      {props.expenses.map((ele, index) => {
        return (
          <ExpenseItem
            title={ele.title}
            amount={ele.amount}
            date={ele.date}
            key={ele.id}
          ></ExpenseItem>
        );
      })}
    </Card>
  );
};

export default Expenses;
