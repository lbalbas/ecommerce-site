import Button from "./Button";
import Link from "next/link";
import Cart from "./Cart";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="bg-raisin">
      <div className="w-11/12 max-w-[1150px] mx-auto flex bg-raisin justify-between items-center h-16">
        <Link className="text-ivory" href="/">
          Logo
        </Link>
        <SearchBar />
        <div className="flex">
          <Cart />
        </div>
      </div>
    </header>
  );
};
export default Header;
