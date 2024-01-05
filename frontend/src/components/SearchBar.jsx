import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "../components/styles/SearchBar.css";
import Axios from "axios";

const SearchBar = () => {
  const [input, setInput] = useState("");

  useEffect(() => {}, []);

  const fetchData = (value) => {
    Axios.get("/product")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    //  fetch("localhost:3000/product")
    //    .then((Response) => {
    //      Response.json();
    //    })
    //    .then((json) => {
    //      console.log(json);
    //    });
  };

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
          handleChange(e.target.value);
        }}
      ></input>
      <Button variant="outline-danger">Search</Button>
    </div>
  );
};

export default SearchBar;
