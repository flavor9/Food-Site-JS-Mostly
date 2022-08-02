"use strict";

const personalMovieDB = {
	count: 0,
	movies:{},
	actors:{},
	geners:[],
	privat: false,
	start: function() {
		personalMovieDB.count = +prompt("How many movies did you watch?", "");

	while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
		personalMovieDB.count = +prompt("How many movies did you watch?", "");
	}
	},
	rememberMyFilms: function() {
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
	},
	detectPersonalLevel: function() {
		if (personalMovieDB.count < 10) {
		console.log("Not a lot of movies watched");
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log("Clasical watcher");
	} else if (personalMovieDB.count >= 30) {
		console.log("Movie man");
	} else {
		console.log("Error");
	}
	},
	showMyDB: function() {
		if (!personalMovieDB.privat) {
		return personalMovieDB;
	}
	},
	toggleVisibleMyDB: function() {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	},
	writeYourGenres: function() {
		for (let i = 1; i <= 3; i++) {
			let genre = prompt(`Your favorite genre ${i}`,"").toLowerCase();
			
			if (genre === null || genre === "") {
				i--;
			} else {
				personalMovieDB.geners[i - 1] = genre;
			}
		}
		personalMovieDB.geners.forEach((item, i) => {
			console.log(`Genre number ${i + 1} is ${item}`);
		});
	}

};

console.log(personalMovieDB.start());
console.log(personalMovieDB.rememberMyFilms());
console.log(personalMovieDB.detectPersonalLevel());
console.log(personalMovieDB.showMyDB());
console.log(personalMovieDB.writeYourGenres());