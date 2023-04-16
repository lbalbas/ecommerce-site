import Button from "./Button";
import Link from "next/link";
import Cart from "./Cart";

const Header = () => {
	return (
		<header className="flex justify-around items-center h-16 bg-cyan-100">
			<Link href="/">Logo</Link>
			<input
				type="text"
				className="min-w-64 w-full md:max-w-[30vw] self-center rounded-2xl p-1"
			/>
			<div className="flex">
				<Cart />
				<Button>Login</Button>
			</div>
		</header>
	);
};
export default Header;
