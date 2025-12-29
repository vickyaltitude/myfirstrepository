import React, { useContext, useReducer, useRef, useState } from "react";
import { reducerFunction } from "./reducerFile";
import { context } from "../../store/ContextProvider";

function UseReducer() {
  const [state, dispatch] = useReducer(reducerFunction, {
    count: 0,
    isLoggedIn: false,
    todos: [{ id: 1, todo: "I will code today", status: "pending" }],
  });
  /*  let [count, setCount] = useState(0);
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let [todos, setTodos] = useState(); */
  let ref = useRef();
  let data = useContext(context);
  console.log(data);

  function handleLogin() {
    dispatch({ type: "login" });
  }

  function increaseCount() {
    dispatch({ type: "Increase count" });
  }

  function handleAddTodo(e) {
    console.log(e.target);
    let newTodo = {
      id: state.todos.length + 1,
      todo: ref.current.value,
      status: "pending",
    };
    let updateTodos = [...state.todos, newTodo];
    dispatch({ type: "settodos", payload: updateTodos });
  }

  return (
    <div>
      <h1>Use reducer</h1>
      <ol>
        {data.todos.map((element, index) => {
          return <li key={index}>{element.todo}</li>;
        })}
      </ol>
      <input type="text" ref={ref} />
      <button onClick={handleAddTodo}>Add todo</button>
      <h3>count = {data.count}</h3>
      <button onClick={() => data.setCount(data.count + 1)}>Increase 1</button>
      <h3>{data.isLoggedIn ? "welcome user 1" : "please login"}</h3>
      <button onClick={() => data.setIsLoggedIn(true)}>Login</button>
    </div>
  );
}

export default UseReducer;
