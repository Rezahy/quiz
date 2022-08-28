export function getRepeatedInfo(number) {
	let result = null;
	const numberString = number.toString();
	const inputInfo = {};

	for (let i = 0; i < numberString.length; i++) {
		const currentNumberString = numberString[i];

		inputInfo[currentNumberString] =
			inputInfo[currentNumberString] === undefined
				? String.prototype.padStart(+currentNumberString, currentNumberString)
				: String.prototype.padEnd(
						inputInfo[currentNumberString].length + +currentNumberString,
						currentNumberString
				  );
	}

	result = inputInfo;
	return result;
}
