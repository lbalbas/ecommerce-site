import { useRouter } from "next/router";
import { useCart } from "@/context/CartContext";

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
		<div>
			<p>Item: {id}</p>
			<button onClick={() => addItemToCart(placeholder)}>
				Add to Cart
			</button>
		</div>
	);
};

export default ProductPage;
