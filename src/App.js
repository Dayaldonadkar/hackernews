import React, { useContext } from "react";
import Search from "./Search";
import Pagination from "./Pagination";
import Stories from "./Stories";
import { useGLobalContext } from "./context";
import Reducers from "./Reducers";

const App = () => {
  const name = useGLobalContext();
  console.log(name);
  return (
    <div>
      <h2>the news app name is {name}</h2>
      <Search />
      <Pagination />
      <Stories />
      {/* <Reducers /> */}
    </div>
  );
};

export default App;
