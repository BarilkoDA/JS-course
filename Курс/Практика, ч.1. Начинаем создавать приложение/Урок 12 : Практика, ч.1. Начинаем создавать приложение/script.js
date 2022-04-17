let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", ""),
    personalMovieDB = {
        count: numberOfFilms, // - сюда передается ответ на первый вопрос
        movies:{}, // - в это свойство поместить пустой объект
        actors:{}, // - тоже поместить пустой объект
        genres:[], // - сюда поместить пустой массив
        privat:false // - в это свойство поместить boolean(логическое) значение false
    };

let answer1 = prompt("Один из последних просмотренных фильмов?", ""), 
    answer2 = prompt("На сколько оцените его?", ""),
    answer3 = prompt("Один из последних просмотренных фильмов?", ""), 
    answer4 = prompt("На сколько оцените его?", "");

    /* personalMovieDB["movies"] = `${answer1}: ${answer2}, 
                                 ${answer3}: ${answer4}`; */

/* Несоответствия в решении

1. Отсутствует 'use strict';
2. Вместо const использовал let
    Если мы не знаем будет ли изменяться переменная - используем const
* Если мы предполагаем, что значение будет числом можно поствить унарный +.
4. Не правильное присвоение данных в объект
    Привильное

    personalMovieDB.movies[a] = b;
    personalMovieDB.movies[c] = d; 
    
Некоторые браузеры не верно работают со значениями через точку. 
При указании значения через [] - данных проблем нет.
    */

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
    

console.log(personalMovieDB);