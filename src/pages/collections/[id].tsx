import ProductItem from "../../components/ProductItem";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";
import Head from "next/head";
import Product from "@/utils/globalTypes";
import LoadingBlock from "../../components/Loading";

interface CollectionProduct extends Product {
  collections: {
    id: string;
    name: string;
    description: string;
    image: string;
  } | null;
}
const CollectionPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [items, setItems] = useState<CollectionProduct[]>([]);
  const router = useRouter();
  const { id } = router.query;
  let stringId = "";

  if (Array.isArray(id)) {
    // If id is an array, take the first element
    stringId = id[0];
  } else if (id) {
    // If id is a string
    stringId = id;
  }

  const allItems = trpc.collectionItems.useQuery(
    { id: stringId },
    {
      enabled: stringId !== "", // Enable the query only when id is defined and is a string
    }
  );

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
        <LoadingBlock size={10} />
      </div>
    );
  }
  if (allItems.data == false) {
    return <div>Collection not found</div>;
  } else {
    return (
      <div className="flex flex-col">
        <Head>
          <title>{pages[0][0].collections!.name}</title>
        </Head>
        <h3 className="font-bold tracking-wider uppercase my-4">
          Items from {pages[0][0].collections!.name}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {pages[currentPage].map((item: Product) => {
            return <ProductItem key={item.id} data={item} list={false} />;
          })}
        </div>
        <button onClick={handlePrevious} disabled={currentPage === 0}>
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentPage === pages.length - 1}
        >
          Next
        </button>
      </div>
    );
  }
};

export default CollectionPage;

function paginate(array: CollectionProduct[], itemsPerPage: number) {
  const pages = [];
  for (let i = 0; i < array.length; i += itemsPerPage) {
    pages.push(array.slice(i, i + itemsPerPage));
  }
  return pages;
}
