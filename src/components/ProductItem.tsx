import Image from "next/image";
import type Product from "../utils/globalTypes";
import { useCart } from "../context/CartContext";
import Link from "next/link";
import type {Props} from "../utils/globalTypes";

const ProductItem = (props: Props) => {
	const { name, price, img, id } = props.data;
	const { addItemToCart } = useCart();

	return (
		<Link href={"/shop/" + id} className="group h-64">
			<Image alt={name} src={img} width={120} height={120} />
			{name}
			<h3 className="group-hover:block hidden">${price}</h3>
		</Link>
	);
};

export default ProductItem;
