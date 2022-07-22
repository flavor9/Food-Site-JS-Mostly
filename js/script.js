"use strict";

 
const numberOfFilms = +prompt("How many movies did you watch?", "");

const personalMovieDB = {
	count: numberOfFilms,
	movies:{},
	actors:{},
	geners:[],
	privat: false

};

question: for (let i = 0; i < 2; i++) {
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

if (personalMovieDB.count < 10) {
	console.log("Not a lot of movies watched");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log("Clasical watcher");
} else if (personalMovieDB.count >= 30) {
	console.log("Movie man");
} else {
	console.log("Error");
}


console.log(personalMovieDB);