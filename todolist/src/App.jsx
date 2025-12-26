import { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  function handleChange(e) {
    setValue(e.target.value);
  }
  function handleClick() {
    console.log(todos);
    let newTodo = {
      name: value,
      status: "pending",
    };
    let newTodoLists = [...todos, newTodo];
    setTodos(newTodoLists);
    console.log(todos);
    localStorage.setItem("todos", JSON.stringify(newTodoLists));
    setValue("");
  }

  useEffect(() => {
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    console.log(todos);
    setTodos(todos);
  }, []);
  return (
    <div>
      <h1>TODO LIST</h1>
      <div>
        <input
          type="text"
          value={value}
          placeholder="Please enter your todo"
          onChange={handleChange}
        />
        <button onClick={handleClick}>Add todo</button>
      </div>
      <div>
        <h2>List of todo items</h2>
        <ol>
          {todos?.map((item, index) => {
            return (
              <li key={index}>
                {item.name} - status -- {item.status}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
