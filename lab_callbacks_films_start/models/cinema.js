const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.listFilmTitles = function () {
  const films = this.films.map(film => film.title);
  return films;
};

Cinema.prototype.findFilm = function (filmName){
  const film = this.films.find(item => item.title === filmName);
  return film;
};

module.exports = Cinema;
