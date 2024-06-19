const buttonPlay = document.getElementById('play');
buttonPlay.addEventListener('click', () => start());

let numberOfFilms = null;

function start() {
    do {
        numberOfFilms = +prompt("Сколько фильмов вы смотрели?", "").trim();
    } while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms));

    const personalMuvieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: true,

        writeYourGenres: function () {
            for (let i = 0; i < 3; i++) {
                const genres = prompt(`Ваш любимый жанр под номером : ${i + 1} ?`).trim();
                if (genres == '' || genres == null) {
                    i--;
                    continue;
                }
                personalMuvieDB.genres[i] = genres;
                console.log(`Любимый жанр: ${i + 1} из массива ${genres[i]}`)
            }
        },

        rememberMyFilms: function () {
            for (let i = 0; i < 2; i++) {
                let a = prompt(`Один из последних фильмов под номером : ${i + 1}?`, '').trim();
                let b = +prompt(`На сколько его оцените - фильм под номером : ${i + 1}?`, '').trim();

                if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                    personalMuvieDB.movies[a] = b;
                } else {
                    i--;
                }
            }
        },

        detectPersonalLevel: function () {
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
        },

        showMyDB: function (hidden) {
            return (!hidden) ? console.log(`Главный объект программы! ${console.log(personalMuvieDB)}`) : null;
        },

        toggleVisibleMyDB: function (hidden) {
            personalMuvieDB.privat = (!hidden) ? true : false;
        }
    }
    // personalMuvieDB.writeYourGenres();
    // personalMuvieDB.rememberMyFilms();
    // personalMuvieDB.detectPersonalLevel();
    // personalMuvieDB.toggleVisibleMyDB(personalMuvieDB.privat);
    // personalMuvieDB.showMyDB(personalMuvieDB.privat);

}