"use strict";

 
// const usdCurr = 19;
// const eurCurr = 20;

// const discount = 0.9;

// function convert(amount, curr) {
// 	return curr * amount;
// }

// function promotion(result) {
// 	console.log(result * discount);
// }

// promotion(convert(500, usdCurr));
// promotion(convert(500, eurCurr));


function getMathResult(number, times) {
	if (typeof(times) !== 'number' || times <= 0) {
		return number;
	}

	let str = " ";

	for (let i = 1; i <= times; i++) {
		if (i === times) {
			str += `${number * i}`;
		} else {
			str += `${number * i}---`;
		} 

		
	}
	return str;
	
}

console.log(getMathResult(3, 10)); 