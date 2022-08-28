export function removerRepetitive(string) {
	let result = null;
	const set = new Set([...string]);
	const finalString = [...set].join("");
	result = finalString;
	return result;
}
