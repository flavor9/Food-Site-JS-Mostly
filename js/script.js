"use strict";

// function calculateVolumeAndArea(edge) {
// 	if (typeof(edge) !== 'number' || edge <= 0 || !Number.isInteger(edge)) {
// 		return "Error";

// 	}

// 	let result = ``;
// 	const volume = Math.pow(edge, 3);
// 	const area = 6 * Math.pow(edge, 2);
// 	result = `Volume: ${volume}, Full Area: ${area}`;

// 	return result;

// }

// console.log(calculateVolumeAndArea(5)); 


// function getCoupeNumber(place) {
// 	if (place === 0 || place > 36) {
// 		return "There are no seats like that";
// 	}

// 	if(typeof(place) !== 'number' || place < 0 || !Number.isInteger(place)) {
// 		return "Error, wtf is this";
// 	}

// 	for (let i = 4; i <= 36; i = i + 4) {
// 		if (place <= i) {
// 			return Math.ceil(i / 4);
// 		}
// 	}
// }

// console.log(getCoupeNumber(55)); 

// function getTimeFromMinutes(totalMinutes) {
// 	if (typeof(totalMinutes) !== 'number' || !Number.isInteger(totalMinutes) || totalMinutes < 0) {
// 		return "Error";
// 	}

// 	if (totalMinutes > 600) {
// 		return "Too much :(";
// 	}

// 	const hours = Math.floor(totalMinutes / 60);
// 	const minutes = totalMinutes % 60;

// 	let result = "";

// 	if (hours === 1){
// 		result = `It's ${hours} hour and ${minutes} minutes`;
// 		return result;
// 	} else if (hours < 1 || hours > 1) {
// 		result = `It's ${hours} hours and ${minutes} minutes`;
// 		return result;
// 	}
	
	
	
// }

//  console.log(getTimeFromMinutes(150)); 


function findMaxNumber(a, b, c, d) {
	if (typeof(a) !== 'number' ||
		typeof(b) !== 'number' ||
		typeof(c) !== 'number' ||
		typeof(d) !== 'number') {
			return 0;
	} else {
		return Math.max(a, b, c, d);
	}
}

console.log(findMaxNumber(1, 5, 6.6, 10.5)); 