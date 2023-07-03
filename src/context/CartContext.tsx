import type Product from "../utils/globalTypes";
import type { Props } from "../utils/globalTypes";
import {
  useContext,
  createContext,
  ReactNode,
  useState,
  useMemo,
  useEffect,
} from "react";
import { arrayBuffer } from "node:stream/consumers";
import { toast } from "react-toastify";

type cartContext = {
  itemsOnCart: Product[];
  addItemToCart: (arg0: Product) => void;
  checkOut: () => void;
  incrementItemQuantity: (arg0: string) => void;
  decrementItemQuantity: (arg0: string) => void;
  deleteItemFromCart: (arg0: string) => void;
};

const cartContextDefault: cartContext = {
  itemsOnCart: [],
  addItemToCart: () => {},
  checkOut: () => {},
  incrementItemQuantity: () => {},
  decrementItemQuantity: () => {},
  deleteItemFromCart: () => {},
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

  const addItemToCart = (product: Product) => {
    setItemsOnCart((prevItemsOnCart) => {
      const existingProductIndex = prevItemsOnCart.findIndex(
        (item) => item.id === product.id
      );

      if (existingProductIndex >= 0) {
        // Product exists in cart already, update the quantity
        const updatedItems = [...prevItemsOnCart];
        const newQuantity =
          updatedItems[existingProductIndex].quantity + product.quantity;

        // Check if the new quantity surpasses the stock
        if (newQuantity > product.stock) {
          toast.error("You can't add more items than there are in stock.", {
            /* toast options */
          });
          return prevItemsOnCart; // Return the current cart without changes
        }

        updatedItems[existingProductIndex].quantity = newQuantity;
        toast.success("Item(s) Added", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return updatedItems;
      } else {
        // Product is not in the cart, add it
        toast.success("Item(s) Added", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return [...prevItemsOnCart, product];
      }
    });
  };

  const incrementItemQuantity = (id: string) => {
    const updatedItemsOnCart = [...itemsOnCart];
    const item = updatedItemsOnCart.find((product) => product.id === id);
    if (item) {
      item.quantity += 1;
      setItemsOnCart(updatedItemsOnCart);
    }
  };

  const decrementItemQuantity = (id: string) => {
    const updatedItemsOnCart = [...itemsOnCart];
    const item = updatedItemsOnCart.find((product) => product.id === id);
    if (item && item.quantity > 1) {
      item.quantity -= 1;
      setItemsOnCart(updatedItemsOnCart);
    }
  };

  const deleteItemFromCart = (id: string) => {
    const updatedItemsOnCart = itemsOnCart.filter(
      (product) => product.id !== id
    );
    setItemsOnCart(updatedItemsOnCart);
  };

  const checkOut = () => {
    setItemsOnCart([]);
  };

  const value = useMemo(
    () => ({
      itemsOnCart,
      addItemToCart,
      checkOut,
      incrementItemQuantity,
      decrementItemQuantity,
      deleteItemFromCart, // Add this line
    }),
    [
      itemsOnCart,
      addItemToCart,
      checkOut,
      incrementItemQuantity,
      decrementItemQuantity,
      deleteItemFromCart,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
