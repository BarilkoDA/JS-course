'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

const personalMovieDB = {
        count: numberOfFilms, // - сюда передается ответ на первый вопрос
        movies:{}, // - в это свойство поместить пустой объект
        actors:{}, // - тоже поместить пустой объект
        genres:[], // - сюда поместить пустой массив
        privat:false // - в это свойство поместить boolean(логическое) значение false
    };



function rememberMyFilms() {

    for (let i = 0; i < 2; i++)
    {
        const a = prompt("Один из последних просмотренных фильмов?", ""),
            b = prompt("На сколько оцените его?", "");

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersanalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }  
}

detectPersanalLevel();

function showMyDB(privat) {
    if(!privat) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        let question = prompt(`Ваш любимый жанр под номером ${i}`, "");
        personalMovieDB.genres[i - 1] = question;
    }
}

writeYourGenres();
console.log(personalMovieDB.genres);