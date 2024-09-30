const mergeSort = (ary: number[]): number[] => {
	if (ary.length < 2) return ary;

	const midepoint = Math.floor(ary.length / 2);
	const left = ary.slice(0, midepoint);
	const right = ary.slice(midepoint);

	return mergeArrays(mergeSort(left), mergeSort(right));
};

const mergeArrays = (left: number[], right: number[]) => {
	const temp: number[] = [];
	while (left.length && right.length) {
		if (left[0] <= right[0]) {
			temp.push(Number(left.shift()));
		} else {
			temp.push(Number(right.shift()));
		}
	}

	return [...temp, ...left, ...right];
};

const ary: number[] = [-6, 20, -2, 8, 4, 99, -99];
console.log(mergeSort(ary).toString());
