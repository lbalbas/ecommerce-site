import ProductItem from "../../components/ProductItem";

const Shop = () => {
	const allItems = [
		{
			id: 1,
			name: "Shirt",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ut iure vitae incidunt quidem dolore veniam nam tenetur, sapiente qui architecto ullam autem ipsam consequatur labore molestiae eligendi facere eius!",
			price: 9.99,
		},
		{
			id: 1,
			name: "Shirt",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ut iure vitae incidunt quidem dolore veniam nam tenetur, sapiente qui architecto ullam autem ipsam consequatur labore molestiae eligendi facere eius!",
			price: 9.99,
		},
		{
			id: 1,
			name: "Shirt",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ut iure vitae incidunt quidem dolore veniam nam tenetur, sapiente qui architecto ullam autem ipsam consequatur labore molestiae eligendi facere eius!",
			price: 9.99,
		},
		{
			id: 1,
			name: "Shirt",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ut iure vitae incidunt quidem dolore veniam nam tenetur, sapiente qui architecto ullam autem ipsam consequatur labore molestiae eligendi facere eius!",
			price: 9.99,
		},
		{
			id: 1,
			name: "Shirt",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ut iure vitae incidunt quidem dolore veniam nam tenetur, sapiente qui architecto ullam autem ipsam consequatur labore molestiae eligendi facere eius!",
			price: 9.99,
		},
		{
			id: 1,
			name: "Shirt",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ut iure vitae incidunt quidem dolore veniam nam tenetur, sapiente qui architecto ullam autem ipsam consequatur labore molestiae eligendi facere eius!",
			price: 9.99,
		},
		{
			id: 1,
			name: "Shirt",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ut iure vitae incidunt quidem dolore veniam nam tenetur, sapiente qui architecto ullam autem ipsam consequatur labore molestiae eligendi facere eius!",
			price: 9.99,
		},
	];

	return (
		<div>
			{allItems.map((item) => {
				return <ProductItem key={item.id} data={item} />;
			})}
		</div>
	);
};

export default Shop;
