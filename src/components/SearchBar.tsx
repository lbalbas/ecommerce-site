import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SearchBar = () => {
	const [search, setSearch] = useState("");
	const userHasTyped = useRef(false);
	const typingTimer = useRef<NodeJS.Timeout | null>(null); // Use useRef here
	const router = useRouter();

	useEffect(() => {
		if (userHasTyped.current && search !== "") {
			router.push(`/search?s=${search}`);
		}
	}, [search, router]);

	const handleInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
		userHasTyped.current = true;
		if (typingTimer.current) clearTimeout(typingTimer.current);
		const target = e.target as HTMLInputElement;
		if (target && target.value) {
			typingTimer.current = setTimeout(
				() => setSearch(target.value),
				1000
			);
		}
	};

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
