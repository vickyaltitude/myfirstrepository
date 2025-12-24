function ReactHooks() {
  let hooks = [
    "useState",
    "useEffect",
    "useRef",
    "useMemo",
    "useCallback",
    "useNavigate",
    "useContext",
    "useReducer",
  ];

  return (
    <div>
      <h1>React hooks</h1>
      <h3>
        React hooks are special functions provided by React to make developers
        job easier
      </h3>
      <ul>
        {hooks.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default ReactHooks;
