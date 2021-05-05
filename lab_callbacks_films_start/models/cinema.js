const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.listFilmTitles = function () {
  const films = this.films.map(film => film.title);
  return films;
};

// do we need a const inside the higher order function iteration variable name
Cinema.prototype.findFilm = function (filmName){
  const film = this.films.find(item => item.title === filmName);
  return film;
};

// Cinema.prototype.filterByGenre = function (genre){
//   const films = this.films.filter(item => item.genre === genre);
//   return films;
// };

// Cinema.prototype.checkForYear = function (year){
//   const answer = this.films.find(item => item.year === year);
//   if (answer){
//     return true;
//   };
//   return false;
// };

Cinema.prototype.checkForYear = function (year){
  const answer = this.films.some(item => item.year === year);
  return answer;
};


Cinema.prototype.checkOverLength = function (length){
  const answer = this.films.every(item => item.length > length);
  return answer;
};

Cinema.prototype.checkTotalTime = function (){
  const answer = this.films.reduce((runningTotal, film) => {
    return runningTotal + film.length;
  }, 0);
  return answer;
};

Cinema.prototype.filmsByProperty = function (property, value) {
  const answer = this.films.filter((item) => {
    return item[property] === value;
  });
  return answer;
};

module.exports = Cinema;
