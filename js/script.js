"use strict";

let numberOfFilms;

function start() {
	numberOfFilms = +prompt("How many movies did you watch?", "");

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt("How many movies did you watch?", "");
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies:{},
	actors:{},
	geners:[],
	privat: false

};


function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt("Last movie you watched", ""),
			  b = prompt("Rate it from 1 to 10", "");
	
		if (a != " " && b != " " && a != null && b != null && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log("done!");
		} else {
			console.log("wtf man");
			i--;
		}
		
	}
}

// rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log("Not a lot of movies watched");
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log("Clasical watcher");
	} else if (personalMovieDB.count >= 30) {
		console.log("Movie man");
	} else {
		console.log("Error");
	}
}

// detectPersonalLevel();

function showMyDB() {
	if (!personalMovieDB.privat) {
		return personalMovieDB;
	}
}

showMyDB();

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		personalMovieDB.geners[i - 1] = prompt(`Your favorite genre ${i}`,"")
	}
}

writeYourGenres();

console.log(showMyDB());