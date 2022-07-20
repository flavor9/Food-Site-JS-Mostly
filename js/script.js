"use strict";

 
// for (let i = 5; i <= 10; i++) {
// 	console.log(i);
// }

// for(let j = 20; j >= 10; j--) {
// 	if (j === 13){
// 		break;
// 	}
// 	console.log(j);
// }

// for(let k = 2; k <= 10; k++) {
// 	if (k % 2 === 0){
// 		console.log(k);
// 	}
// }

// for(let i = 2; i <= 16; i++) {
// 	if (i % 2 === 0) {
// 		continue;
// 	} else {
// 		console.log(i);
// 	}
// }

// let i = 2;
// while(i <= 16) {
// 	if(i % 2 === 0) {
// 		i++;
// 		continue;
// 	} else {
// 		console.log(i);
// 		i++;
// 	}
// }

// const numbers = [];
// for(let i = 5; i <= 10; i++) {
// 	numbers[i - 5] = i;
// }
// console.log(numbers);
// return numbers;

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i = 0; i < arr.length; i++){
// 	result[i] = arr[i];
// }
// console.log(result);




// const data = [5, 10, 'Shopping', 20, 'Homework'];


// for (let i = 0; i < data.length; i++) {
// 	if (typeof(data[i]) === 'number') {
// 		data[i] *= 2;
// 	} else if (typeof(data[i]) === 'string') {
// 		data[i] = `${data[i]} - done`;
// 	}
// }
// console.log(data);



// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// for (let i = 1; i <= data.length; i++) {
// 	result[i - 1] = data[data.length - i];
// }

// return result;

const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
	for (let j = 0; j < lines - i; j++){
		result += " ";
	}
	for (let j = 0; j < 2 * i + 1; j++) {
		result += "*";
	}
	result += "\n";
}

console.log(result);