import { Inter } from "next/font/google";
import FeaturedItems from "@/components/FeaturedItems";
import Link from "next/link";
import Carousel from "@/components/Carousel";
import Head from "next/head";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<div className="flex gap-8 flex-col">
			<Head>
				<title>Ecommerce</title>
			</Head>
			<div className="h-80 grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-3">
				<div className="w-full grid row-span-2 gap-4 md:gap-6 grid-cols-2 md:grid-rows-2 md:grid-cols-1">
					<Link
						className="relative w-full flex rounded-2xl justify-center items-center"
						href="/"
					>
						<Image
							alt="Categories"
							className="rounded-2xl"
							fill
							src="/placeimg_720_720_any.jpeg"
						/>
						<div className="absolute rounded-2xl bg-vanilla opacity-50 w-full h-full flex items-center justify-center"></div>
						<span className="absolute tracking-widest uppercase font-bold text-raisin">
							Categories
						</span>
					</Link>
					<Link
						className="relative w-full flex rounded-2xl justify-center items-center"
						href="/shop"
					>
						<Image
							alt="Products"
							className="rounded-2xl"
							fill
							src="/placeimg_720_720_any.jpeg"
						/>
						<div className="absolute rounded-2xl bg-vanilla opacity-50 w-full h-full flex items-center justify-center"></div>
						<span className="absolute tracking-widest uppercase font-bold text-raisin">
							All Products
						</span>
					</Link>
				</div>
				<Carousel />
			</div>
			<FeaturedItems />
		</div>
	);
}
