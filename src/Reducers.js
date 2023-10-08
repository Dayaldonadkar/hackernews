import React, { useReducer } from "react";

const Reducers = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "SET_loading":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_STORIES":
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
      };

    case "REMOVE_POST":
      return {
        ...state,
        hits: state.hits.filter(
          (curElem) => curElem.objectID !== action.payload
        ),
      };
  }
  return state;
};

export default Reducers;

// const initialstate = 0;

// const reducer = (state, action) => {
//   console.log(state, action);
//   if (action.type === "decremwnt") {
//     return state + 1;
//   }

//   if (action.type === "decrement") {
//     return state > 0 ? state - 1 : state;
//   }
//   return state;
// };

// const Reducers = () => {
//   const [state, dispatch] = useReducer(reducer, initialstate);
//   return (
//     <div>
//       <h1>{state}</h1>
//       <button onClick={() => dispatch({ type: "decremwnt" })}>inc</button>

//       <button onClick={() => dispatch({ type: "decrement" })}>Dec</button>
//     </div>
//   );
// };
