import React from "react";
import { useGLobalContext } from "./context";

const Search = () => {
  const { query, SearchPost } = useGLobalContext();
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault}>
        <div>
          <input
            type="text"
            value={query}
            onChange={(e) => SearchPost(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
