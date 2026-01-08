import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import style from "./Index.module.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [editExpense, setEditExpense] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className={style.main}>
      <h2>Expense Tracker</h2>
      <ExpenseForm
        setExpenses={setExpenses}
        expenses={expenses}
        editExpense={editExpense}
      />
      <ExpenseList
        expenses={expenses}
        setExpenses={setExpenses}
        setEditExpense={setEditExpense}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />
    </div>
  );
}

export default App;
