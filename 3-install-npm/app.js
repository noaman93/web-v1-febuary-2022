let giveMeAJoke = require("give-me-a-joke");
let colors = require("colors");

// console.log(giveMeAJoke);

// To get a random Chuck Norris joke
giveMeAJoke.getRandomCNJoke(function (joke) {
  console.log(joke.rainbow);
});
