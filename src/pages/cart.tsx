import Head from "next/head";
import { useCart } from "../context/CartContext";
import ProductItem from "@/components/ProductItem";
import Counter from "@/components/ItemCounter";
import { XMarkIcon } from "@heroicons/react/24/solid";

const CartPage = () => {
  const { itemsOnCart } = useCart();

  const x = (a: number) => {
    console.log(a);
  };

  const cartTotal = itemsOnCart.reduce(
    (accumulator, item) => accumulator + item.price,
    0
  );

  return (
    <div className="w-full grid grid-cols-4">
      <Head>
        <title>Your Shopping Cart</title>
      </Head>
      <div className="max-h-[85vh] flex col-span-3 gap-6 flex-col overflow-y-scroll">
        {itemsOnCart.map((item) => {
          return (
            <div className="flex gap-4 items-center">
              <XMarkIcon className="h-8 w-8 cursor-pointer" />
              <ProductItem list={true} key={item.id} data={item} />
              <Counter itemCount={2} stock={4} setCounter={x} />
            </div>
          );
        })}
      </div>
      <div className="flex items-end justify-between">
        <strong>Total</strong> {cartTotal}
      </div>
    </div>
  );
};

export default CartPage;
