export function operations(ops) {
	let result = null;
	const opsArray = ops.split(" ");
	const arr = [];

	opsArray.forEach((ops) => {
		if (ops === "D") {
			const lastItemInArray = arr[arr.length - 1];
			arr.push(+lastItemInArray * 2);
		} else if (ops === "R") {
			arr.pop();
		} else if (ops === "+") {
			const [number1, number2] = arr.slice(arr.length - 2);
			arr.push(number1 + number2);
		} else {
			arr.push(+ops);
		}
	});

	result = arr.reduce((prev, curr) => prev + curr);
	return result;
}
