import React, { createContext, useContext, useEffect, useReducer } from "react";
import Reducers from "./Reducers";

const AppContext = createContext();

const API = "https://hn.algolia.com/api/v1/search?";

const AppProvider = ({ children }) => {
  const initialState = {
    isLoading: true,
    query: "html",
    nbPages: 0,
    page: 0,
    hits: [],
  };

  const fetchApiData = async (url) => {
    dispatch({ type: "SET_loading" });
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log("fetched", data.hits);
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.hits,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removePost = (post_ID) => {
    dispatch({ type: "REMOVE_POST", payload: post_ID });
    console.log("remove", post_ID);
  };

  useEffect(() => {
    fetchApiData(`${API}query=${state.query}`);
  }, []);

  const [state, dispatch] = useReducer(Reducers, initialState);

  return (
    <div>
      <AppContext.Provider value={{ ...state, removePost }}>
        {children}
      </AppContext.Provider>
    </div>
  );
};

const useGLobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGLobalContext };
