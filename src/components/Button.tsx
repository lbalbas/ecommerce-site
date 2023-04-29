import { Props } from "../utils/globalTypes";

const PrimaryButton = (props: Props) => {
	return (
		<button className="min-w-fit max-h-10 px-4 text-ivory font-bold py-1.5  flex items-center justify-around rounded-full bg-trueblue">
			{props.children}
		</button>
	);
};

export default PrimaryButton;
