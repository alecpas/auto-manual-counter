import "./RandomName.css";
import React, { useState } from "react";

const RandomName = ({ placeholder }) => {
  const nameArray = [
    "Ana Ionescu",
    "Maria Popescu",
    "Iulia Nita",
    "Mihai Marin",
  ];

  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = nameArray.filter((value) => {
      return value.toLowerCase().includes(searchWord.toLowerCase());
    });
    setFilteredData(newFilter);
  };

  return (
    <div>
      <input
        placeholder={placeholder}
        type="text"
        onChange={handleFilter}
      ></input>
      {filteredData.length != 0 && (
        <ul>
          {filteredData.map((name) => (
            <li>{name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RandomName;
