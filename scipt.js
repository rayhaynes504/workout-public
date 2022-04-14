//https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript

// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.
// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]

function snail(array) {
	if (array.length === 1) return array[0];
	let newArray = [];
	let n = array[0].length - 1;
	let p = 0;
	while (p < n - 2) {
		for (i = p; i < array[0].length; i++) {
			newArray.push(array[p][i]);
		}
		for (i = p + 1; i < array[0].length; i++) {
			newArray.push(array[i][n]);
		}
		for (i = n - 1; i >= p; i--) {
			newArray.push(array[n][i]);
		}
		for (i = n - 1; i >= p + 1; i--) {
			newArray.push(array[i][0]);
		}
		for (i = p + 1; i <= n - 1; i++) {
			newArray.push(array[p + 1][i]);
		}
		for (i = p + 2; i <= n - 1; i++) {
			newArray.push(array[i][n - 1]);
		}
		for (i = n - 2; i >= 1; i--) {
			newArray.push(array[n - 1][i]);
		}
		for (i = n - 2; i >= p + 2; i--) {
			newArray.push(array[i][p + 1]);
		}
		for (i = p + 2; i <= n - 2; i++) {
			newArray.push(array[p + 2][i]);
		}
		n--;
		p++;
	}
	return newArray;
}

// console.log(snail([[]]));
// console.log(snail([[1]]));
console.log(
	snail([
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	])
);


console.log(
	snail([
		[1, 2, 3, 4, 5],
		[6, 7, 8, 9, 10],
		[11, 12, 13, 14, 15],
		[16, 17, 18, 19, 20],
		[21, 22, 23, 24, 25],
	])
);
console.log(
	snail([
		[1, 2, 3, 4, 5, 6],
		[20, 21, 22, 23, 24, 7],
		[19, 32, 33, 34, 25, 8],
		[18, 31, 36, 35, 26, 9],
		[17, 30, 29, 28, 27, 10],
		[16, 15, 14, 13, 12, 11],
	])
);
