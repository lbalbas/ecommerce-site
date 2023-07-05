import ProductItem from "../../components/ProductItem";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";
import Head from "next/head";
import Product from "@/utils/globalTypes";

interface DepartmentProduct extends Product {
  departments: {
    id: string;
    name: string;
    image: string;
  };
}

const DepartmentPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [items, setItems] = useState<DepartmentProduct[]>([]);
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

  const allItems = trpc.departmentItems.useQuery(
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
          <title>Department Items</title>
        </Head>
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <Head>
        <title>{pages[0][0].departments.name}</title>
      </Head>
      <h3 className="font-bold tracking-wider uppercase my-4">
        {pages[0][0].departments.name}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {pages[currentPage].map((item: Product) => {
          return <ProductItem list={false} key={item.id} data={item} />;
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

export default DepartmentPage;

function paginate(array: DepartmentProduct[], itemsPerPage: number) {
  const pages = [];
  for (let i = 0; i < array.length; i += itemsPerPage) {
    pages.push(array.slice(i, i + itemsPerPage));
  }
  return pages;
}
