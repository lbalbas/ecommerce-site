import Product from "@/utils/globalTypes";
import ProductItem from "./ProductItem";

const FeaturedItems = () => {
  const items: Product[] = [
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
  ];

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
