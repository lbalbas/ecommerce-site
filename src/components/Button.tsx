import type { ChildrenProps } from "../utils/globalTypes";

const PrimaryButton = (props: Props) => {
	return (
		<button className="w-20 text-ivory font-bold py-1.5  flex items-center justify-center rounded-2xl bg-trueblue">
			{props.children}
		</button>
	);
};

export default PrimaryButton;
