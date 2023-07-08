import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  let typingTimer = useRef<NodeJS.Timeout | null>(null);

  const handleInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (typingTimer.current) {
      clearTimeout(typingTimer.current);
    }
    if (target && target.value) {
      typingTimer.current = setTimeout(() => setSearch(target.value), 500);
    }
  };

  useEffect(() => {
    if (search !== "") {
      router.push(`/search?s=${search}`);
    }
    return () => {
      if (typingTimer.current) {
        clearTimeout(typingTimer.current);
      }
    };
  }, [search]);

  return (
    <div className="relative flex items-center self-center min-w-64 w-full max-w-[150px] md:max-w-[400px]">
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
