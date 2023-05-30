import Product from "@/utils/globalTypes";
import ProductItem from "./ProductItem";
import { useState, useEffect } from "react";
import { trpc } from "../utils/trpc";

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
    const container = document.querySelector('#featured');
    container.scrollLeft += scrollOffset;
  };

  return (
    <div className="w-full gap-2 flex flex-col">
      <h3 className="font-bold tracking-wider uppercase">Featured Items</h3>
      <div id="featured" className="scroll-smooth w-full gap-10 flex overflow-hidden justify-start items-center">
        {items.map((item) => {
          return <ProductItem list={false} key={item.id} data={item} />;
        })}
      </div>
    <div className="flex justify-center mt-4">
      <button className="mr-2" onClick={() => scroll(-500)}>
        &lt;
      </button>
      <button className="ml-2" onClick={() => scroll(500)}>
        &gt;
      </button>
    </div>
    </div>
  );
};

export default FeaturedItems;
