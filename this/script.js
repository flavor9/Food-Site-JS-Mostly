'use strict';

// function showThis(a, b) {
// 	console.log(this);
// 	function sum() {
// 		console.log(this);
// 		return a + b;
// 	}
// 	console.log(sum());
// }
// showThis(4, 5);

// const obj = {
// 	a: 20,
// 	b: 15,
// 	sum: function() {
// 		console.log(this); //will work
// 		function shout() {
// 			console.log(this); //wont work
// 		}
// 	}
// };

// obj.sum();


// function User(name, id) {
// 	this.name = name;
// 	this.id = id;
// 	this.human = true;
// 	this.hello = function() {
// 		console.log(`Hello ${this.name}`);
// 	};
// }

// let ivan = new User('Ivan', 23);


// function sayName(surname) {
// 	console.log(this);
// 	console.log(this.name + surname);
// }

// const user = {
// 	name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
// 	return this * num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));



// 1) Basic Function: this = window, if 'use strict' = undefined
// 2) Context in Object methods = same Object
// 3) this in constructors and classes = is a new Objext exemplar
// 4) Manual binding this: call, apply, bind


// const btn = document.querySelector('button');

// btn.addEventListener('click', function() {
// 	this.style.backgroundColor = 'red';
// });

const obj = {
	num: 5,
	sayNumber: function() {
		const say = () => {
			console.log(this); //will whow obj because ( () => ) will search for the parent and will go to sayNumber, 
							   //but for the method always goes to object so thats why it will show obj 
		};

		say();
	}
};

obj.sayNumber();

// const double = (a) => {
// 	return a * 2;  //can be written differently like bellow if fits in one line
// };

const double = a => a * 2;

