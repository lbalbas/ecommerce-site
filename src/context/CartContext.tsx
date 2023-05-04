import type Product from "../utils/globalTypes";
import type { Props } from "../utils/globalTypes";
import { useContext, createContext, ReactNode, useState } from "react";
import { arrayBuffer } from "node:stream/consumers";
import { toast } from "react-toastify";

type cartContext = {
  itemsOnCart: Product[];
  addItemToCart: (arg0: Product) => void;
  checkOut: () => void;
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
    const newCart: Product[] = [...itemsOnCart];
    newCart.push(item);
    setItemsOnCart(newCart);
    toast("Item(s) Added", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
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
      <CartContext.Provider value={value}>{children}</CartContext.Provider>
    </>
  );
}
