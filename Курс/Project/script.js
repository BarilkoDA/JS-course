'use strict';

let numberOfFilms;

const personalMovieDB = {
        count: numberOfFilms, // - сюда передается ответ на первый вопрос
        movies:{}, // - в это свойство поместить пустой объект
        actors:{}, // - тоже поместить пустой объект
        genres:[], // - сюда поместить пустой массив
        privat:false, // - в это свойство поместить boolean(логическое) значение false
        start: function() {
            numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
        
            while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
                numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
            }
        },
        rememberMyFilms: function() {

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
        },
        detectPersanalLevel: function() {
            if (personalMovieDB.count < 10) {
                console.log('Просмотрено довольно мало фильмов');
            } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
                console.log('Вы классический зритель');
            } else if (personalMovieDB.count >= 30) {
                console.log('Вы киноман');
            } else {
                console.log('Произошла ошибка');
            }  
        },
        showMyDB: function (privat) {
            if(!privat) {
                console.log(personalMovieDB);
            }
        },
        writeYourGenres: function () {
            for (let i = 1; i <= 3; i++) {
                const answer  = prompt(`Ваш любимый жанр под номером ${i}`, "");
                if (answer == null || answer == '')
                    i--;
                else
                    personalMovieDB.genres[i - 1] = answer;
            }
            personalMovieDB.genres.forEach(function(item, i, arr) {  
                console.log(`Любимый жанр ${i+1} - это ${item}`);
            });
        },
        toggleVisibleMyDB: function (privat) {
            if (privat)
                personalMovieDB.privat = false;
            else
                personalMovieDB.privat = true;
        }
    };


personalMovieDB.start(); 
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersanalLevel();
personalMovieDB.writeYourGenres(); 

personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat);