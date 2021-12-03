// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
  
  const arrayDirectors = movies.map((movie)=>{return movie.director});

  return arrayDirectors;

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  
  const arraySpielberg = movies.filter(movie => {return movie.genre.includes("Drama") && 
  movie.director==="Steven Spielberg"});

  if(!arraySpielberg.length) return 0;

  return arraySpielberg.length;
  

}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(otherMovies) {
  if (!otherMovies.length) return 0;


  const sumAvg = otherMovies.reduce((avant , maint)=> {
   
    if (!maint.score||maint.score===' ') {maint.score=0} ;

    return avant + maint.score},0);

   
 let moy = sumAvg/otherMovies.length; 

 return Number(moy.toFixed(2));
}

//console.log(`la moyenne est : ${scoresAverage(movies)}`);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(dramMovies) {

  if (!dramMovies.length) return 0;

  const dramiMa = dramMovies.filter(movi => movi.genre.includes('Drama'));

  if (!dramiMa.length) return 0;

  const sumAvg = dramiMa.reduce((avant , maint)=> {


    return avant + maint.score},0);

   
 let moy = sumAvg/dramiMa.length; 

 return Number(moy.toFixed(2));

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(yearMovies) {
  
   const clone = [... yearMovies];

    clone.sort(function(m1,m2){ 
      
      if (m1.year !== m2.year) {
       
        return m1.year - m2.year;      

    }
      else {
               
         return m1.title.charCodeAt(0) - m2.title.charCodeAt(0);
      }
  });


  return clone;

};



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {

  // i didn't understand this exercise :(

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
