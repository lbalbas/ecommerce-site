import ProductItem from "../../components/ProductItem";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";
import Head from "next/head";

const CollectionPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [items, setItems] = useState([]);
  const router = useRouter();
  const { id } = router.query;
  const allItems = trpc.collectionItems.useQuery(
    { id: id },
    {
      enabled: id !== undefined, // Enable the query only when id is defined
    }
  );

  useEffect(() => {
    if (router.query.p) {
      setCurrentPage(parseInt(router.query.p) - 1);
    }
  }, [router.query.p]);

  useEffect(() => {
    if (allItems.data) {
      setItems(allItems.data);
    }
  }, [allItems.data]);

  const pages = paginate(items, 10);

  const handlePrevious = () => {
    router.push({ query: { ...router.query, p: currentPage } });
  };

  const handleNext = () => {
    router.push({ query: { ...router.query, p: currentPage + 2 } });
  };

  if (allItems.isLoading || !pages.length) {
    return (
      <div>
        {" "}
        <Head>
          <title>Collection Items</title>
        </Head>
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <Head>
        <title>{pages[0][0].collections.name}</title>
      </Head>
      <h3 className="font-bold tracking-wider uppercase my-4">
        Items from {pages[0][0].collections.name}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {pages[currentPage].map((item) => {
          return <ProductItem key={item.id} data={item} />;
        })}
      </div>
      <button onClick={handlePrevious} disabled={currentPage === 0}>
        Previous
      </button>
      <button onClick={handleNext} disabled={currentPage === pages.length - 1}>
        Next
      </button>
    </div>
  );
};

export default CollectionPage;

function paginate(array, itemsPerPage) {
  const pages = [];
  for (let i = 0; i < array.length; i += itemsPerPage) {
    pages.push(array.slice(i, i + itemsPerPage));
  }
  return pages;
}
