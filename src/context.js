import React, { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  return (
    <div>
      <AppContext.Provider value={"da"}>{children}</AppContext.Provider>
    </div>
  );
};

export { AppContext, AppProvider };
