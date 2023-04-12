import Image from "next/image";
import type Product from "../utils/globalTypes";
import { useCart } from "../context/CartContext";

type Props = {
	key: any;
	data: Product;
};

const ProductItem = (props: Props) => {
	const { name, price, desc } = props.data;
	const { addItemToCart } = useCart();

	return (
		<div className="w-full h-64">
			{name}
			{desc}
			<h3>${price}</h3>
			<button
				onClick={() => {
					addItemToCart(props.data);
				}}
			>
				Add to Cart
			</button>
		</div>
	);
};

export default ProductItem;
