import React from "react";
import "./styles/SearchResults.css";

export const SearchResults = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <div key={id}>{result.name}</div>;
      })}
    </div>
  );
};
