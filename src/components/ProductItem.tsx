import Image from "next/image";
import Link from "next/link";
import type { ProductProps, Props } from "../utils/globalTypes";

const ProductItem = (props: ProductProps) => {
	const { name, price, img, id } = props.data;

	return (
		<Link href={"/shop/" + id} className="group h-64">
			<Image className="rounded-2xl" alt={name} src={img} width={120} height={120} />
			<p className="text-center">{name}</p>
			<h3 className="text-center group-hover:block hidden">${price}</h3>
		</Link>
	);
};

export default ProductItem;
