import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

const Counter = (props) => {
  const { value, id, onIncrement, onDecrement } = props;

  const formatValue = () => {
    return value === 0 ? "empty" : value;
  };

  const increment = (value, id) => {
    onIncrement(value, id);
    console.log(value, id);
  };

  const decrement = () => {
    onDecrement(value, id);
    console.log(value, id);
  };

  const classes = `badge m-2 ${value === 0 ? "bg-warning" : "bg-primary"}`;
  return (
    <div>
      <span>{props.name}</span>
      <span className={classes}>{formatValue()}</span>
      <button
        className="btn btn-primary btn-sm m-2"
        // onClick={increment(value, id)}
      >
        +
      </button>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => onDecrement(value, id)}
      >
        -
      </button>
      <button
        className="btn btn-danger m2"
        onClick={() => props.onDelete(props.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
