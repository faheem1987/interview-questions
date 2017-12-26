function palindrome(string) {
	return string.split("").every((char, index) => {
		return char === string[string.length - 1 - index];
	})
}