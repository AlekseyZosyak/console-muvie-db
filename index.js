
const buttonPlay = document.getElementById('play');
buttonPlay.addEventListener('click', start);

function start() {
    let numberOfFilms = +prompt("Сколько фильмов вы смотрели?", "");

    const personalMuvieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    }

    for (let i = 0; i < 2; i++) {
        let lookLastFilm = prompt("Один из последних фильмов?", "");
        if (lookLastFilm === ' ') {
            console.log('ERROR');
            break;
        }
        let likeFilm = +prompt("На сколько его оцените?", "");
        if (likeFilm === ' ') {
            console.log('ERROR');
            break;
        }

        personalMuvieDB.movies[lookLastFilm] = likeFilm;
        personalMuvieDB.movies[lookLastFilm] = likeFilm;
    }


    console.log(personalMuvieDB);
}











