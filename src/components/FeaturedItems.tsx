import Product from "@/utils/globalTypes";
import ProductItem from "./ProductItem";
import { useState, useEffect } from "react";
import { trpc } from "../utils/trpc";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

const FeaturedItems = () => {
  const [items, setItems] = useState([]);

  const allItems = trpc.featured.useQuery();

  useEffect(() => {
    if (allItems.data) {
      setItems(allItems.data);
    }
  }, [allItems.data]);

  if (allItems.isLoading) {
    return <div>Loading...</div>;
  }

  const scroll = (scrollOffset) => {
    const container = document.querySelector("#featured");
    container.scrollLeft += scrollOffset;
  };

  return (
    <div className="hover-parent w-full group gap-2 relative justify-center flex flex-col">
      <h3 className="font-bold tracking-wider uppercase">Featured Items</h3>
      <div
        id="featured"
        className="relative scroll-smooth w-full gap-10 flex overflow-hidden justify-start items-center"
      >
        {items.map((item) => {
          return <ProductItem list={false} key={item.id} data={item} />;
        })}
      </div>
      <button
        className="z-99 opacity-0 transition-opacity touchscreen-visible rounded-full p-0.5 absolute bg-white left-0"
        onClick={() => scroll(-500)}
      >
        <ChevronLeftIcon className="h-8 w-8" />
      </button>
      <button
        className="z-99 opacity-0 transition-opacity touchscreen-visible rounded-full p-0.5 absolute bg-white right-0"
        onClick={() => scroll(500)}
      >
        <ChevronRightIcon className="h-8 w-8" />
      </button>
    </div>
  );
};

export default FeaturedItems;
