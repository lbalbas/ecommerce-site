import { useRouter } from "next/router";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Button from "../../components/Button";
import Counter from "../../components/ItemCounter";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import FeaturedItems from "../../components/FeaturedItems";

const ProductPage = () => {
  const [stock, setStock] = useState(5);
  const [itemCount, setCounter] = useState(1);
  const { addItemToCart } = useCart();
  const router = useRouter();
  const { id } = router.query;
  const placeholder = {
    id: id,
    name: "Shirt",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ut iure vitae incidunt quidem dolore veniam nam tenetur, sapiente qui architecto ullam autem ipsam consequatur labore molestiae eligendi facere eius!",
    price: 9.99,
    img: "/placeimg_720_720_any.jpeg",
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-center flex-col lg:grid lg:grid-cols-2 mb-6">
        <div className="h-80 w-96 lg:w-full lg:h-[65vh] relative">
          <Image alt="Product" src="/placeimg_720_720_any.jpeg" fill />
        </div>
        <div className="flex w-full justify-center items-center">
          <div className="mt-4 lg:mt-0 w-5/6 md:w-3/6 lg:w-5/6 flex-col flex">
            <div className="flex justify-center lg:justify-start items-center lg:items-baseline">
              <h1 className="text-2xl text-raisin font-bold">
                {placeholder.name}
              </h1>
              <h3 className="mx-4 text-gray-600">${placeholder.price}</h3>
            </div>
            <p className="my-2 lg:my-4 text-gray-700">{placeholder.desc}</p>
            <div className="flex items-center w-full justify-around lg:justify-end gap-8">
              <Counter
                setCounter={setCounter}
                itemCount={itemCount}
                stock={stock}
              />

              <Button onClick={() => addItemToCart(placeholder)}>
                <div className="w-full flex gap-2 items-center ">
                  <div className="flex w-full">
                    <ShoppingCartIcon className="h-6 w-6" />
                    Add to Cart
                  </div>
                  <span className="text-xs">
                    (${placeholder.price * itemCount})
                  </span>
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
