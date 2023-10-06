import React, { useReducer } from "react";

const initialstate = 0;

const reducer = (state, action) => {
  console.log(state, action);
  if (action.type === "decremwnt") {
    return state + 1;
  }

  if (action.type === "decrement") {
    return state > 0 ? state - 1 : state;
  }
  return state;
};

const Reducers = () => {
  const [state, dispatch] = useReducer(reducer, initialstate);
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: "decremwnt" })}>inc</button>

      <button onClick={() => dispatch({ type: "decrement" })}>Dec</button>
    </div>
  );
};

export default Reducers;
