import "./ManualCounter.css";
import React, { useState } from "react";
import RandomName from "../RandomName/RandomName";

const ManualCounter = ({ maxNumber }) => {
  const [manualCounter, setManualCounter] = useState(0);

  const handlePlus = () => {
    if (manualCounter < 10) {
      setManualCounter(manualCounter + 1);
    }
  };

  const handleMinus = () => {
    if (manualCounter > 0) {
      setManualCounter(manualCounter - 1);
    }
  };

  return (
    <div>
      <div className="button-container">
        <button onClick={handleMinus}>-</button>
        <div>{manualCounter}</div>
        <button onClick={handlePlus}>+</button>
      </div>
      {manualCounter == 10 && (
        <div>
          <div className="text-limit-reached">
            I only know to count until 10, sorry!
          </div>
          <RandomName />
        </div>
      )}
    </div>
  );
};

export default ManualCounter;
