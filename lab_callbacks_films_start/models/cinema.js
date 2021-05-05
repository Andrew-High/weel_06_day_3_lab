const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.listFilmTitles = function () {
  const films = this.films.map(film => film.title);
  return films;
};

module.exports = Cinema;
