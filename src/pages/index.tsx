import { Inter } from "next/font/google";
import FeaturedItems from "@/components/FeaturedItems";
import Link from "next/link";
import Carousel from "@/components/Carousel";
import Head from "next/head";

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
						className="w-full bg-cyan-50 flex rounded-2xl justify-center items-center"
						href="/"
					>
						Categories
					</Link>
					<Link
						className="w-full bg-cyan-50 md:row-start-2 rounded-2xl flex justify-center items-center"
						href="/shop"
					>
						All Products
					</Link>
				</div>
				<Carousel />
			</div>
			<FeaturedItems />
		</div>
	);
}
