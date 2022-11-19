import "./RandomName.css";
import React, { useState } from "react";

const RandomName = () => {
  const nameArray = [
    "Ana Ionescu",
    "Maria Popescu",
    "Iulia Nita",
    "Mihai Marin",
  ];

  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState("");

  const [inputValue, setInputValue] = useState("Search Name");

  return (
    <div>
      <input type="text" value={inputValue}></input>
      <ul>
        {nameArray.map((name) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RandomName;
