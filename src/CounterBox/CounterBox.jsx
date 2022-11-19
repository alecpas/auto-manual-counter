import "./CounterBox.css";
import React, { useState } from "react";
import { useEffect } from "react";
import ManualCounter from "./ManualCounter/ManualCounter";

const CounterBox = ({ minRange }) => {
  const [counter, setCounter] = useState(minRange);

  useEffect(() => {
    if (counter < 61) {
      setTimeout(() => setCounter(counter + 1), 600);
    } else {
      setCounter(0);
    }
  }, [counter]);

  return (
    <div className="counter-box">
      <div>Let's count!</div>
      <div className="auto-counting">{counter}</div>
      <ManualCounter maxnumber={10} />
    </div>
  );
};

export default CounterBox;
