import ProductItem from "../../components/ProductItem";

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

	return (
		<div className="flex flex-col">
			<h3 className="font-bold tracking-wider uppercase my-4">
				All Items
			</h3>
			<div className="grid grid-cols-5">
				{allItems.map((item) => {
					return <ProductItem key={item.id} data={item} />;
				})}
			</div>
		</div>
	);
};

export default Shop;
