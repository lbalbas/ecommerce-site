import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Head from "next/head";
import Button from "../../components/Button";
import Counter from "../../components/ItemCounter";
import {
	ShoppingCartIcon,
	ArrowSmallLeftIcon,
} from "@heroicons/react/24/solid";
import FeaturedItems from "../../components/FeaturedItems";
import { trpc } from "../../utils/trpc";
import { CartProduct, DepartmentProduct } from "../../utils/globalTypes";
import LoadingBlock from "../../components/Loading";
import Link from "next/link";

interface ShopProduct extends CartProduct, DepartmentProduct {}
const ProductPage = () => {
	const [itemCount, setCounter] = useState(1);
	const { addItemToCart, itemsOnCart } = useCart();
	const router = useRouter();
	const { id } = router.query;
	let stringId = "";

	if (Array.isArray(id)) {
		// If id is an array, take the first element
		stringId = id[0];
	} else if (id) {
		// If id is a string
		stringId = id;
	}

	const itemData = trpc.item.useQuery(
		{ id: stringId },
		{
			enabled: stringId !== "", // Enable the query only when id is defined and is a string
		}
	);

	if (itemData.isLoading) {
		return (
			<div>
				<Head>
					<title>Shop</title>
				</Head>
				<LoadingBlock size={32} />
			</div>
		);
	}
	const increaseItemCount = () => {
		setCounter(itemCount + 1);
	};
	const decreaseItemCount = () => {
		setCounter(itemCount - 1);
	};
	if (itemData.data === false) {
		return <div>Item not found</div>;
	} else if (
		!itemData.data ||
		!itemData.data.id ||
		!itemData.data.item ||
		!itemData.data.description ||
		!itemData.data.price ||
		!itemData.data.stock ||
		!itemData.data.thumbnail ||
		!itemData.data.department
	) {
		return <div>Item data is incomplete</div>;
	} else {
		const item: ShopProduct = { ...itemData.data, quantity: itemCount };
		const itemInCart = itemsOnCart.find(
			(cartItem) => cartItem.id === item.id
		);
		const itemInCartQuantity = itemInCart ? itemInCart.quantity : 0;

		return (
			<div className="flex flex-col">
				<Head>
					<title>{item.item}</title>
				</Head>
				<div className="flex items-center flex-col h-[75vh] lg:max-h-[600px] lg:grid lg:grid-cols-2 mb-6 justify-center">
					<div className="h-80 w-80 lg:h-full lg:w-full grid place-items-center relative">
						<Image
							className="object-contain"
							alt="Product"
							src="/placeimg_720_720_any.jpeg"
							sizes="(max-width: 800px) 50vw, (max-width: 400px) 33vw"
							fill
						/>
					</div>
					<div className="flex h-full w-full justify-center items-center">
						<div className="mt-4 lg:mt-6 w-full md:w-3/6 lg:w-5/6 flex-col flex">
							<div>
							<Link
								href={`/departments/${item.department}`}
								className="flex items-center w-fit uppercase tracking-wide text-sm text-gray-600"
							>
								<ArrowSmallLeftIcon className="h-4 w-4" />
								{`In ${item.departments.name}`}
							</Link>

							<div className="flex flex-col md:flex-row justify-center lg:justify-start items-center lg:items-baseline">
								<h1 className="text-2xl text-raisin font-bold">
									{item.item}
								</h1>
								<h3 className="mx-4 text-gray-600">
									${item.price}
								</h3>
							</div>
							<p className="my-2 text-center md:text-left lg:my-4 text-gray-700">
								{item.description}
							</p>
							</div>
							<div className="flex flex-col md:flex-row items-center w-full justify-around my-4 gap-4 md:gap-8">
								<Counter
									increase={increaseItemCount}
									decrease={decreaseItemCount}
									itemCount={itemCount}
									stock={item.stock}
									itemInCartQuantity={itemInCartQuantity}
								/>
								<Button
									disabled={item.stock === 0}
									onClick={() => {
										let nItem: CartProduct = {
											quantity: item.quantity,
											item: item.item,
											price: item.price,
											description: item.description,
											stock: item.stock,
											thumbnail: item.thumbnail,
											department: item.department,
											id: item.id,
										};
										addItemToCart(nItem);
										setCounter(1);
									}}
								>
									<div className="w-full flex gap-2 items-center ">
										<div className="flex w-full">
											<ShoppingCartIcon className="h-6 w-6" />
											Add to Cart
										</div>
										<span className="text-xs">
											($
											{parseFloat(item.price) * itemCount}
											)
										</span>
									</div>
								</Button>

							</div>
							
						</div>
					</div>
				</div>
				<FeaturedItems />
			</div>
		);
	}
};

export default ProductPage;
