import {useState} from 'react'

const Counter = () => {
	const [counter, setCounter] = useState(1);
	return (
		<div className="flex flex-col items-center">
			<h3>Quantity</h3>
			<div className="flex gap-2 text-lg">
				<button onClick={()=>{setCounter(counter - 1)}}>
					-
				</button>
				{counter}
				<button onClick={()=>{setCounter(counter + 1)}}>
					+	
				</button>
			</div>
			<p className="text-xs">X left in stock</p>
		</div>
	);
};

export default Counter;
