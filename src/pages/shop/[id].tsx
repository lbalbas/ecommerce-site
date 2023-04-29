import { useRouter } from "next/router";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Button from '../../components/Button'
import Counter from '../../components/ItemCounter'
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const ProductPage = () => {
	const { addItemToCart } = useCart();
	const router = useRouter();
	const { id } = router.query;
	const placeholder = {
		id: id,
		name: "Shirt",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ut iure vitae incidunt quidem dolore veniam nam tenetur, sapiente qui architecto ullam autem ipsam consequatur labore molestiae eligendi facere eius!",
		price: 9.99,
		img: "/placeimg_720_720_any.jpeg",
	};
	return (
		<div className="grid grid-cols-2 lg:h-[60vh]">
			<div className="relative w-full">
				<Image alt="Product" src="/placeimg_720_720_any.jpeg" fill />
			</div>
			<div className="flex w-full justify-center items-center">
				<div className="lg:w-5/6 flex-col flex">
					<div className="flex items-baseline">
					<h1 className="text-2xl text-raisin font-bold">
						{placeholder.name}
					</h1>
					<h3 className="mx-4 text-gray-600">${placeholder.price}</h3>
					</div>
					<p className="my-4 text-gray-700">{placeholder.desc}</p>
					<div className="flex items-center w-full justify-end gap-8">
					 <Counter />
					 <Button><ShoppingCartIcon className="h-6 w-6" />Add to Cart</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductPage;
