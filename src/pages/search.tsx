import ProductItem from "../components/ProductItem";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { trpc } from "../utils/trpc";
import LoadingBlock from "../components/Loading";
import Head from "next/head";

const Search = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const search = router.query.s;
  let stringSearch = "";

  if (Array.isArray(search)) {
    // If Search is an array, take the first element
    stringSearch = search[0];
  } else if (search) {
    // If Search is a string
    stringSearch = search;
  }

  const searchItems = trpc.search.useQuery(
    { search: stringSearch },
    {
      enabled: stringSearch !== "",
    }
  );

  const items = searchItems.data;

  if (searchItems.isLoading) {
    return (
      <div>
        {" "}
        <Head>
          <title>{`Search Page`}</title>
        </Head>
        <LoadingBlock size={32} />
      </div>
    );
  } else if (items) {
    return (
      <div className="flex min-h-[60vh] flex-col">
        <Head>
          <title>{`Searching for "${search}"`}</title>
        </Head>
        <h3 className="font-bold tracking-wider uppercase my-4">
          {`Searching "${search}"`}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {items.length === 0 ? (
            <p>No matching results found</p>
          ) : (
            items.map((item) => (
              <ProductItem list={false} key={item.id} data={item} />
            ))
          )}
        </div>
      </div>
    );
  }
};

export default Search;
