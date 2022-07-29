"use strict";

// const obj = {
// 	a: 5,
// 	b: 1 
// };

// const copy = obj; 

// function copy(mainObject) {
// 	let objCopy = {};

// 	let key;
// 	for (key in mainObject) {
// 		objCopy[key] = mainObject[key];
// 	}

// 	return objCopy;
// }

// const numbers = {
// 	a: 2,
// 	b: 5,
// 	c: {
// 		x: 7,
// 		y: 4
// 	}
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;

// console.log(newNumbers);
// console.log(numbers);

// const add = {
// 	d: 17,
// 	e: 20
// };

// const clone = Object.assign({}, add);


// clone.d = 20;

// console.log(add);
// console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'Bum'

// console.log(newArray);
// console.log(oldArray);

// const video = ['youtube', 'vimeo', 'rutube'],
// 	  blogs = ['wordpress', 'livejournal', 'blogger'],
// 	  internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);

// function log(a, b, c) {
// 	console.log(a);
// 	console.log(b);
// 	console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// const arry = ["a", "b"];
// const newArrray = [...arry];

// const q = {
// 	one: 1,
// 	two: 2
// };

// const newQ = {...q};


const perosnalPlanPeter = {
	name: "Peter",
	age: "29",
	skills: {
		languages: ['ru', 'eng'],
		programmingLangs: {
			js: '20%',
			php: '10%'
		},
		exp: '1 month'
	},
	 showAgeAndLangs: function(plan) {
		let answer = '';

		const {age} = plan;
		const {languages} = plan.skills;

		answer = `I'm ${age} and I know:`;

		languages.forEach(function(lang) {
			answer += `${lang.toUpperCase()}`;
		});
		return answer;
	 }
	 
};

console.log(perosnalPlanPeter.showAgeAndLangs(perosnalPlanPeter)); 

function showExperience(plan) {
	const {exp} = plan.skills;
	return exp;
}

console.log(showExperience(perosnalPlanPeter)); 

function showProgrammingLangs(plan) {
	let str = '';

	const {programmingLangs} = plan.skills;

	for (let key in programmingLangs) {
		str += `Language ${key} is studied ${programmingLangs[key]};\n`;
	}
	return str;
}

console.log(showProgrammingLangs(perosnalPlanPeter));