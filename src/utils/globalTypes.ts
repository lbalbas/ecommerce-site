import type { ReactNode } from "react";
export default Product;

type Product = {
  item: string;
  price: string;
  description: string;
  stock: number;
  thumbnail: string;
  id: string;
  collection?: string | null;
  deparment?: string | null;
};

export interface CartProduct extends Product {
  quantity: number;
}
export type Props = {
  children?: ReactNode;
};

export type ProductProps = {
  children?: ReactNode;
  data: Product;
  list: boolean;
};
