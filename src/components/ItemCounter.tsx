import { useState } from "react";

const Counter = (props: {
  stock: number;
  itemCount: number;
  setCounter: (a: number) => void;
}) => {
  const { stock, itemCount, setCounter } = props;
  return (
    <div className="flex flex-col items-center">
      <h3>Quantity</h3>
      <div className="flex gap-2 text-lg">
        <button
          onClick={() => {
            setCounter(itemCount - 1);
          }}
          disabled={itemCount - 1 <= 0}
        >
          -
        </button>
        {itemCount}
        <button
          onClick={() => {
            setCounter(itemCount + 1);
          }}
          disabled={itemCount + 1 > stock}
        >
          +
        </button>
      </div>
      <p className={(stock < 5 ? "text-jasper" : "") + " text-xs"}>
        {stock} left in stock
      </p>
    </div>
  );
};

export default Counter;
