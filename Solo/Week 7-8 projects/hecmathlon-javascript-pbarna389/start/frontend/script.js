class HecmathlonClass {
	getMaxValue = input => {
		// const maxValues = input.split(",");
		// let maxValue = 0;
		// for (let i = 0; i < maxValues.length; i++) {
		// 	let tempValue = parseInt(maxValues[i]);
		// 	if (tempValue > maxValue) {
		// 		maxValue = tempValue;
		// 	}
		// }
		// return [maxValue];
		return [input.split(",").map(Number).reduce((acc, currVal) => {
			return (acc > currVal ? acc : currVal)
		})];
	}

	getGreaterThan = input => {
		// const greaterValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		// let greaterNums = [];
		// for (var j = 0; j < greaterValues.length; j++) {
		// 	if (greaterValues[j] > parseInt(input)) {
		// 		greaterNums.push(greaterValues[j]);
		// 	}
		// }
		// return greaterNums;

		return Array.from({ length: 10 }, (_, i) => i + 1).filter(element => element > input && element <= 10);
	}

	fizzBuzz = (input) => {
		let output = Array.from({ length: parseInt(input) }, (_, i) => i + 1);
		// for (let k = 1; k <= parseInt(input); k++) {
		// 	let value;
		// 	if (k % 5 === 0 && k % 3 === 0) value = "FizzBuzz";
		// 	else if (k % 3 === 0) value = "Fizz";
		// 	else if (k % 5 === 0) value = "Buzz";
		// 	else value = k;
		// 	output.push(value);
		// }
		// return output;
		return output.map(element => element % 5 === 0 && element % 3 === 0 ? "FizzBuzz\n"
			: element % 3 === 0 ? "Fizz\n"
				: element % 5 === 0 ? "Buzz\n"
					: element = element);
	}
};

let hECMAthlon = new HecmathlonClass();
export default hECMAthlon;