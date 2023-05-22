import ProductItem from "../../components/ProductItem";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [items, setItems] = useState([]);
  const router = useRouter();
  const allItems = trpc.items.useQuery();

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
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col">
      <h3 className="font-bold tracking-wider uppercase my-4">All Items</h3>
      <div className="grid grid-cols-4">
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

export default Shop;

function paginate(array, itemsPerPage) {
  const pages = [];
  for (let i = 0; i < array.length; i += itemsPerPage) {
    pages.push(array.slice(i, i + itemsPerPage));
  }
  return pages;
}
