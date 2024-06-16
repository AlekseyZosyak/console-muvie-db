
const buttonPlay = document.getElementById('play');
buttonPlay.addEventListener('click', start);

let numberOfFilms = null;

function start() {
    do {
        numberOfFilms = +prompt("Сколько фильмов вы смотрели?", "");
    } while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms));


    const personalMuvieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    }

    function writeYourGenres() {
        for (let i = 0; i < 3; i++) {
            const genres = prompt(`Ваш любимый жанр под номером : ${i + 1} ?`);
            if (genres == '' || genres == null) {
                i--;
                continue;
            }
            personalMuvieDB.genres[i] = genres;
        }
    }
    writeYourGenres();

    function showMyDB() {
        return (personalMuvieDB.privat === false) ? console.log('Главный объект программы!') : null;
     }
     showMyDB();

    function rememberMyFilms() {
        for (let i = 0; i < 2; i++) {
            let a = prompt(`Один из последних фильмов под номером : ${i + 1}?`, '');
            let b = +prompt(`На сколько его оцените - фильм под номером : ${i + 1}?`, '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMuvieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    }
    rememberMyFilms();

    function detectPersonalLevel() {
        console.log(personalMuvieDB);
        if (personalMuvieDB.count < 10) {
            console.log("просмотренно довольно мало фильмов");
        } else if (personalMuvieDB.count > 10 && personalMuvieDB.count < 30) {
            console.log("Вы классичекий зритель");
        } else if (personalMuvieDB.count > 30) {
            console.log("Вы киноман!!!");
        } else {
            console.log("Произошла ошибка");
        }
    }

    detectPersonalLevel();
}


















