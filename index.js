
const buttonPlay = document.getElementById('play');
buttonPlay.addEventListener('click', start);

function start() {
    let numberOfFilms = null;

    while (true) {
        numberOfFilms = +prompt("Сколько фильмов вы смотрели?", "");
        if (numberOfFilms != '' && numberOfFilms != null) {
            break;
        } 
    }
    
  

    const personalMuvieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    }

    for (let i = 0; i < 2; i++) {
        let a = prompt(`Один из последних фильмов под номером : ${i + 1}?`, '');
        let b = +prompt(`На сколько его оцените - фильм под номером : ${i + 1}?`, '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMuvieDB.movies[a] = b;
        } else { 
            i--;
        }
       
    }

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















