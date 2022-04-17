import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./counter";
import { useState } from "react";

const CounterList = () => {
  const initialState = [
    { id: 1, value: 0, name: "ненужная вещь", price: 200 },
    { id: 2, value: 2, name: "ложка" },
    { id: 3, value: 24, name: "вилка" },
    { id: 4, value: 2, name: "тарелка" },
    { id: 5, value: 1, name: "набор минималиста" },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    setCounters(counters.filter((counter) => id !== counter.id));
  };

  const handleReset = () => {
    setCounters(initialState);
  };

  const onIncrement = (value, id) => {
    setCounters(
      counters.map((counter) => {
        if (counter.id === id) {
          counter.value = value + 1;
        }
      })
    );
  };

  const onDecrement = (value, id) => {
    setCounters(
      counters.map((counter) => {
        if (counter.id === id) {
          counter.value = value - 1;
        }
      })
    );
  };
  return (
    <>
      {counters.map((counter) => console.log("counter", counter))}
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={handleDelete}
          //   onIncrement={onIncrement}
          onDecrement={onDecrement}
          {...counter}
        ></Counter>
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};

export default CounterList;
