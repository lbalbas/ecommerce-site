import { Inter } from "next/font/google";
import FeaturedItems from "@/components/FeaturedItems";
import Link from "next/link";
import Carousel from "@/components/Carousel";
import Head from "next/head";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<div className="flex gap-6 flex-col">
			<Head>
				<title>Ecommerce</title>
			</Head>
			<div className="h-80 grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-3">
				<div className="w-full grid row-span-2 gap-4 md:gap-6 grid-cols-2 md:grid-rows-2 md:grid-cols-1">
					<Link
						className="relative w-full bg-cyan-50 flex rounded-2xl justify-center items-center"
						href="/"
					>
						<Image
							alt="Categories"
							className="rounded-2xl"
							fill
							src="/placeimg_720_720_any.jpeg"
						/>
						<div className="absolute bg-gray-100 opacity-60 w-full h-full flex items-center justify-center">
							<span className="opacity-100">Categories</span>
						</div>
					</Link>
					<Link
						className="relative w-full bg-cyan-50 flex rounded-2xl justify-center items-center"
						href="/shop"
					>
						<Image
							alt="Products"
							className="rounded-2xl"
							fill
							src="/placeimg_720_720_any.jpeg"
						/>
						<div className="absolute bg-gray-100 opacity-60 w-full h-full flex items-center justify-center">
							<span className="opacity-100">All Products</span>
						</div>
					</Link>
				</div>
				<Carousel />
			</div>
			<FeaturedItems />
		</div>
	);
}
