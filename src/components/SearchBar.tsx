import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";

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
    <input
      type="text"
      onKeyUp={handleInput}
      className="min-w-64 w-full md:max-w-[30vw] self-center rounded-2xl p-1"
    />
  );
};

export default SearchBar;
