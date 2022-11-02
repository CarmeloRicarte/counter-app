import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => setCounter(counter + 1);
  const handleSubstract = () => setCounter(counter - 1);
  const handleReset = () => setCounter(value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>
      <button aria-label="test-increment" onClick={handleAdd}>
        +1
      </button>
      <button aria-label="test-decrement" onClick={handleSubstract}>
        -1
      </button>
      <button aria-label="test-reset" onClick={handleReset}>
        Reset
      </button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

export default CounterApp;
