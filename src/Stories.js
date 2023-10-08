import React from "react";
import { useGLobalContext } from "./context";

const Stories = () => {
  const { hits, isLoading, removePost } = useGLobalContext();
  if (isLoading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }

  return (
    <div>
      <h1>dayal</h1>
      {hits.map((currNews) => {
        const { title, author, num_comments, url, objectID } = currNews;
        // console.log(title);
        console.log(currNews.objectID);
        return (
          <div key={objectID}>
            <h2>{title}</h2>
            <h1>{currNews.objectID}</h1>
            <button
              className="text-black bg-red-500"
              onClick={() => removePost(objectID)}
            >
              remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Stories;
