import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import {MagnifyingGlassIcon} from "@heroicons/react/24/solid";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const userHasTyped = useRef(false);
  const router = useRouter();
  let typingTimer;

  useEffect(() => {
    if (userHasTyped.current) {
      router.push(`/search?s=${search}`);
    }
  }, [search]);

  const handleInput = (e) => {
    userHasTyped.current = true;
    clearTimeout(typingTimer);
    if (e.target.value) {
      typingTimer = setTimeout(() => setSearch(e.target.value), 1000);
    }
  };

  return (
    <div className="relative flex items-center self-center min-w-64 w-full md:max-w-[30vw]">
      <MagnifyingGlassIcon className="absolute left-2 h-6 w-6" />
      <input
        type="text"
        onKeyUp={handleInput}
        className="w-full self-center rounded-2xl pl-8 p-1"
      />
    </div>
  );
};

export default SearchBar;
