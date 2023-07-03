import { useState } from "react";

const Counter = (props: {
  stock: number;
  itemCount: number;
  increase: () => void;
  decrease: () => void;
  itemInCartQuantity: number;
}) => {
  const { stock, itemCount, increase, decrease, itemInCartQuantity } = props;
  return (
    <div className="flex flex-col items-center">
      <h3>Qty.</h3>
      <div className="flex gap-2 text-lg">
        <button onClick={decrease} disabled={itemCount - 1 <= 0}>
          -
        </button>
        {itemCount}
        <button onClick={increase} disabled={itemCount + itemInCartQuantity >= stock}>
          +
        </button>
      </div>
      <p className={(stock < 5 ? "text-jasper" : "") + " text-center text-xs"}>
        {stock} left in stock
      </p>
    </div>
  );
};

export default Counter;
