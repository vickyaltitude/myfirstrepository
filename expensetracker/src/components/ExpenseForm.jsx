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
  function handleSubmit(e) {
    e.preventDefault();
    console.log("handlesubmit executed", title, amount);

    if (editExpense && editExpense.length > 0) {
      let updatedExpenses = expenses.map((ele) =>
        ele.id === editExpense[0].id
          ? { ...ele, expenseTitle: title, expenseAmount: amount }
          : ele
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
