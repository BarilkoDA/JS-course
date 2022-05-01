'use strict';

const personalMovieDB = {
    count: 0, // - сюда передается ответ на первый вопрос
    movies:{}, // - в это свойство поместить пустой объект
    actors:{}, // - тоже поместить пустой объект
    genres:[], // - сюда поместить пустой массив
    privat:false, // - в это свойство поместить boolean(логическое) значение false
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
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
        for (let i = 1; i < 2; i++) {
            //var 1
           /*  const answer  = prompt(`Ваш любимый жанр под номером ${i}`, "");
            if (answer == null || answer == '') {
                console.log("Введены не корректные данные.");
                i--;
            }
            else
                personalMovieDB.genres[i - 1] = answer;
        }
        personalMovieDB.genres.forEach((item, i) => {  
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        }); */
        // var 2
            let genres = prompt('Введите ваши любимые жанры через запятую');

            if (genres == null || genres == '') {
                console.log("Вы ввели некоректные данные или не ввели их вовсе");
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.sort();
            }
        }   
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat)
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
personalMovieDB.toggleVisibleMyDB();