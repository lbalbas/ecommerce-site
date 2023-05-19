import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Button from "../../components/Button";
import Counter from "../../components/ItemCounter";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import FeaturedItems from "../../components/FeaturedItems";
import { trpc } from "../../utils/trpc";

const ProductPage = () => {
  const [itemCount, setCounter] = useState(1);
  const { addItemToCart } = useCart();
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(true);
  const itemData = trpc.item.useQuery(
    { id: id },
    {
      enabled: id !== undefined, // Enable the query only when id is defined
    }
  );

  if (itemData.isLoading) {
    return <div>Loading...</div>;
  }
  const increaseItemCount = () => {
    setCounter(itemCount + 1);
  }
  const decreaseItemCount = () => {
    setCounter(itemCount - 1)
  }
  const item = itemData.data;
  item.quantity = itemCount;
  
  return (
    <div className="flex flex-col">
      <div className="flex items-center flex-col h-[75vh] lg:max-h-[600px] lg:grid lg:grid-cols-2 mb-6 justify-center">
        <div className="h-80 w-80 lg:h-full lg:w-full grid place-items-center relative">
          <Image
            className="object-contain"
            alt="Product"
            src="/placeimg_720_720_any.jpeg"
            sizes="(max-width: 800px) 50vw, (max-width: 400px) 33vw"
            fill
          />
        </div>
        <div className="flex w-full justify-center items-center">
          <div className="mt-4 lg:mt-0 w-full md:w-3/6 lg:w-5/6 flex-col flex">
            <div className="flex flex-col md:flex-row justify-center lg:justify-start items-center lg:items-baseline">
              <h1 className="text-2xl text-raisin font-bold">{item.item}</h1>
              <h3 className="mx-4 text-gray-600">${item.price}</h3>
            </div>
            <p className="my-2 text-center md:text-left lg:my-4 text-gray-700">
              {item.description}
            </p>
            <div className="flex flex-col md:flex-row items-center w-full justify-around lg:justify-end gap-4 md:gap-8">
              <Counter
                increase={increaseItemCount}
                decrease={decreaseItemCount}
                itemCount={itemCount}
                stock={item.stock}
              />

              <Button onClick={() => addItemToCart(item)}>
                <div className="w-full flex gap-2 items-center ">
                  <div className="flex w-full">
                    <ShoppingCartIcon className="h-6 w-6" />
                    Add to Cart
                  </div>
                  <span className="text-xs">(${item.price * itemCount})</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <FeaturedItems />
    </div>
  );
};

export default ProductPage;
