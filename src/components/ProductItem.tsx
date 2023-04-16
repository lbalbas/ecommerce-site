import Image from "next/image";
import Link from "next/link";
import type { ProductProps, Props } from "../utils/globalTypes";

const ProductItem = (props: ProductProps) => {
	const { name, price, img, id } = props.data;

	return (
		<Link href={"/shop/" + id} className="group h-64">
			<Image alt={name} src={img} width={120} height={120} />
			{name}
			<h3 className="group-hover:block hidden">${price}</h3>
		</Link>
	);
};

export default ProductItem;
