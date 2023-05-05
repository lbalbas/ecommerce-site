import type Product from "../utils/globalTypes";
import type { Props } from "../utils/globalTypes";
import { useContext, createContext, ReactNode, useState, useMemo, useEffect } from "react";
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

const CART_STORAGE_KEY = "cart";

export function CartProvider({ children }: Props) {
const [itemsOnCart, setItemsOnCart] = useState<Product[]>([]);
const [hasMounted, setHasMounted] = useState(false);

const updateLocalStorage = () => {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(itemsOnCart));
};

useEffect(() => {
  if (!hasMounted) {
    setHasMounted(true);
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);
    setItemsOnCart(storedCart ? JSON.parse(storedCart) : []);
  } else {
    updateLocalStorage();
  }
}, [itemsOnCart, hasMounted]);



  const addItemToCart = (item: Product) => {
    setItemsOnCart(prevItemsOnCart => [...prevItemsOnCart, item]);
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

  const value = useMemo(
    () => ({
      itemsOnCart,
      addItemToCart,
      checkOut,
    }),
    [itemsOnCart, addItemToCart, checkOut]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}