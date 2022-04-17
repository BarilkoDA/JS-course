'use strict';

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", ""),
      personalMovieDB = {
        count: numberOfFilms, // - сюда передается ответ на первый вопрос
        movies:{}, // - в это свойство поместить пустой объект
        actors:{}, // - тоже поместить пустой объект
        genres:[], // - сюда поместить пустой массив
        privat:false // - в это свойство поместить boolean(логическое) значение false
    };

let answer1,
    answer2,
    i = 0;
// Цикл while
/* 
while (i < 2) {
    while (true) {
    answer1 = prompt("Один из последних просмотренных фильмов?", "");
        if (answer1 == "" || answer1 == null || answer1.length > 50) {
            continue;
        }
        else {
            answer2 = prompt("На сколько оцените его?", "");
            personalMovieDB.movies[answer1] = answer2;
            break;
        }
    }
    i++;
} */

// Цикл do while

/* do {
    while (true) {
        answer1 = prompt("Один из последних просмотренных фильмов?", "");
            if (answer1 == "" || answer1 == null || answer1.length > 50) {
                continue;
            }
            else {
                answer2 = prompt("На сколько оцените его?", "");
                personalMovieDB.movies[answer1] = answer2;
                break;
            }
        }
        i++;
}
while (i < 2); */

// Цикл for

for (let i = 0; i < 2; i++)
{
    while (true) {
        answer1 = prompt("Один из последних просмотренных фильмов?", "");
        if (answer1 == "" || answer1 == null || answer1.length > 50) {
            continue;
        }
        else {
            answer2 = prompt("На сколько оцените его?", "");
            personalMovieDB.movies[answer1] = answer2;
            break;
        }
    }
}

if (numberOfFilms < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (numberOfFilms >= 10 && numberOfFilms < 30) {
    console.log('Вы классический зритель');
} else if (numberOfFilms >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}    

console.log(personalMovieDB);