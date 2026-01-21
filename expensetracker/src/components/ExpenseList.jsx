import React from "react";
import style from "./Expenselist.module.css";

function ExpenseList({
  expenses,
  setExpenses,
  setEditExpense,
  isEditing,
  setIsEditing,
}) {
  function editExpense(id) {
    setIsEditing(true);
    let filter = expenses.filter((ele) => ele.id.toString() === id.toString());
    console.log(filter);
    setEditExpense(filter);
  }
  async function deleteExpense(id) {
    let filteredNewExpense = expenses.filter(
      (ele) => ele.id.toString() !== id.toString(),
    );

    let deleteExpenseResponse = await fetch(
      `http://localhost:3000/deleteexpense/${id}`,
      {
        method: "DELETE",
      },
    );
    console.log(deleteExpenseResponse);

    setExpenses(filteredNewExpense);
  }
  return (
    <div className={style.listmain}>
      <ul>
        {expenses.map((element) => {
          return (
            <li key={element.id}>
              {element.expenseTitle} -- Rs.{element.expenseAmount}{" "}
              <button onClick={() => editExpense(element.id)}>
                Edit Expense
              </button>
              <button onClick={() => deleteExpense(element.id)}>
                Delete Expense
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ExpenseList;
