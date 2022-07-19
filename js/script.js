"use strict";

let incr = 10,
	decr = 10;

incr++;
decr--;

console.log(incr);
console.log(decr);

const isChecked = false,
	  isClosed = false;

console.log(isChecked || !isClosed);