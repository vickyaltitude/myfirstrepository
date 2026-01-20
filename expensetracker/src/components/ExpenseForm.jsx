import React, { useEffect, useState } from "react";
import style from "./Expenseform.module.css";

function ExpenseForm({
  expenses,
  setExpenses,
  editExpense,
  isEditing,
  setIsEditing,
}) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  async function handleSubmit(e) {
    e.preventDefault();
    console.log("handlesubmit executed", title, amount, editExpense);

    if (editExpense && editExpense.length > 0) {
      console.log("Editing expense with id:", editExpense, expenses);
      let updatedExpenses = expenses.map((ele) =>
        ele.id === editExpense[0].id
          ? { ...ele, expenseTitle: title, expenseAmount: amount }
          : ele,
      );

      let editExpense = await fetch(
        `http://localhost:3000/editexpense/${editExpense[0].id}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            expenseTitle: title,
            expenseAmount: amount,
          }),
        },
      );
      setExpenses(updatedExpenses);
      setTitle("");
      setAmount(0);
      return;
    }

    let newExpenses = [
      ...expenses,
      { id: expenses.length + 1, expenseTitle: title, expenseAmount: amount },
    ];

    let addNewExpense = await fetch("http://localhost:3000/addexpense", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        id: expenses.length + 1,
        expenseTitle: title,
        expenseAmount: amount,
      }),
    });
    console.log(addNewExpense);
    setExpenses(newExpenses);
    setTitle("");
    setAmount(0);
  }

  useEffect(() => {
    console.log("useEffect executed", isEditing, editExpense);
    if (editExpense && editExpense.length > 0) {
      setTitle(editExpense[0].expenseTitle);
      setAmount(editExpense[0].expenseAmount);
    }
  }, [isEditing, editExpense]);

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <input
        type="text"
        placeholder="Expense title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">
        {isEditing ? "Update expense" : " Add Expense"}
      </button>
    </form>
  );
}

export default ExpenseForm;
