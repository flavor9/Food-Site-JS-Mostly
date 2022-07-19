"use strict";

const numberOfFilms = +prompt("How many movies did you watch?", "");

const personalMovieDB = {
	count: numberOfFilms,
	movies:{},
	actors:{},
	geners:[],
	privat: false

};

const a = prompt("Last movie you watched", ""),
	  b = prompt("Rate it from 1 to 10", ""),
	  c = prompt("Last movie you watched", ""),
	  d = prompt("Rate it from 1 to 10", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);


