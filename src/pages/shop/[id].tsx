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
			<div className="flex flex-col animate-fade-in">
				<Head>
					<title>{item.item}</title>
				</Head>
				<div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 mb-12 justify-center max-w-6xl mx-auto w-full pt-8 px-4">
					<div className="w-full aspect-square lg:h-[500px] lg:w-auto relative rounded-3xl overflow-hidden shadow-premium bg-white p-4">
						<div className="w-full h-full relative rounded-2xl overflow-hidden shadow-glass">
							<Image
								className="object-contain"
								alt={item.item}
								src={item.thumbnail || "/placeimg_720_720_any.jpeg"}
								sizes="(max-width: 800px) 100vw, (max-width: 1200px) 50vw, 33vw"
								fill
							/>
						</div>
					</div>
					<div className="flex h-full w-full items-center">
						<div className="w-full flex-col flex glass-card p-8 md:p-10">
							<div className="border-b border-raisin/10 pb-6 mb-6">
								<Link
									href={`/departments/${item.department}`}
									className="flex items-center w-fit uppercase tracking-wider text-xs font-bold text-trueblue mb-4 hover:text-raisin transition-colors duration-300"
								>
									<ArrowSmallLeftIcon className="h-4 w-4 mr-1" />
									Back to {item.departments?.name || 'Department'}
								</Link>

								<div className="flex flex-col gap-2">
									<h1 className="text-3xl md:text-4xl text-raisin font-extrabold tracking-tight">
										{item.item}
									</h1>
									<h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-primary">
										${item.price}
									</h3>
								</div>
								<p className="mt-6 text-raisin/80 leading-relaxed text-lg">
									{item.description}
								</p>
							</div>
							<div className="flex flex-col sm:flex-row items-center w-full justify-between gap-6">
								<div className="bg-white/50 rounded-xl p-1 shadow-sm w-full sm:w-auto flex justify-center">
									<Counter
										increase={increaseItemCount}
										decrease={decreaseItemCount}
										itemCount={itemCount}
										stock={item.stock}
										itemInCartQuantity={itemInCartQuantity}
									/>
								</div>
								<Button
									disabled={item.stock === 0}
									className="w-full sm:w-auto bg-gradient-primary hover:shadow-premium transform hover:-translate-y-1 transition-all duration-300 rounded-xl py-4"
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
									<div className="w-full flex gap-3 items-center justify-center font-bold text-white">
										<ShoppingCartIcon className="h-6 w-6" />
										<span>Add to Cart</span>
										<span className="text-sm opacity-90 border-l border-white/20 pl-3">
											${(parseFloat(item.price) * itemCount).toFixed(2)}
										</span>
									</div>
								</Button>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-8">
					<FeaturedItems />
				</div>
			</div>
		);
	}
};

export default ProductPage;
