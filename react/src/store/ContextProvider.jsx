import { createContext, useState } from "react";

export let context = createContext();

export default function ContextProvider({ children }) {
  let [count, setCount] = useState(0);
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let [todos, setTodos] = useState([
    { id: 1, todo: "I will code today", status: "pending" },
  ]);

  return (
    <context.Provider
      value={{ count, isLoggedIn, todos, setCount, setIsLoggedIn, setTodos }}
    >
      {children}
    </context.Provider>
  );
}
