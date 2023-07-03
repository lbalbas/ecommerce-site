import Button from "./Button";
import Link from "next/link";
import Cart from "./Cart";
import SearchBar from "./SearchBar";
import { HomeIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header className="bg-raisin">
      <div className="w-11/12 max-w-[1150px] mx-auto flex bg-raisin justify-between items-center h-16">
        <Link className="text-ivory" href="/">
          <HomeIcon className="h-8 w-8" />
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
