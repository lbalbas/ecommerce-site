import Button from "./Button";
import Link from "next/link";
import Cart from "./Cart";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="flex bg-raisin justify-around items-center h-16">
      <Link className="text-ivory" href="/">
        Logo
      </Link>
      <SearchBar />
      <div className="flex">
        <Cart />
      </div>
    </header>
  );
};
export default Header;
