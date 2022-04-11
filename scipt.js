function lcm(...numbers) {
	if (numbers.length === 0) return 1;
	if (numbers.includes(0)) return 0;
	let possibilities = [];
    let bigStopNumber = numbers.reduce((previousValue, currentValue) => previousValue * currentValue, 1)
	for (let j = 0; j < numbers.length; j++) {
        
		for (let i = 0; i <= bigStopNumber; i++) {
			if (i % numbers[j] === 0 && i !== 0) {
				possibilities.push(i);
			}
		}
	}
	for (i = 0; i < possibilities.length; i++) {
		let counter = 0;
		for (j = 0; j < possibilities.length; j++) {
			if (possibilities[i] === possibilities[j]) {
				counter++;
				if (counter === numbers.length) {
                     return possibilities[i];
				}
			}
		}
	}
}

console.log(lcm(2, 5));
console.log(lcm(2, 3, 4));
console.log(lcm(9));
