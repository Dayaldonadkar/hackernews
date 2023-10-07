import React from "react";
import { useGLobalContext } from "./context";

const Stories = () => {
  const { hits } = useGLobalContext();

  return (
    <div>
      <h1>dayal</h1>
      {hits.map((currNews) => {
        return <h2>{currNews.title}</h2>;
      })}
    </div>
  );
};

export default Stories;
