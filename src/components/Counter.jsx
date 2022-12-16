import { useState } from "preact/hooks";

export default function Counter() {
	let [count, setCount] = useState(0);

	return (
		<div>
			Count: {count} <br />
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				Add
			</button>
		</div>
	);
}
