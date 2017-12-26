function reverse(string) {
	return string.split("").reduce((reversed, char) => {
		return char + reversed;
	}, "")
}

reverse("hello") //olleh