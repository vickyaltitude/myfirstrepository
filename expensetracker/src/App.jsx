import { useEffect, useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import style from "./Index.module.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [editExpense, setEditExpense] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    (async function fetchData() {
      let response = await fetch("http://localhost:3000/users");
      let data = await response.json();
      console.log("Fetched data:", data);
    })();
  }, []);
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
