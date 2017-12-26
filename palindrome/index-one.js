function palindrome(string) {
	const reverse = string.splie("").reverse().join("");
	return reverse === string;
}