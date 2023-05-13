import ProductItem from "../../components/ProductItem";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { trpc } from '../../utils/trpc';

const Shop = () => {
  const allItems = [
    {
      id: 1,
      name: "Shirt",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ut iure vitae incidunt quidem dolore veniam nam tenetur, sapiente qui architecto ullam autem ipsam consequatur labore molestiae eligendi facere eius!",
      price: 9.99,
      img: "/placeimg_720_720_any.jpeg",
    },
    {
      id: 2,
      name: "Shirt",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ut iure vitae incidunt quidem dolore veniam nam tenetur, sapiente qui architecto ullam autem ipsam consequatur labore molestiae eligendi facere eius!",
      price: 9.99,
      img: "/placeimg_720_720_any.jpeg",
    },
    {
      id: 3,
      name: "Shirt",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ut iure vitae incidunt quidem dolore veniam nam tenetur, sapiente qui architecto ullam autem ipsam consequatur labore molestiae eligendi facere eius!",
      price: 9.99,
      img: "/placeimg_720_720_any.jpeg",
    },
    {
      id: 4,
      name: "Shirt",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ut iure vitae incidunt quidem dolore veniam nam tenetur, sapiente qui architecto ullam autem ipsam consequatur labore molestiae eligendi facere eius!",
      price: 9.99,
      img: "/placeimg_720_720_any.jpeg",
    },
    {
      id: 5,
      name: "Shirt",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ut iure vitae incidunt quidem dolore veniam nam tenetur, sapiente qui architecto ullam autem ipsam consequatur labore molestiae eligendi facere eius!",
      price: 9.99,
      img: "/placeimg_720_720_any.jpeg",
    },
    {
      id: 6,
      name: "Shirt",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ut iure vitae incidunt quidem dolore veniam nam tenetur, sapiente qui architecto ullam autem ipsam consequatur labore molestiae eligendi facere eius!",
      price: 9.99,
      img: "/placeimg_720_720_any.jpeg",
    },
  ];
  const [currentPage, setCurrentPage] = useState(0);
  const [items, setItems] = useState([]);
  const pages = paginate(allItems, 10);
  const router = useRouter();

  useEffect(() => {
    if (router.query.p) {
      setCurrentPage(parseInt(router.query.p) - 1);
    }
  }, [router.query.p]);

  const hello = trpc.hello.useQuery({ text: 'client' });

  if(!hello)
    console.log(hello)

  const handlePrevious = () => {
    router.push({ query: { ...router.query, p: currentPage } });
  };

  const handleNext = () => {
    router.push({ query: { ...router.query, p: currentPage + 2 } });
  };

  return (
    <div className="flex flex-col">
      <h3 className="font-bold tracking-wider uppercase my-4">All Items</h3>
      <div className="grid grid-cols-5">
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
