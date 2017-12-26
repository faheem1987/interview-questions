function reverse(string) {
	let reverse = "";

	for(let char of string) {
		reverse = char + reverse;
	}

	return reverse;
}

reverse("hello") //olleh