import Head from "next/head";
import { useCart } from "../context/CartContext";
import ProductItem from "@/components/ProductItem";

const cartPage = () => {
	const { itemsOnCart } = useCart();

	return (
		<div>
			<Head>
				<title>Your Shopping Cart</title>
			</Head>
			{itemsOnCart.map((item) => {
				return <ProductItem key={item.id} data={item} />;
			})}
		</div>
	);
};

export default cartPage;
