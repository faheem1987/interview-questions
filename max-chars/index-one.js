function maxChars(string) {
	const charMap = {};
	let max = 0;
	let maxChar = "";

	for (let char of string) {
		charMap[char] = charMap[char]++ ||  1;
	}

	for (let char in charMap) {
		if(charMap[char] > max) {
			max = charMap[char];
			maxChar = char;
		}
	}
	
	return maxChar;
}