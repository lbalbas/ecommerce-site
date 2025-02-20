import ProductItem from "../../components/ProductItem";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";
import Head from "next/head";
import Product from "@/utils/globalTypes";
import LoadingBlock from "../../components/Loading";
import Pagination from "../../components/Pagination";

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [items, setItems] = useState<Product[]>([]);
  const router = useRouter();
  const allItems = trpc.items.useQuery();

  useEffect(() => {
    const page = router.query.p;
    if (Array.isArray(page)) {
      // If page is an array, take the first element
      setCurrentPage(parseInt(page[0]) - 1);
    } else if (page) {
      // If page is a string
      setCurrentPage(parseInt(page) - 1);
    }
  }, [router.query.p]);

  useEffect(() => {
    if (allItems.data) {
      setItems(allItems.data);
    }
  }, [allItems.data]);

  const pages = paginate(items, 12);

  const handlePrevious = () => {
    router.push({ query: { ...router.query, p: currentPage } });
  };

  const handleNext = () => {
    router.push({ query: { ...router.query, p: currentPage + 2 } });
  };

  if (allItems.isLoading || !pages.length) {
    return <LoadingBlock size={32} />;
  }

  return (
    <div className="flex flex-col">
      <Head>
        <title>All Items</title>
      </Head>
      <h3 className="font-bold tracking-wider uppercase my-4">All Items</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {pages[currentPage].map((item: Product) => {
          return <ProductItem list={false} key={item.id} data={item} />;
        })}
      </div>
      <Pagination totalPages={pages.length} 
            currentPage={currentPage} 
            handleNext={handleNext}
            handlePrevious={handlePrevious}
      />
    </div>
  );
};

export default Shop;

function paginate(array: Product[], itemsPerPage: number) {
  const pages = [];
  for (let i = 0; i < array.length; i += itemsPerPage) {
    pages.push(array.slice(i, i + itemsPerPage));
  }
  return pages;
}
