import "./CounterBox.css";
import React, { useState } from "react";
import { useEffect } from "react";

const CounterBox = ({ minRange }) => {
  const [counter, setCounter] = useState(minRange);

  useEffect(() => {
    console.log("numara");
    if (counter < 60) {
      setTimeout(() => setCounter(counter + 1), 1000);
    }
  }, [counter]);

  return (
    <div className="counter-box">
      <div>Let's count!</div>
      <div className="auto-counting">{counter}</div>
    </div>
  );
};

export default CounterBox;
