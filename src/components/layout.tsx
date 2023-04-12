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
			<main className="flex min-h-screen flex-col items-center justify-between p-24">
				{children}
			</main>
			<Footer />
		</>
	);
}
