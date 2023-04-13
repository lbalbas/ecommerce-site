import Button from "./Button";
import Link from "next/link";

const Header = () => {
	return (
		<header className="flex justify-around items-center h-16 bg-cyan-100">
			<Link href="/">Logo</Link>
			<input type="text" className="w-64 rounded-2xl p-1" />
			<Button>Login</Button>
		</header>
	);
};
export default Header;
