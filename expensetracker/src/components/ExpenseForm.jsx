import React, { useState } from "react";

function ExpenseForm({ expenses, setExpenses, editExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  function handleSubmit(e) {
    e.preventDefault();
    console.log("handlesubmit executed", title, amount);
    let newExpenses = [
      ...expenses,
      { id: expenses.length + 1, expenseTitle: title, expenseAmount: amount },
    ];
    setExpenses(newExpenses);
    setTitle("");
    setAmount(0);
  }
  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
