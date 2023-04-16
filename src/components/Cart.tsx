import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useCart } from "../context/CartContext";

const Cart = () => {
	const { itemsOnCart } = useCart();
	const cartTotal = itemsOnCart.reduce(
		(accumulator, item) => accumulator + item.price,
		0
	);

	return (
		<Link href="/cart" className="flex items-center w-24 justify-around">
			<div className="min-w-fit min-h-fit rounded-full bg-white p-1 cursor-pointer shadow-md ">
				<ShoppingCartIcon className="h-8 w-8" />
			</div>
			<span className="hidden px-1 bg-red-100 text-center min-h-fit min-w-min rounded-xl text-xs">
				${cartTotal}
			</span>
		</Link>
	);
};

export default Cart;
