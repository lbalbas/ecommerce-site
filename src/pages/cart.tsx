import Head from "next/head";
import { useCart } from "../context/CartContext";
import ProductItem from "@/components/ProductItem";

const cartPage = () => {
  const { itemsOnCart } = useCart();

  return (
    <div className="w-full grid grid-cols-4">
      <Head>
        <title>Your Shopping Cart</title>
      </Head>
      <div className="flex col-span-3 gap-2 flex-col overflow-y-scroll">
        {itemsOnCart.map((item) => {
          return <ProductItem list={true} key={item.id} data={item} />;
        })}
      </div>
      <div>Total</div>
    </div>
  );
};

export default cartPage;
