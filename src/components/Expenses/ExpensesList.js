import React from "react";

import ExpenseItem from "./Expenseitem";

import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;

// import React from "react";
// import ExpenseItem from "./Expenseitem";
// import "./ExpensesList.css";

// const ExpensesList = (props) => {
//   let expenseContent = <p>No Expense Found</p>;
//   if (props.items.length > 0) {
//     expenseContent = props.items.map((ele) => (
//       <ExpenseItem
//         title={ele.title}
//         amount={ele.amount}
//         date={ele.date}
//         key={ele.id}
//       />
//     ));
//   }
// };
// export default ExpensesList;
