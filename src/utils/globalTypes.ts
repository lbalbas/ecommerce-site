import type { ReactNode } from "react";
export default Product;

type Product = {
	id: any;
	name: string;
	desc: string;
	price: number;
	img: string;
};

export type Props = {
	children?: ReactNode;
};

export type ProductProps = {
	children?: ReactNode;
	data: Product;
};
