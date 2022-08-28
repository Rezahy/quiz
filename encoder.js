const alphabets = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];

export function encoder({ inputString, repeatCount }) {
	let result = null;
	const inputStringArray = [...inputString];
	const lastAlphabet = inputStringArray.pop();
	inputStringArray.splice(0, 0, lastAlphabet);
	for (let i = 0; i < repeatCount; i++) {
		for (let j = 0; j < inputStringArray.length; j++) {
			const currentAlphabet = inputStringArray[j];
			const alphabetIndex = alphabets.indexOf(currentAlphabet);
			const nextAlphabet =
				alphabetIndex === alphabets.length - 1
					? alphabets[0]
					: alphabets[alphabetIndex + 1];
			inputStringArray.splice(j, 1, nextAlphabet);
		}
	}
	result = inputStringArray.join("");
	return result;
}
