function chunk(arr, n) {
	const chunkArr = [];

	for(let ele of arr) {
		const lastEle = chunkArr[chunkArr.length - 1];

		if(!lastEle || lastEle.length === n) {
			chunkArr.push([ele]);
		} else {
			lastEle.push(ele);
		}
	}

	return chunkArr;
}