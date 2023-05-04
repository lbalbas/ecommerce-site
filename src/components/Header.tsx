import Button from "./Button";
import Link from "next/link";
import Cart from "./Cart";

const Header = () => {
  return (
    <header className="flex bg-raisin justify-around items-center h-16">
      <Link className="text-ivory" href="/">
        Logo
      </Link>
      <input
        type="text"
        className="min-w-64 w-full md:max-w-[30vw] self-center rounded-2xl p-1"
      />
      <div className="flex">
        <Cart />
        <Link href="/login">
          <Button>Login</Button>
        </Link>
      </div>
    </header>
  );
};
export default Header;
