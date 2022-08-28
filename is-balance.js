export function isBalance(input) {
	let result = null;
	const inputInfo = {
		parenthesesCharacterCount: 0,
		bracesCharacterCount: 0,
		bracketsCharacterCount: 0,
	};

	if (input.length > 0 && input.length % 2 === 0) {
		for (let i = 0; i < input.length; i++) {
			switch (input[i]) {
				case "(":
				case ")":
					inputInfo.parenthesesCharacterCount++;
					break;
				case "{":
				case "}":
					inputInfo.bracesCharacterCount++;
					break;
				case "[":
				case "]":
					inputInfo.bracketsCharacterCount++;
					break;
			}
		}
		if (
			inputInfo.bracesCharacterCount % 2 === 0 &&
			inputInfo.parenthesesCharacterCount % 2 === 0 &&
			inputInfo.bracketsCharacterCount % 2 === 0
		) {
			result = true;
		}
	} else {
		result = false;
	}

	return result;
}
