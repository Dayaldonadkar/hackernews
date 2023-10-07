import React, { useContext } from "react";
import Search from "./Search";
import Pagination from "./Pagination";
import Stories from "./Stories";

const App = () => {
  return (
    <div>
      <h2>the news app name is</h2>
      <Search />
      <Pagination />
      <Stories />d{/* <Reducers /> */}
    </div>
  );
};

export default App;
