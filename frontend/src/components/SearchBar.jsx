import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "../components/styles/SearchBar.css";

const SearchBar = () => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {};

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  return (
    <div className="input-wrapper">
      <input
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></input>
      <Button variant="outline-danger">Search</Button>
    </div>
  );
};

export default SearchBar;
