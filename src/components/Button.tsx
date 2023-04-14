import type { ChildrenProps } from "../utils/globalTypes";

const PrimaryButton = (props: Props) => {
	return (
		<button className="w-20 text-white font-bold py-1.5  flex items-center justify-center rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500">
			{props.children}
		</button>
	);
};

export default PrimaryButton;
