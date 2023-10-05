import React, { createContext, useContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
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
