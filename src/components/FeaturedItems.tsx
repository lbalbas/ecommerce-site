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

  return (
    <div className="w-full gap-2 flex flex-col">
      <h3 className="font-bold tracking-wider uppercase">Featured Items</h3>
      <div className="w-full gap-10 flex flex-wrap justify-start items-center">
        {items.map((item) => {
          return <ProductItem list={false} key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
};

export default FeaturedItems;
