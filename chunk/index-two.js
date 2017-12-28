function chunk(arr, n) {
	const chunkArr = [];
	let index = 0; //4

	while(index < arr.length) {
		chunkArr.push(arr.slice(index, index+n));
		index += n; 
	}

	return chunkArr;
}