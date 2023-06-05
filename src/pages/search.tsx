import ProductItem from "../components/ProductItem";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { trpc } from "../utils/trpc";

const Search = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { s } = router.query;
  const searchItems = trpc.search.useQuery(
    { search: s },
    {
      enabled: s !== undefined, // Enable the query only when id is defined
    }
  );

  const items = searchItems.data;

  if (searchItems.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col">
      <h3 className="font-bold tracking-wider uppercase my-4">
        Searching "{s}"
      </h3>
      <div className="grid grid-cols-4">
        {items.map((item) => {
          return <ProductItem key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
};

export default Search;
