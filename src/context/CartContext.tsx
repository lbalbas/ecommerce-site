import type Product from "../utils/globalTypes";
import { useContext, createContext, ReactNode, useState } from "react";
import { arrayBuffer } from "node:stream/consumers";

type cartContext = {
	itemsOnCart: Product[];
	addItemToCart: (arg0: Product) => void;
	checkOut: () => void;
};

type Props = {
	children: ReactNode;
};

const cartContextDefault: cartContext = {
	itemsOnCart: [],
	addItemToCart: () => {},
	checkOut: () => {},
};

const CartContext = createContext<cartContext>(cartContextDefault);

export function useCart() {
	return useContext(CartContext);
}

export function CartProvider({ children }: Props) {
	const [itemsOnCart, setItemsOnCart] = useState<Product[]>([]);

	const addItemToCart = (item: Product) => {
		const newCart: Product[] = itemsOnCart;
		newCart.push(item);
		setItemsOnCart(newCart);
	};

	const checkOut = () => {
		setItemsOnCart([]);
	};

	const value = {
		itemsOnCart,
		addItemToCart,
		checkOut,
	};

	return (
		<>
			<CartContext.Provider value={value}>
				{children}
			</CartContext.Provider>
		</>
	);
}
