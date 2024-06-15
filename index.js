
const numberOfFilms = +prompt("Сколько фильмов вы смотрели?", "");
let lookLastFilm1 = prompt("Один из последних фильмов?", "");
let likeFilm1 = +prompt("На сколько его оцените?", "");
let lookLastFilm2 = prompt("Один из последних фильмов?", "");
let likeFilm2 = +prompt("На сколько его оцените?", "");

const personalMuvieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

personalMuvieDB.movies[lookLastFilm1] = likeFilm1;
personalMuvieDB.movies[lookLastFilm2] = likeFilm2;

const a = null;


console.log(personalMuvieDB);