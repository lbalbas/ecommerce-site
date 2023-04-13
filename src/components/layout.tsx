import { type ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
	children: ReactNode;
};

export default function Layout({ children }: Props) {
	return (
		<>
			<Header />
			<main className="w-11/12 mx-auto py-6 flex flex-col">
				{children}
			</main>
			<Footer />
		</>
	);
}
