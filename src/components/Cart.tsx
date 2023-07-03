import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { itemsOnCart } = useCart();
  return (
    <Link href="/cart" className="flex items-center justify-around">
      <div className="rounded-full bg-white p-1 cursor-pointer shadow-md relative">
        <ShoppingCartIcon className="h-8 w-8" />
        {itemsOnCart.length > 0 ? (
          <div className="absolute text-ivory font-bold bg-jasper px-1 -right-1 -bottom-1 text-xs rounded-full">
            {itemsOnCart.reduce((accumulator, item) => {
              return accumulator + item.quantity;
            }, 0)}
          </div>
        ) : (
          ""
        )}
      </div>
    </Link>
  );
};

export default Cart;
