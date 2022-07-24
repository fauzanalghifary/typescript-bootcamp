let movieTitle: string = "Amadeus";
movieTitle = "Arrival";
// movieTitle = 9;
// movieTitle.upper();
movieTitle.toUpperCase();

console.log(movieTitle);

let numCatLives: number = 9;
numCatLives++;
// numCatLives = "Zero";

let gameOver: boolean = false;
gameOver = true;
// gameOver = "true";

//
let tvShow = "Olive Kitteridge";
// tvShow = 9;

//
let thing: any = "Hello";
thing = 1;
thing = false;

//
const movies = ["Arrival", "Aliens", "Amadeus"];
let foundMovie: string;

for (let movie of movies) {
  if (movie === "Amadeus") {
    foundMovie = "Amadeus";
  }
}

export {};
