import React, { createContext, useContext, useEffect, useReducer } from "react";
import Reducers from "./Reducers";

const AppContext = createContext();

const API = "https://hn.algolia.com/api/v1/search?query";

const AppProvider = ({ children }) => {
  const initialState = {
    isLoading: true,
    query: "html",
    nbPages: 0,
    pages: 0,
    hits: [],
  };

  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log("fetched", data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData(API);
  }, []);

  const [state, dispatch] = useReducer(Reducers, initialState);

  return (
    <div>
      <AppContext.Provider value={"da"}>{children}</AppContext.Provider>
    </div>
  );
};

const useGLobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGLobalContext };
